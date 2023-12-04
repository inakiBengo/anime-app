import useEmblaCarousel from "embla-carousel-react"
import style from './slideCards.module.css'
import Cards from "./Cards"
import useFetch from "../../../../hooks/useFetch"
import { Datum, typeTopAnime } from '../../../../types/typeTopAnime'
import { useCallback } from 'react' 
import 'bootstrap-icons/font/bootstrap-icons.css' 
import { Loader } from "../../../../components/Loader/Loader"

interface Props {
  slug: string
  time: number
}
interface Data {
  data: undefined | typeTopAnime
  loding: undefined | boolean
}

const SlideCards = ({slug, time}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const {data, loding}: Data = useFetch(slug, time)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
    {
    loding
    ? <div className={style.loader}><Loader/></div>
    : <div className={style.embla} > 
        <div className={style.embla__viewport} ref={emblaRef}>
          <div className={style.embla__container}>
            {
              data?.data.map((anime: Datum) => 
              <div className={style.embla__slide} key={anime.mal_id}>
                <Cards {...anime}/>
              </div>
              )
            }
          </div>
          <button className={style.embla__prev} onClick={scrollPrev}>
            <i className="bi bi-caret-left-fill"></i>
          </button>
          <button className={style.embla__next} onClick={scrollNext}>
            <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
    }
    </>
  )

}

export default SlideCards