import "./PDFUpload.css";
import { FiUploadCloud } from "react-icons/fi";
import {
  useState
} from "react";

import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";

import Topbar from "../../components/Topbar/Topbar";

function PDFUpload() {

  const [file,setFile] = useState(null);

  const [summary,setSummary] = useState("");

  const [loading,setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleUpload = async () => {

    if(!file) return;

    try {

      setLoading(true);

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

      setSummary(
        response.data.summary
      );

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

        <div className="pdf-container">

        <div className="pdf-header">

    <h1>
      AI PDF Summarizer
    </h1>

    <p>
      Upload your study materials and generate intelligent AI-powered
      revision notes instantly.
    </p>

  </div>

  <div className="upload-area">

  <FiUploadCloud className="upload-icon" />

  <h2>
    Upload Your PDF
  </h2>

  <p>
    Drag & drop your study material
    or browse files.
  </p>

  <label className="custom-upload-btn">

    Choose PDF

    <input

      type="file"

      accept=".pdf"

      hidden

      onChange={(e)=>
        setFile(
          e.target.files[0]
        )
      }

    />

  </label>

  {

    file && (

      <span className="file-name">

        {file.name}

      </span>

    )

  }
  <button
  className="primary-btn"
  onClick={handleUpload}
>

  {
    loading
      ? "Generating Summary..."
      : "Upload & Summarize"
  }

</button>

</div>

          {/* <div className="upload-card">

            <input

              type="file"

              accept=".pdf"

              onChange={(e)=>
                setFile(
                  e.target.files[0]
                )
              }

            />

            <button
              className="primary-btn"
              onClick={handleUpload}
            >

              {
                loading
                ? "Generating..."
                : "Upload & Summarize"
              }

            </button>

          </div> */}

          <div className="summary-card">

            <h2>
              AI Summary
            </h2>

            <p>

              {
                summary
                ? summary
                : "Your AI-generated PDF summary will appear here."
              }

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PDFUpload;