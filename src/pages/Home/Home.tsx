import RandomAnime from './components/RandomAnime/RandomAnime'
import SliderReviews from './components/SliderReviews/SliderReviews'
import Banner from './components/banner/Banner'
import SlideCards from './components/slideCards/SlideCards'
import styles from './home.module.css'

const Home = () => {

  return (
    <main className={styles.home}>
      <section>
        <Banner slug={'top/anime?&limit=1'} time={0}/>
      </section>
      <section className={styles.topAnimes}>
        <h2>Top Animes</h2>
        <SlideCards slug={'top/anime'} time={1} element={'anime'}/>
      </section>
      <section>
        <h2>Upcoming</h2>
        <SlideCards slug={'top/anime?&filter=upcoming'} time={2} element={'anime'}/>
      </section>
      <section>
        <h2>For all ages</h2>
        <SlideCards slug={'top/anime?&rating=g'} time={3} element={'anime'}/>
      </section>
      <section>
        <h2>Favorites</h2>
        <SlideCards slug={'top/anime?&filter=favorite'} time={4} element={'anime'}/>
      </section>
      <section>
        <h2>Top Mangas</h2>
        <SlideCards slug={'top/manga'} time={5} element={'manga'}/>
      </section>
      <section>
        <h2>Reviews</h2>
        <SliderReviews slug={'reviews/anime'} time={6} />
      </section>
      <section>
        <RandomAnime/>
      </section>
    </main>
  )
}

export default Home