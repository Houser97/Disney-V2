import { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
      const HandleResize = () => {
        setWindowSize({
            width: innerWidth,
            height: innerHeight, 
        })
      }
    
      window.addEventListener('resize', HandleResize);
      HandleResize()

      return () => {
        window.removeEventListener('resize', HandleResize)
      }
    }, [])

    return windowSize;

}

export default useWindowSize