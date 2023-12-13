import { useParams } from "react-router-dom"
import styles from './searchElement.module.css'
import AnimeOrManga from "./components/Anima_or_Manga/Anime_or_Manga"
import Filter from "./components/Filter/Filter"
import { SearchProvider } from "../../context/ContextSearch"
import Fetching from "./components/Fetching/Fetching"
import Search from "./components/search/Search"

const SearchElement = () => {

  const {element, typeSearch} = useParams()

  return (
    <SearchProvider>
      <div className={styles.searchElement}>
        <main className={styles.main}>
          <section>
            <AnimeOrManga element={element} />
            <article className={styles.search}>
              <Filter element={element} typeSearch={typeSearch}/>
              <Search element={element} typeSearch={typeSearch}/>
            </article>
          </section>
          <section>
            <Fetching element={element} typeSearch={typeSearch}/>
          </section>
        </main>
      </div>
    </SearchProvider>
  )
}

export default SearchElement