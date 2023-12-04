import useFetch from '../../../../hooks/useFetch'
import BannerElement from './BannerElement'
import { Datum } from '../../../../types/typeTopAnime'
import styles from './banner.module.css'
import { Loader } from '../../../../components/Loader/Loader'

interface FetchType {
  data: Datum | undefined
  loding: boolean
}

interface Props {
  slug: string
  time: number
}

const Banner = ({slug, time}: Props) => {
  const {data, loding}: FetchType = useFetch(slug, time)
  const anime = data?.data[0]

  return (
    <div className={styles.slideBanner}>
      {
        loding
        ? <div className={styles.loader}><Loader/></div>
        : <BannerElement {...anime}/>
      }
    </div>
  )
}

export default Banner