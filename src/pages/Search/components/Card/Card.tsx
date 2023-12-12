import {Daum} from '../../../../types/typeGenres'
import { useEffect, useState } from 'react'
import styles from './cardContainer.module.css'

const Card = (genre: Daum) => {
  const [imgString, setImgString] = useState<string>()
  const [color, setColor] = useState<string>()

  const generarNuevoColor = () => {
    const simbolos = "0123456789ABC000";
    let color = "#";
    for(let i = 0; i < 6; i++){
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    setColor(color)
  }

  const randomImg = () => {
    const num = Math.floor(Math.random() * 6) + 1
    const string = `/public/sample-images/${num}.jpg`
    setImgString(string)
  }

  useEffect(() => {
    
    generarNuevoColor()
    randomImg()
  }, [])

  return (
    <a 
    href={`search/${genre.path}/genres/${genre.mal_id}`}
    className={styles.card}
    style={color ?{backgroundColor: color} :{backgroundColor: 'var(--color-1)'}}>
      <p>{genre.name}</p>
      <img src={imgString} alt="image genre" />
    </a>
  )
}

export default Card