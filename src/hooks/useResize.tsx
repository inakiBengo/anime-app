import { useEffect, useState } from "react"

const useResize = () => {
  const [resize, setResize] = useState<number>(window.innerWidth)

  const windowSizeHandler = () => {
    setResize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', windowSizeHandler)

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    }
  }, [])

  return {resize}
}

export default useResize