import "./AIHub.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { FiExternalLink, FiZap, FiCode, FiImage, FiVideo, FiMessageSquare } from "react-icons/fi";

const tools = [
  {
    category: "AI Chat",
    name: "ChatGPT",
    desc: "OpenAI's flagship assistant for coding, research and learning.",
    link: "https://chatgpt.com",
    icon: <FiMessageSquare />
  },
  {
    category: "AI Chat",
    name: "Gemini",
    desc: "Google AI assistant for multimodal research and study.",
    link: "https://gemini.google.com",
    icon: <FiZap />
  },
  {
    category: "AI Chat",
    name: "Perplexity AI",
    desc: "Conversational answer engine with live citations.",
    link: "https://www.perplexity.ai",
    icon: <FiMessageSquare />
  },
  {
    category: "Coding AI",
    name: "Cursor AI",
    desc: "Next-gen AI code editor for seamless development.",
    link: "https://cursor.sh",
    icon: <FiCode />
  },
  {
    category: "Coding AI",
    name: "GitHub Copilot",
    desc: "Pair programmer integrated directly in VS Code.",
    link: "https://github.com/features/copilot",
    icon: <FiCode />
  },
  {
    category: "Coding AI",
    name: "Claude AI",
    desc: "Anthropic's advanced model for reasoning and writing.",
    link: "https://claude.ai",
    icon: <FiZap />
  },
  {
    category: "Image AI",
    name: "Leonardo AI",
    desc: "Generative AI suite for creating detailed artwork.",
    link: "https://leonardo.ai",
    icon: <FiImage />
  },
  {
    category: "Image AI",
    name: "Canva AI Magic",
    desc: "AI design assistant for presentations & infographics.",
    link: "https://canva.com",
    icon: <FiImage />
  },
  {
    category: "Video AI",
    name: "Runway ML",
    desc: "Generative video & motion graphics studio.",
    link: "https://runwayml.com",
    icon: <FiVideo />
  },
  {
    category: "Video AI",
    name: "Pika Labs",
    desc: "AI video synthesis platform for dynamic animations.",
    link: "https://pika.art",
    icon: <FiVideo />
  },
];

function AIHub() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar title="AI Tools Hub" subtitle="Explore leading AI tools curated for students & developers" />

        <div className="aihub-container">
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card glass-card">
                <div className="tool-card-top">
                  <span className={`tool-category-badge ${tool.category.toLowerCase().replace(" ", "-")}`}>
                    {tool.category}
                  </span>
                  <div className="tool-icon-wrapper">
                    {tool.icon}
                  </div>
                </div>

                <div className="tool-card-body">
                  <h2>{tool.name}</h2>
                  <p>{tool.desc}</p>
                </div>

                <button
                  className="primary-btn tool-open-btn"
                  onClick={() => window.open(tool.link, "_blank")}
                >
                  <span>Open Tool</span>
                  <FiExternalLink />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIHub;