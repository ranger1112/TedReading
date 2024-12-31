import logo from './logo.svg';
import './App.css';
import MyApp from "./components/MyApp";

let user = {
    name: "John",
}

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt=""/>
            <h1>{user.name}</h1>
            <MyApp></MyApp>
        </div>
    );
}

export default App;
