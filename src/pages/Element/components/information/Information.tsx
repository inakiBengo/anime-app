import { useState } from 'react'
import {Datum} from '../../../../types/typeTopAnime'
import styles from './information.module.css'

interface Prop {
  anime: Datum | undefined
  element: string | undefined
}

const Information = ({anime, element}: Prop) => {
  const [producers, setProducers] = useState<boolean>(false)
  const [licensors, setLicensors] = useState<boolean>(false)
  const [studios, setStudioss] = useState<boolean>(false)

  return (
    <div className={styles.information}>

      <h2 className={styles.typeInfo}>Information</h2>
      <table className={styles.tableInformation}>
        <tbody>
          <tr>
            <td className={styles.title}>Rating:</td>
            <td>
              {anime?.rating}
            </td>
          </tr>
          <tr>
            <td className={styles.title}>Genres:</td>
            <td>
              {
              anime?.genres.map((item) =>
                <span key={item.mal_id}>{item.name}</span>
              )
              }
            </td>
          </tr>
          <tr>
            <td className={styles.title}>Themes:</td>
            <td>
              {
              anime?.themes.map((item) => 
                <span key={item.mal_id}>{item.name}</span>
              )
              }
            </td>
          </tr>
          <tr>
            <td className={styles.title}>Status:</td>
            <td>{anime?.status}
            </td>
          </tr>
          <tr>
            <td className={styles.title}>Aired:</td>
            <td>
              {
                anime?.aired
                ? anime?.aired.string
                : anime?.published.string
              }
            </td>
          </tr>
          <tr>
            {
              element === 'anime'
            ?
            <>
            <td className={styles.title}>Duration:</td>
            <td>{anime?.duration}</td>
            </>
            : null
            }
          </tr>
          <tr>
            <td className={styles.title}>Type:</td>
            <td>{anime?.type}
            </td>
          </tr>
          <tr>
            {
              element === 'anime'
            ?
            <>
            <td className={styles.title}>Source:</td>
            <td>{anime?.source}</td>
            </>
            : null
            }
          </tr>
          <tr>
            <td className={styles.title}>Broadcast:</td>
            {
              element === 'anime'
              ? <td>{anime?.broadcast.string}</td>
              : <td>{anime?.published.string}</td>
            }
            
          </tr>
        </tbody>
      </table>
      
      {
      anime?.theme && anime?.theme !== null
      ?
      <div className={styles.music}>
      <h2 className={styles.typeInfo}>Music</h2> 
       <div className={styles.openings}>
         <p className={styles.title}>Openings</p>
         {
         anime?.theme.openings.map((item, index) => 
          <span key={index}>{item}</span>
         )}
       </div>
       {
        anime?.theme.endings
        ?
        <div>
          <p className={styles.title}>Ending</p>
          {
         anime?.theme.endings.map((item, index) => 
          <span key={index}>{item}</span>
         )}
        </div>
        : null
       }
      </div>
      :null
      }

      <div className={styles.members}>
        {
          anime?.producers
          ?
          <div className={styles.membre}>
            <button className={styles.headerMembers} onClick={() => setProducers(!producers)}>
              {producers ?<i className="bi bi-caret-up-fill"></i> :<i className="bi bi-caret-down-fill"></i> }
              <p className={styles.typeInfo}>Producers</p>
            </button>
            <div style={producers ?{height: 'auto'} :{height: '0px'}} className={styles.informationMembre}>
              {
                anime?.producers.map((item, index) =>
                  <a href={item.url} key={index}>{item.name}</a>
                )
              }
            </div>
          </div>
          :null
        }

        {
          anime?.licensors
          ?
          <div className={styles.membre}>
            <button className={styles.headerMembers} onClick={() => setLicensors(!licensors)}>
              {licensors ?<i className="bi bi-caret-up-fill"></i> :<i className="bi bi-caret-down-fill"></i>}
              <p className={styles.typeInfo}>Licensors</p>
            </button>
            <div style={licensors ?{height: 'auto'} :{height: '0px'}} className={styles.informationMembre}>
              {
                anime?.licensors.map((item, index) =>
                  <a href={item.url} key={index}>{item.name}</a>
                )
              }
            </div>
          </div>
          :null
        }

        {
          anime?.studios
          ?
          <div className={styles.membre}>
            <button className={styles.headerMembers} onClick={() => setStudioss(!studios)}>
              {studios ?<i className="bi bi-caret-up-fill"></i> :<i className="bi bi-caret-down-fill"></i>}
              <p className={styles.typeInfo}>Studios</p>
            </button>
            <div style={studios ?{height: 'auto'} :{height: '0px'}} className={styles.informationMembre}>
              {
                anime?.studios.map((item, index) =>
                  <a href={item.url} key={index}>{item.name}</a>
                )
              }
            </div>
          </div>
          :null
        }

        {
          anime?.external
          ?
          <div className={styles.externals}>
            <h2 className={styles.typeInfo}>Externals</h2>
            {
              anime?.external.map((item, index) => 
                <a target='_blank' href={item.url} key={index}>{item.name}</a>  
              )
            }
          </div>
          :null
        }
      </div>
    </div>
  )
}

export default Information