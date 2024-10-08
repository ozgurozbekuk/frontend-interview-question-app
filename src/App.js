import { Routes, Route,  useLocation } from "react-router-dom";
import Cssque from "./components/questions/cssque/Cssque.jsx";
import Htmlque from "./components/questions/htmlque/Htmlque.jsx";
import Jsque from "./components/questions/jsque/Jsque.jsx";
import Mixque from "./components/questions/mixque/Mixque.jsx";
import Reactque from "./components/questions/reactque/Reactque.jsx";
import Start from "./components/start/Start.jsx";
import "./App.css"
import Nodejsque from "./components/questions/nodejsque/Nodejsque.jsx";
import Sqlque from "./components/questions/sqlque/Sqlque.jsx";


function App() {


  const location = useLocation();

  const showNavbar = location.pathname === "/";
  return (
    <div className="App">
      {showNavbar && <Start/> }
      <Routes>
        {/* <Route path="/" element={<Start />} /> */}
        <Route path="/mix" element={<Mixque />} />
        <Route path="/css" element={<Cssque />} />
        <Route path="/js" element={<Jsque />} />
        <Route path="/react" element={<Reactque />} />
        <Route path="/html" element={<Htmlque />} />
        <Route path="/nodejs" element={<Nodejsque />} />
        <Route path="/sql" element={<Sqlque />} />
      </Routes>
    
    </div>
  );
}

export default App;
