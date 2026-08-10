import "./Notes.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { FiSave, FiZap, FiHelpCircle, FiFileText } from "react-icons/fi";

function Notes() {
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState("");
  const [quizLoading, setQuizLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const saveNote = async () => {
    if (!content.trim()) return;
    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/notes`,
        { content },
        config
      );
      setContent("");
      fetchNotes();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/notes`,
        config
      );
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateSummary = async () => {
    if (!content.trim()) return;
    try {
      setAiLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/summary`,
        { content },
        config
      );
      setSummary(response.data.summary);
    } catch (error) {
      console.log(error);
    } finally {
      setAiLoading(false);
    }
  };

  const generateQuiz = async () => {
    if (!content.trim()) return;
    try {
      setQuizLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/quiz`,
        { content },
        config
      );
      setQuiz(response.data.quiz);
    } catch (error) {
      console.log(error);
    } finally {
      setQuizLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar title="AI Notes Workspace" subtitle="Write notes, save resources, and generate instant AI summaries" />

        <div className="notes-container">
          <div className="notes-header-actions glass-card">
            <h2>Editor & AI Tools</h2>
            <div className="notes-action-buttons">
              <button className="primary-btn" onClick={saveNote} disabled={loading}>
                <FiSave />
                <span>{loading ? "Saving..." : "Save Note"}</span>
              </button>
              <button className="secondary-action-btn cyan" onClick={generateSummary} disabled={aiLoading}>
                <FiZap />
                <span>{aiLoading ? "Summarizing..." : "AI Summary"}</span>
              </button>
              <button className="secondary-action-btn emerald" onClick={generateQuiz} disabled={quizLoading}>
                <FiHelpCircle />
                <span>{quizLoading ? "Generating..." : "Generate Quiz"}</span>
              </button>
            </div>
          </div>

          <textarea
            className="notes-editor glass-card"
            placeholder="Type or paste your study notes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="ai-results-grid">
            <div className="ai-result-box glass-card">
              <div className="result-box-header">
                <FiZap className="icon-cyan" />
                <h3>AI Summary Output</h3>
              </div>
              <div className="result-content">
                {summary ? summary : "Click 'AI Summary' to generate key takeaways from your note content."}
              </div>
            </div>

            <div className="ai-result-box glass-card">
              <div className="result-box-header">
                <FiHelpCircle className="icon-emerald" />
                <h3>AI Quiz Output</h3>
              </div>
              <div className="result-content quiz-content">
                {quiz ? quiz : "Click 'Generate Quiz' to produce practice questions based on your notes."}
              </div>
            </div>
          </div>

          <div className="notes-list-section">
            <div className="section-title-row">
              <FiFileText className="icon-purple" />
              <h3>Saved Notes ({notes.length})</h3>
            </div>

            <div className="saved-notes-grid">
              {notes.length === 0 ? (
                <div className="empty-notes-card glass-card">
                  <p>No saved notes yet. Write your note above and click "Save Note".</p>
                </div>
              ) : (
                notes.map((note) => (
                  <div key={note._id || Math.random()} className="saved-note-card glass-card">
                    <p>{note.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
