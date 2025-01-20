import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProjectDetail from "./pages/ProjectDetail";
import { DarkModeProvider } from "./context/DarkModeContext"; // DarkModeProvider'ı içe aktar

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectUrl" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
