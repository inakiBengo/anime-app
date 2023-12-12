import {Datum} from '../../../../types/typeTopAnime'
import useEmblaCarousel from "embla-carousel-react"
import style from './sliderRelations.module.css'
import Card from './Card'
import { useCallback, useEffect, useState } from 'react'

interface Props {
  anime: Datum | undefined
}

interface Relations {
  type: string
  mal_id: number
}

const SliderRelations = ({anime}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [relations, setRelations] = useState<Relations[]>([])

  useEffect(() => {
    anime?.relations.forEach(relation => {
      relation.entry.forEach(item => {
        relations.push({type: item.type, mal_id: item.mal_id})
      })
    })

    setRelations(relations)
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
    {anime?.relations && anime?.relations.length > 0
    ?
    <>
    <h2 className={style.relations}>Relations</h2>
    <div className={style.embla} > 
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {
            relations?.map((relation, index) => 
              <div className={style.embla__slide} key={relation.mal_id}>
                <Card item={relation} time={index+6}/>
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
    </>
    :null
    }
    </>
  )
}

export default SliderRelations