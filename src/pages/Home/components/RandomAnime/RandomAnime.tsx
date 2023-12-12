import styles from './randomAnime.module.css'
import {Data, Genre} from '../../../../types/typeRandomAnime'
import Stars from "../../../../components/Stars/Stars"
import { useState, useEffect } from "react"

const RandomAnime = () => {
  const [isAnime, setIsAnime] = useState(true)
  const [containt, setContaint] = useState('synopsis')
  const [random, setRandom] = useState<Data | undefined>()

  const fetching = async (slug: string) => {
    await fetch(`https://api.jikan.moe/v4/${slug}`)
    .then(res => res.json())
    .then(res => setRandom(res.data))
  }

  const randomAnime = () => {
    fetching('random/anime')
    setIsAnime(true)
  }
  const randomManga = () => {
    fetching('random/manga')
    setIsAnime(false)
  }

  useEffect(() => {
    fetching('random/anime')
  }, [])
  
  return (
    <div className={styles.randomAnime}>

        <h2 className={styles.title}>What to look at?</h2>

        <div className={styles.randomButtons}>
          <button onClick={() => {randomAnime()}}>Random Anime</button>
          <button onClick={() => {randomManga()}}>Random Manga</button>
        </div>

        <div className={styles.name}>
          <p>{random?.title}</p>
          {
            random?.aired
            ? <p>{random?.aired.prop.from.year}</p>
            : <p>{random?.published.prop.from.year}</p>
          }
        </div>

        <div className={styles.stars}>
          <Stars stars={random?.score}/>
        </div>
        
        <div className={styles.info}>

          <div className={styles.image}>
            <img src={random?.images.jpg.large_image_url} alt="" />
          </div>
          
          <div className={styles.table}>

            <div className={styles.tablist}>
              <div className={styles.buttonContainer}>
                <button 
                onClick={() => setContaint('synopsis')} 
                style={containt === 'synopsis' ?{background: 'var(--color-2)'} :{background: 'var(--color-1)'}}>Synopsis</button>
                <button 
                onClick={() => setContaint('details')}
                style={containt === 'details' ?{background: 'var(--color-2)'} :{background: 'var(--color-1)'}}>Details</button>
                <button 
                onClick={() => setContaint('trailer')}
                style={containt === 'trailer' ?{background: 'var(--color-2)'} :{background: 'var(--color-1)'}}>Trailer</button>
              </div>
            </div>

            <div className={styles.containt}>

              <div 
               className={styles.synopsis}
               style={containt === 'synopsis' ?{zIndex: '90', display: "block"} :{zIndex: '0', display: "none"}}>
                <p>{random?.synopsis}</p>
              </div>

              <div 
              className={styles.details}
              style={containt === 'details' ?{zIndex: '90', display: "block"} :{zIndex: '0', display: "none"}}>
                <p className={styles.detail}>Episodes: <span>{random?.episodes}</span></p>
                <p className={styles.detail}>Duration: <span>{random?.duration}</span></p>
                <p className={styles.detail}>Status: <span>{random?.status}</span></p>
                {
                  random?.aired
                  ? <p className={styles.detail}>Air date: <span>{random?.aired.string}</span></p>
                  : <p className={styles.detail}>Air date: <span>{random?.published.string}</span></p>
                }
                <p className={styles.detail}>Type: <span>{random?.type}</span></p>
                <p className={styles.detail}>Age rating: <span>{random?.rating}</span></p>
                <p className={styles.detail}>
                  Genres: 
                  {
                  random?.genres.map((item:Genre) => 
                  <span key={item.mal_id}> {item.name},</span>)
                  }
                </p>
                <p className={styles.detail}>Themes: <span>{random?.themes?.name}</span></p>
              </div>
              
              {
                random?.trailer
              ? <div 
              className={styles.trailer}
              style={containt === 'trailer' ?{zIndex: '90', display: "block"} :{zIndex: '0', display: "none"}}>
                <iframe src={`https://www.youtube.com/embed/${random?.trailer.youtube_id}?rel=0&showInfo=0&enablejsapi=1&playlist=${random?.trailer.youtube_id}`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              </div>
              : <div className={styles.notTrailer}> 
                <img src="/public/notFound.png" alt="not Trailer aviable" />
                <p>not Trailer aviable</p>
              </div>
              }

            </div>

          </div>
        </div>
      <a className={styles.seeMore} href={`/element/${isAnime ?'anime' :'manga'}/${random?.mal_id}`}>see more</a>
      <p>Visit<a href={random?.url} target="_blank" className={styles.visit}> myAnimeList</a></p>
    </div>
  )
}

export default RandomAnime