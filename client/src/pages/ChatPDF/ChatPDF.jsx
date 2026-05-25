import "./ChatPDF.css";

import {
  useState
} from "react";

import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";

import Topbar from "../../components/Topbar/Topbar";

function ChatPDF() {

  const [pdfText,setPdfText]
  = useState("");

  const [question,setQuestion]
  = useState("");

  const [messages,setMessages]
  = useState([]);

  const [loading,setLoading]
  = useState(false);

  const token =
  localStorage.getItem("token");

  const handlePDFUpload = async (e) => {

    const file = e.target.files[0];

    if(!file) return;

    try {

      const formData = new FormData();

      formData.append("pdf",file);

      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/pdf/upload`,

        formData,

        {

          headers: {

            Authorization:
            `Bearer ${token}`,

          },

        }

      );

      setPdfText(
        response.data.summary
      );

    } catch (error) {

      console.log(error);

    }

  };

  const sendMessage = async () => {

    if(!question.trim()) return;

    const userMessage = {

      type:"user",

      text:question,

    };

    setMessages((prev)=>
    [...prev,userMessage]);

    try {

      setLoading(true);

      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/ai/chat-pdf`,

        {

          question,

          pdfText,

        },

        {

          headers: {

            Authorization:
            `Bearer ${token}`,

          },

        }

      );

      const aiMessage = {

        type:"ai",

        text:response.data.answer,

      };

      setMessages((prev)=>
      [...prev,aiMessage]);

      setQuestion("");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="chatpdf-container">

          <div className="upload-section">

            <input

              type="file"

              accept=".pdf"

              onChange={handlePDFUpload}

            />

          </div>

          <div className="chat-box">

            {

              messages.map((msg,index)=>(

                <div

                  key={index}

                  className={
                    msg.type === "user"
                    ? "user-message"
                    : "ai-message"
                  }

                >

                  {msg.text}

                </div>

              ))

            }

            {

              loading && (

                <div className="ai-message">

                  AI is typing...

                </div>

              )

            }

          </div>

          <div className="chat-input-section">

            <input

              type="text"

              placeholder="Ask question from PDF..."

              value={question}

              onChange={(e)=>
                setQuestion(e.target.value)
              }

            />

            <button
              className="primary-btn"
              onClick={sendMessage}
            >

              Send

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ChatPDF;