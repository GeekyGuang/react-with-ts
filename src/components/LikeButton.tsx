import { useEffect, useState } from "react"
import useURLLoader from "../hooks/useURLLoader"

const LikeButton:React.FC = () => {
    const [like, setLike] = useState(0)
    const [onoff, setOnoff] = useState(true)
    const [data, isLoading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [onoff])
    useEffect(()=>{
        document.title = `点击了${like}次`
    })
    return (
        <>
        <button onClick={()=>{setLike(like + 1)}}>
          {like} 👍
        </button>
        <button onClick={()=>{setOnoff(!onoff)}}>
          Refresh Dog Images
        </button>
        {isLoading ? <p>🐶 isLoading</p> : <div><img src={data.message} alt="" width="300"/></div> }
        </>
    )
}

export default LikeButton