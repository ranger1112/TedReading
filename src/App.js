import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {useState} from "react";


function App() {

    const [selectedKey, setSelectedKey] = useState('recommend');


    return (
        <div className="App">
            <Header selectedKey={selectedKey} onItemClick={setSelectedKey}></Header>
            <Content selectedKey={selectedKey}></Content>
            <Footer></Footer>
        </div>
    );
}

export default App;
