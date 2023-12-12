import useFetch from '../../../../hooks/useFetch'
import styles from './Recommendations.module.css'
import {typeRecommendations, Data as Recommendation} from '../../../../types/typeRecommendations'
import { Loader } from '../../../../components/Loader/Loader'
import Card from './Card'

interface Props {
  mal_id: number
  element: string | undefined
}
interface Data {
  data: typeRecommendations | undefined
  loding: boolean
}

const Recommendations = ({mal_id, element}: Props) => {

  const {data, loding}: Data = useFetch(`${element}/${mal_id}/recommendations`)
  const recommendations = data?.data

  return (  
    <>
      {
        loding
        ? <div className={styles.loader}><Loader/></div>
        : 
        <div className={styles.recommendations}>
          <h2>Recommendations</h2>
          {
            recommendations?.map((recommendation: Recommendation)=> 
              <div key={recommendation.entry.mal_id} className={styles.card}>
                <Card recommendation={recommendation} element={element}/>
              </div>
            )
          }
        </div>
      }
    </>
  )
}

export default Recommendations