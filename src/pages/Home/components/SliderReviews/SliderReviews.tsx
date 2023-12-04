import useEmblaCarousel from "embla-carousel-react"
import styles from './sliderReviews.module.css'
import { Loader } from "../../../../components/Loader/Loader"
import 'bootstrap-icons/font/bootstrap-icons.css'
import useFetch from "../../../../hooks/useFetch"
import ReviewCard from "./ReviewCard"
import {Root, Daum} from '../../../../types/typeReviews'
import { useEffect, useState } from "react"

interface Data {
  data: undefined | Root
  loding: undefined | boolean
}

interface Props {
  slug: string
  time: number
}

const SliderReviews = ({slug, time}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [ selectedIndex, setSelectedIndex ] = useState<number>(0)
  const {data, loding}: Data = useFetch(slug, time)
  const reviews = data?.data.slice(0, 10)

  const scrollPrev = () => {
    emblaApi && emblaApi.scrollPrev()
  }
  const scrollNext = () => {
    emblaApi && emblaApi.scrollNext()
  }
  const scrollTo = (index: number) => {
    emblaApi && emblaApi.scrollTo(index)
  }
  const onSelect = () => {
    emblaApi && setSelectedIndex(emblaApi.selectedScrollSnap())
  }

  useEffect(() => {
    emblaApi && emblaApi.on('select', onSelect)
  }, [emblaApi])

  return (
    <>
    {
    loding
    ? <div className={styles.loader}><Loader/></div>
    : <div className={styles.embla} > 
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {
              reviews.map((review: Daum) => 
                <div className={styles.embla__slide} key={review.mal_id}>
                  <ReviewCard {...review}/>
                </div>
              )
            }
          </div>

          <div className={styles.embla__dots}>
            {
              reviews.map(( item: Daum, index: number) => 
                <button 
                key={item.mal_id} 
                className={styles.embla__dot } 
                onClick={() => scrollTo(index)}
                style={index === selectedIndex ?{background: 'var(--color-1)'} :{background: 'var(--color-font)'}}
                >
                </button>
              ) 
            }
          </div>

          <div className={styles.embla__buttons}>
            <button className={styles.embla__prev} onClick={scrollPrev}>
              <i className="bi bi-caret-left-fill"></i>
            </button>
            <button className={styles.embla__next} onClick={scrollNext}>
              <i className="bi bi-caret-right-fill"></i>
            </button>
          </div>

        </div>
      </div>
    }
    </>
  )
}

export default SliderReviews
