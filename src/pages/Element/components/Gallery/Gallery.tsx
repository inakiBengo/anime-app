import { useState } from "react"
import { Loader } from "../../../../components/Loader/Loader"
import useFetch from "../../../../hooks/useFetch"
import {typePictures, pictures} from '../../../../types/typePictures'
import styles from './gallery.module.css'

interface Props {
  element: string | undefined
  mal_id: number
  time: number
}

interface Data {
  data: typePictures | undefined
  loding: boolean
}

const Gallery = ({element, mal_id, time}: Props) => {

  const [image, setImage] = useState<string>('')
  const {data, loding}: Data = useFetch(`${element}/${mal_id}/pictures`, time)

  const popImage = (index: number) => {
    data && setImage(data.data[index].jpg.large_image_url)
  }

  return (
    <>
    {
    loding
    ? <div className={styles.loader}><Loader/></div>
    :
    <>
    <h2 className={styles.title}>Gallery</h2>
    <div className={styles.gallery}>
      { 
        data?.data.map((item: pictures, index: number) => 
        <div key={index} className={styles.image} onClick={() => popImage(index)}>
          <img
          src={item.jpg.large_image_url} 
          alt="image gallery" /> 
          <div className={styles.background}>
            <i className="bi bi-file-image"></i>
          </div>
        </div>
        )
      }
    </div>
    <div className={styles.popImage} style={image ?{display: 'block'} :{display: 'none'}}>
      <div className={styles.imagePosition}>
        <img src={image} alt="image selected" />
        <button onClick={() => setImage('')}>
          <i className="bi bi-backspace"></i>
        </button>
      </div>
    </div>
    </>
    }
    </>
  )
}

export default Gallery