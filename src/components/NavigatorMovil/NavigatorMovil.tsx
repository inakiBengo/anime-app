import styles from './navigatorMovil.module.css'

const NavigatorMovil = () => {

  return (
    <footer className={styles.navigatorMovil}>
      <div className={styles.navigator}>
        <a href="/" className={styles.home}>
          <i className="bi bi-house"></i>
        </a>
        <a href="/search" className={styles.search}>
          <i className="bi bi-search"></i>
        </a>
        <a href="/about" className={styles.search}>
          <i className="bi bi-info-circle-fill"></i>
        </a>
      </div>
    </footer>
  )
}

export default NavigatorMovil