import {useState} from "react";


// function MyButton(count, onClick) {
function MyButton({count, onClick}) {
    return <button onClick={onClick}>Click {count} times</button>;
}

export default function MyApp() {

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>welcome to my app</h1>
            {/* React 组件必须以大写字母开头 而 HTML 标签则必须是小写字母*/}
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    )
}