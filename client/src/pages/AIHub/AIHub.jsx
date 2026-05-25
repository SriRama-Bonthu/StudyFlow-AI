import "./AIHub.css";

import Sidebar from "../../components/Sidebar/Sidebar";

import Topbar from "../../components/Topbar/Topbar";

const tools = [

  {
    category:"AI Chat",

    name:"ChatGPT",

    desc:"AI assistant for coding, learning and productivity.",

    link:"https://chatgpt.com",
  },

  {
    category:"AI Chat",

    name:"Gemini",

    desc:"Google AI assistant for research and study.",

    link:"https://gemini.google.com",
  },

  {
    category:"AI Chat",

    name:"Perplexity",

    desc:"AI-powered search and research assistant.",

    link:"https://www.perplexity.ai",
  },

  {
    category:"Coding AI",

    name:"Cursor AI",

    desc:"AI-powered code editor for developers.",

    link:"https://cursor.sh",
  },

  {
    category:"Coding AI",

    name:"GitHub Copilot",

    desc:"AI coding assistant integrated with VS Code.",

    link:"https://github.com/features/copilot",
  },

  {
    category:"Coding AI",

    name:"Claude",

    desc:"Advanced AI assistant for reasoning and coding.",

    link:"https://claude.ai",
  },

  {
    category:"Image AI",

    name:"Leonardo AI",

    desc:"Generate AI images and artwork instantly.",

    link:"https://leonardo.ai",
  },

  {
    category:"Image AI",

    name:"Canva AI",

    desc:"AI-powered designs, presentations and graphics.",

    link:"https://canva.com",
  },

  {
    category:"Video AI",

    name:"Runway ML",

    desc:"AI video generation and editing platform.",

    link:"https://runwayml.com",
  },

  {
    category:"Video AI",

    name:"Pika Labs",

    desc:"Create AI videos and animations.",

    link:"https://pika.art",
  },

];
function AIHub() {

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="aihub-container">

          <div className="aihub-header">

            <h1>
              AI Workspace
            </h1>

            <p>
              Discover powerful AI tools for students,
              developers and creators.
            </p>

          </div>

          <div className="tools-grid">

            {

              tools.map((tool,index)=>(

                <div
                  key={index}
                  className="tool-card"
                >

                  <span className="tool-category">

                    {tool.category}

                  </span>

                  <h2>
                    {tool.name}
                  </h2>

                  <p>
                    {tool.desc}
                  </p>

                  <button

                    className="primary-btn"

                    onClick={()=>
                      window.open(
                        tool.link,
                        "_blank"
                      )
                    }

                  >

                    Open Tool

                  </button>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default AIHub;