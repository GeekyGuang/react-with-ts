import { useRef, useState } from "react"

const LogButtonClicks = () => {
    const [clicks, setClicks] = useState(0)
    const countRef = useRef(0)

    const handle = () => {
        setClicks(clicks+1)
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`)
    }

    console.log('I rendered!')

    return (
        <>
        <p>{clicks}</p>
    <button onClick={handle}>Click me</button>
    
        </>
    )
}

export default LogButtonClicks