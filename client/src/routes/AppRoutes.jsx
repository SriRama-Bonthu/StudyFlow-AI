import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Notes from "../pages/Notes/Notes";
import PDFUpload from "../pages/PDFUpload/PDFUpload";
import ChatPDF from "../pages/ChatPDF/ChatPDF";
import AIHub from "../pages/AIHub/AIHub";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route

  path="/dashboard"

  element={

    <ProtectedRoute>

      <Dashboard />

    </ProtectedRoute>

  }
/>
<Route

  path="/notes"

  element={

    <ProtectedRoute>

      <Notes />

    </ProtectedRoute>

  }
/>
<Route
  path="/pdf-upload"
  element={<PDFUpload />}
/>

<Route

  path="/chat-pdf"

  element={

    <ProtectedRoute>

      <ChatPDF />

    </ProtectedRoute>

  }

/>
<Route

  path="/ai-tools"

  element={

    <ProtectedRoute>

      <AIHub />

    </ProtectedRoute>

  }

/>

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;