import styles from './footer.module.css'

const Footer = () => {

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <a target='_blank' href='https://github.com/inakiBengo' className={styles.contact}>
          <i className="bi bi-github"></i> GitHub
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/i%C3%B1aki-bengoechea/' className={styles.contact}>
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
        <p className={styles.contact}><i className="bi bi-envelope"></i> Mail: bengoinaki@gmail.com</p>
      </footer>
    </div>
  )
} 

export default Footer