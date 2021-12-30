import { useEffect, useState } from "react"
import axios from 'axios'

const useURLLoader = (url: string, deps: any[] = []) => {
   const [data, setData] = useState<any>(null)
   const [isLoading, setIsLoading] = useState(true)
   
   useEffect(() => {
       setIsLoading(true)
       axios.get(url).then(res => {
           setData(res.data)
           console.log(data)
           console.log(isLoading)
           setIsLoading(false)
       })
   }, deps)
   
   return [
       data, 
       isLoading
    ]
}

export default useURLLoader