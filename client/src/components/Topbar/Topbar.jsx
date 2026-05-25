import "./Topbar.css";

function Topbar() {

  return (

    <div className="topbar">

      <div>

        <h2>
          Dashboard
        </h2>

        <p>
          Welcome back to StudyFlow AI
        </p>

      </div>

      <div className="topbar-search">

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

    </div>

  );
}

export default Topbar;