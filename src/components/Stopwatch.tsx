import { useEffect, useRef, useState } from "react"

const Stopwatch = () => {
    const timerIdRef = useRef<any>(0)
    const [count, setCount] = useState(0)

    const startHandler = () => {
        if ( timerIdRef.current ) {return}
        timerIdRef.current = setInterval(() => setCount(c => c+1), 1000)
    }

    const stopHandler = () => {
        clearInterval(timerIdRef.current)
        timerIdRef.current = 0
    }

    const resetHandler = () => {
        setCount(0)
        clearInterval(timerIdRef.current)
        timerIdRef.current = 0
    }

    useEffect(() => {
        return () => {
            console.log('bey~')
            clearInterval(timerIdRef.current)
        }
    }, [])

    return (
        <div>
            <div>Timer: {count}s</div>
            <div>
                <button onClick={startHandler}>Start</button>
                <button onClick={stopHandler}>Stop</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch