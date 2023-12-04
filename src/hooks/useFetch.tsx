import { useState, useEffect } from 'react'
 
const useFetch = (slug: string, time=0) => {
  const [ loding, setLoding ] = useState(true)
  const [ data, setData ] = useState()

  const fetching = async () => {
    setLoding(true)
    await fetch(`https://api.jikan.moe/v4/${slug}`)
    .then(res => res.json())
    .then(res => setData(res))
    .catch (err => {
      console.log(err)
    })
    setLoding(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetching()
    }, time*1000)
    return () => clearTimeout(timer)
  }, [])

  return {data, loding}
}

export default useFetch