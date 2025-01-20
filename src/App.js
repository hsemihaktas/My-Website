import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProjectDetail from "./pages/ProjectDetail";
import { DarkModeProvider } from "./context/DarkModeContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectUrl" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </DarkModeProvider>
    </LanguageProvider>
  );
};

export default App;
