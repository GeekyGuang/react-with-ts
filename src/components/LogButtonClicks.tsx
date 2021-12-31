import { useRef, useState } from "react"
import { isConstructorDeclaration } from "typescript"

const LogButtonClicks = () => {
    const [count, setCount] = useState(0)
    // const countRef = useRef(0)

    const handle = () => {
        setCount(count + 1)
        // countRef.current++;
        console.log(`Clicked ${count} times`)
    }

    console.log('I rendered!')
    console.log(count)

    return (
        <>
    <button onClick={handle}>Click me</button>
    
        </>
    )
}

export default LogButtonClicks