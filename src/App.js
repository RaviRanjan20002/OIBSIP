import Header from "./components/Header";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Foot from "./components/Foot";
import Footer from "./components/Footer";

import "./styles/header.css";
import "./styles/home.css";
import "./styles/home2.css";
import "./styles/foot.css";
import "./styles/footer.css";

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Home2/>
    <Foot/>
    <Footer/>
    </div>
  );
}
export default App;
