import { useState } from "react"

const LikeButton:React.FC = () => {
    const [like, setLike] = useState(0)
    const [onoff, setOnoff] = useState(true)
    return (
        <>
        <button onClick={()=>{setLike(like + 1)}}>
          {like} 👍
        </button>
        <button onClick={()=>{setOnoff(!onoff)}}>
          {onoff ? 'on' : 'off'}
        </button>
        </>
    )
}

export default LikeButton