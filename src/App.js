import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
    return (
        <>
            <Navbar title="TextUtils" about="About us" />,
            <Textform heading="Enter text below to Analyse" />
        </>
    );
}

export default App;
