import "./Notes.css";

import { useEffect, useState } from "react";

import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";

import Topbar from "../../components/Topbar/Topbar";

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

        {
          content,
        },

        config,
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

        config,
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

        {
          content,
        },

        config,
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

        {
          content,
        },

        config,
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
        <Topbar />

        <div className="notes-container">
          <div className="notes-header">
            <h2>AI Notes Workspace</h2>

            <button className="primary-btn" onClick={saveNote}>
              {loading ? "Saving..." : "Save Note"}
            </button>
          </div>

          <textarea
            className="notes-editor"
            placeholder="Write your notes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="summary-section">
            <button className="primary-btn" onClick={generateSummary}>
              {aiLoading ? "Generating..." : "Generate AI Summary"}
            </button>
            <button className="primary-btn" onClick={generateQuiz}>
              {quizLoading ? "Generating Quiz..." : "Generate Quiz"}
            </button>

            <div className="summary-box">
              {summary ? summary : "AI generated summary will appear here."}
            </div>
            <div className="quiz-section">
              <h2>AI Quiz</h2>

              <div className="quiz-box">
                {quiz ? quiz : "AI-generated quiz will appear here."}
              </div>
            </div>
          </div>
          <div className="notes-list">
            <h3>Saved Notes</h3>

            {notes.map((note) => (
              <div key={note._id} className="saved-note">
                {note.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
