import "./PDFUpload.css";
import { FiUploadCloud, FiFileText, FiZap, FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

function PDFUpload() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleUpload = async () => {
    if (!file) return;

    try {
      setLoading(true);
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

      setSummary(response.data.summary);
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
        <Topbar title="AI PDF Summarizer" subtitle="Turn lengthy PDF textbooks and research papers into instant revision notes" />

        <div className="pdf-container">
          <div className="upload-card glass-card">
            <div className="upload-area">
              <div className="upload-icon-circle">
                <FiUploadCloud className="upload-icon" />
              </div>

              <h2>Upload Study Document</h2>
              <p>Select your PDF textbook, syllabus, or lecture slides</p>

              <label className="custom-upload-btn">
                <FiFileText />
                <span>{file ? "Change PDF" : "Browse Files"}</span>
                <input
                  type="file"
                  accept=".pdf"
                  hidden
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>

              {file && (
                <div className="selected-file-badge">
                  <FiCheckCircle className="file-check-icon" />
                  <span className="file-name">{file.name}</span>
                </div>
              )}

              <button 
                className="primary-btn summarize-btn" 
                onClick={handleUpload}
                disabled={!file || loading}
              >
                <FiZap />
                <span>{loading ? "Generating Summary..." : "Summarize Document"}</span>
              </button>
            </div>
          </div>

          <div className="summary-card glass-card">
            <div className="summary-card-header">
              <FiZap className="summary-header-icon" />
              <h2>AI Summary Output</h2>
            </div>
            <div className="summary-content">
              {summary ? (
                <p>{summary}</p>
              ) : (
                <p className="placeholder-text">
                  Your AI-generated PDF summary will appear here once you upload and summarize a PDF document.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFUpload;
