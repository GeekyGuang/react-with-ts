import { useEffect, useState } from "react"

const MouseTracker:React.FC = () => {
    const [position, setPosition] = useState({x:0, y:0})
    useEffect(()=>{
        console.log("I'm in")
        const updatePosition = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY})}

        document.addEventListener('click', updatePosition)

        return () => {
            console.log("let's remove")
            document.removeEventListener('click', updatePosition)
        }
    }, [])
    return (
        <p>x: {position.x}, y: {position.y}</p>
    )
}

export default MouseTracker