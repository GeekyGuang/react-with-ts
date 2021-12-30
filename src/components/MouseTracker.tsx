
import useMousePosition from "../hooks/useMousePosition"

const MouseTracker:React.FC = () => {
    const position = useMousePosition()
    return (
        <>
        <p>x: {position.x}, y: {position.y}</p>
        </>
    )
}

export default MouseTracker