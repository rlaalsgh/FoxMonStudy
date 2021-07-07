import logo from './logo.svg';
import './App.css';
import Views from "./Views";
import {HashRouter,Router} from "react-router-dom"

function App() {
  return (
    <div>
     <h1>게시판
     </h1>
     <Views/>
    </div>
  );
}

export default App;
