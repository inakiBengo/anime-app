import styles from './about.module.css'

const About = () => {

  return (
    <div className={styles.background}>
    <div className={styles.aboutContainer}>

      <main className={styles.main}>
        <h1>About.</h1>
        <section className={styles.art1}>
          <h2>Portfolio Project: Anime and Manga Explorer</h2>
          <p>I am pleased to introduce one of my most recent projects, an anime and manga explorer that I designed and developed for my web portfolio. This project, built with <span className={styles.react}>React</span> and <span className={styles.typeScript}>TypeScript</span>, harnesses the powerful capabilities of React Router Dom and the versatile embla-carousel library to deliver an immersive user experience.</p>
        </section>
        <section className={styles.art2}>
          <h2>Key Features:</h2>

          <article>
            <h3>1. Interactive Banner with Automatic Video Playback</h3>
            <p>One of the highlights of the page is the interactive banner. I used a <span className={styles.customHook}>custom hook</span> called "useIntersection," which utilizes a useRef to observe a specific element on the page. Depending on whether the element is fully in view, the state changes, allowing for toggling between displaying an image or automatically playing a YouTube video.</p>
          </article>

          <article>
            <h3>2. Search and Filtering</h3>
            <p>For content search, I leveraged the free AnimeList API, which offers a customizable URL. I implemented a <span className={styles.context}>context</span> that stores up to four search states (type, status, rating, and search). By using the "useParams" hook from React Router Dom, I can access these parameters and dynamically construct the URL for data retrieval, streamlining the process of obtaining information through filters and a text search.</p>
          </article> 

          <article>
            <h3>3. Visual Anime Details</h3>
            <p>The page displays detailed information for each anime, accessing the ID stored in the URL to make the corresponding data request. To handle cases where the API does not provide all expected information, I implemented <span className={styles.render}>conditional rendering</span> to ensure proper presentation.</p>
          </article>

          <article>
            <h3>4. General Interest Categories with Carousels</h3>
            <p>To showcase popular categories like "Top Animes" and "Upcoming," I opted for the embla-carousel library. This choice was based on its flexibility for customizing carousel appearances. Additionally, given the API call limit, I developed a  <span className={styles.customHook}>custom hook</span> called "useFetch" that efficiently manages data requests, respecting the three calls per second limit.</p>
          </article>

          <article>
            <h3>5. Random Exploration</h3>
            <p>I implemented functionality that allows users to discover anime or manga randomly, using a specific API endpoint. The resulting information is presented in a table with dynamic columns displaying relevant data based on user preferences.</p>
          </article>

        </section>
        <section className={styles.art3}>
          <h2>Conclusion:</h2>
          <p>This project combines creativity and functionality to provide an immersive experience for anime and manga enthusiasts. If you would like more information or to get in touch, feel free to visit my LinkedIn, send an email, or find me on Facebook. I also invite you to explore my web portfolio to discover more about my work and skills in web development. I hope you enjoy exploring the world of anime and manga through this application!</p>
        </section>
      </main>

      <aside className={styles.aside}>
        <h2>Other Projects</h2>

        <div className={styles.project}>
          <img src='https://play-lh.googleusercontent.com/eN0IexSzxpUDMfFtm-OyM-nNs44Y74Q3k51bxAMhTvrTnuA4OGnTi_fodN4cl-XxDQc' alt="project" />
          <div className={styles.text}>
            <p className={styles.title}>Spotify Clon</p>
            <p className={styles.info}>
              Un reproductor de musica, con playLists y control de reproducción.
            </p>
          </div>
        </div>

        <div className={styles.project}>
          <img src='https://play-lh.googleusercontent.com/eN0IexSzxpUDMfFtm-OyM-nNs44Y74Q3k51bxAMhTvrTnuA4OGnTi_fodN4cl-XxDQc' alt="project" />
          <div className={styles.text}>

          </div>
        </div>

        <div className={styles.project}>
          <img src='https://play-lh.googleusercontent.com/eN0IexSzxpUDMfFtm-OyM-nNs44Y74Q3k51bxAMhTvrTnuA4OGnTi_fodN4cl-XxDQc' alt="project" />
          <div className={styles.text}>

          </div>
        </div>

        <div className={styles.project}>
          <img src='https://play-lh.googleusercontent.com/eN0IexSzxpUDMfFtm-OyM-nNs44Y74Q3k51bxAMhTvrTnuA4OGnTi_fodN4cl-XxDQc' alt="project" />
          <div className={styles.text}>

          </div>
        </div>
      </aside>

    </div>
    </div>
  )
}

export default About