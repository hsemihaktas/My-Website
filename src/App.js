import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects/:projectUrl" element={<ProjectDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;
