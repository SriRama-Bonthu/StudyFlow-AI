import "./ChatPDF.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { FiUploadCloud, FiSend, FiFileText, FiCpu, FiUser, FiCheckCircle } from "react-icons/fi";

function ChatPDF() {
  const [pdfText, setPdfText] = useState("");
  const [fileName, setFileName] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const chatEndRef = useRef(null);

  const token = localStorage.getItem("token");

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handlePDFUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("pdf", file);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/pdf/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPdfText(response.data.summary);
      setMessages([
        {
          type: "ai",
          text: `📄 Document "${file.name}" ready! Ask me any question based on this PDF.`,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = {
      type: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentQuestion = question;
    setQuestion("");

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/chat-pdf`,
        {
          question: currentQuestion,
          pdfText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const aiMessage = {
        type: "ai",
        text: response.data.answer || "No response received from AI.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Sorry, I couldn't fetch an answer. Please check your backend connection." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar title="Chat With PDF" subtitle="Upload any study PDF and converse with AI in real-time" />

        <div className="chatpdf-container">
          {/* TOP UPLOAD CARD */}
          <div className="pdf-status-bar glass-card">
            <div className="pdf-status-info">
              <FiFileText className="pdf-icon" />
              <div>
                <h4>{fileName ? fileName : "No PDF Selected"}</h4>
                <p>{pdfText ? "Document processed & active" : "Upload a PDF to start asking questions"}</p>
              </div>
            </div>

            <label className="pdf-upload-btn">
              <FiUploadCloud />
              <span>{uploading ? "Processing..." : fileName ? "Change PDF" : "Upload PDF"}</span>
              <input type="file" accept=".pdf" onChange={handlePDFUpload} hidden />
            </label>
          </div>

          {/* CHAT MESSAGES DISPLAY */}
          <div className="chat-box glass-card">
            {messages.length === 0 ? (
              <div className="empty-chat-state">
                <FiCpu className="bot-placeholder-icon" />
                <h3>No document loaded</h3>
                <p>Upload a PDF document using the top bar above, then ask any question about your material.</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-bubble-wrapper ${msg.type === "user" ? "user-wrapper" : "ai-wrapper"}`}
                >
                  <div className="chat-avatar">
                    {msg.type === "user" ? <FiUser /> : <FiCpu />}
                  </div>
                  <div className={`chat-bubble ${msg.type === "user" ? "user-bubble" : "ai-bubble"}`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))
            )}

            {loading && (
              <div className="chat-bubble-wrapper ai-wrapper">
                <div className="chat-avatar">
                  <FiCpu />
                </div>
                <div className="chat-bubble ai-bubble typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* INPUT BAR */}
          <div className="chat-input-section glass-card">
            <input
              type="text"
              placeholder={pdfText ? "Ask a question about your PDF..." : "Upload a PDF first to ask questions..."}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={!pdfText && messages.length === 0}
            />
            <button className="primary-btn send-btn" onClick={sendMessage} disabled={loading || !question.trim()}>
              <FiSend />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPDF;