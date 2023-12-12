import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import styles from './element.module.css'
import {typeTopAnime} from '../../types/typeTopAnime'
import BannerElement from "./components/bannerElement/BannerElement"
import PrimaryInfo from "./components/primaryInfo/PrimaryInfo"
import Title from "./components/title/Title"
import { Loader } from "../../components/Loader/Loader"
import MovilSynopsis from "./components/movilSynopsis/MovilSynopsis"
import Synopsis from "./components/Synopsis/Synopsis"
import Youtube from "./components/youtube/Youtube"
import Information from "./components/information/Information"
import SliderRelations from "./components/sliderRelations/SliderRelations"
import Recommendations from "./components/recommendations/Recommendations"
import Episodes from "./components/episodes/Episodes"
import TemplateGrid from "./components/templateGrid/TemplateGrid"
import Gallery from "./components/Gallery/Gallery"
import Reviews from "./components/Reviews/Reviews"

interface Data {
  data: undefined | typeTopAnime
  loding: boolean
}

const Element = () => {

  const {element, id} = useParams()
  const {data, loding}: Data = useFetch(`${element}/${id}/full`)
  const anime = data?.data

  return (
    <>
    <div className={styles.elemet}>
      {
      loding
      ? <div className={styles.loader}><Loader/></div>
      : 
      <>
      <header className={styles.header}>
        <section>
          <BannerElement anime={anime} element={element}/>
        </section>
        <section className={styles.banner}>
          <PrimaryInfo anime={anime} element={element}/>
        </section>
        <section>
          <Title anime={anime} element={element}/>
        </section>
      </header>

      <div className={styles.content}>

        <aside className={styles.aside}>
          <section className={styles.information}>
            <Information anime={anime} element={element}/>
          </section>
          <section className={styles.recommendations}>
            <Recommendations mal_id={anime.mal_id} element={element}/>
          </section>
        </aside>

        <main className={styles.container}>
          <section className={styles.synopsis}>
            <div className={styles.MovilSynopsis}>
              <MovilSynopsis anime={anime} element={element}/>
            </div>
            <div className={styles.synopsisPc}>
              <Synopsis anime={anime} element={element}/>
            </div>
          </section>
          <section>
            <Youtube anime={anime} element={element}/>
          </section>
          <section className={styles.information}>
            <Information anime={anime} element={element}/>
          </section>
          <section>
            <SliderRelations anime={anime}/>
          </section>
        
          <section className={styles.recommendations}>
            <Recommendations mal_id={anime.mal_id} element={element}/>
          </section> 
          <>
          <section className={styles.templateGrid}>
            <TemplateGrid mal_id={anime.mal_id} element={element} fetch={'characters'} time={3}/>
          </section>
          {
          element === 'anime'
          ?
          <>
          <section className={styles.templateGrid}>
            <TemplateGrid mal_id={anime.mal_id} element={element} fetch={'staff'} time={4}/>
          </section>
          <section className={styles.episodes}>
            <Episodes mal_id={anime.mal_id}/>
          </section>
          </>
          : null
          }
          <section className={styles.gallery}>
            <Gallery element={element} mal_id={anime.mal_id} time={5}/>
          </section>
          <section className={styles.reviews}>
            <Reviews element={element} mal_id={anime.mal_id} time={6}/>
          </section>
          </>
        </main>
      
      </div>
      </>
      }
    </div>
    </>
  )
}

export default Element