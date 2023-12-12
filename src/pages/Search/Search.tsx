import CardContainer from './components/Card/CardsContainer'
import styles from './search.module.css'

const Search = () => {

  return (
    <main className={styles.search}>
      <section className={styles.browseAll}>
        <h2>Browse all</h2>
      </section>
      <section className={styles.categories}>
        <CardContainer />
      </section>
    </main>
  )
}

export default Search