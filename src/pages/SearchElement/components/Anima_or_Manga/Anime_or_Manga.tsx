import styles from './animeOrManga.module.css'

interface Props {
  element: string | undefined
}

const AnimeOrManga = ({element}: Props) => {


  return (
    <div className={styles.animeOrManga}>
      <a 
      href={`/search/anime`} 
      style={element === 'anime' ?{backgroundColor: 'var(--color-4)'} :{}}>
        Anime
      </a>
      <a href={`/search/manga`} style={element === 'manga' ?{backgroundColor: 'var(--color-4)'} :{}}>
        Manga
      </a>
    </div>
  )
}

export default AnimeOrManga