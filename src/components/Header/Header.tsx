import Search from './Search'
import styles from './header.module.css'
import {Link} from 'react-router-dom'
import { useEffect, useState} from 'react'

const Header = () => {
  const [color, setColor] = useState<boolean>(true)

  useEffect(() => {
    window.onscroll = function() {
      window.scrollY <= 0
      ? setColor(true)
      : setColor(false)
    };
  }, [])

  return (
    <header className={styles.header} style={color ?{backgroundColor: 'transparent'} :{backgroundColor: 'var(--color-1)'}}>

        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>

        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='search'>Search</Link></li>
          </ul>
        </nav>

        <div className={styles.search}>
          <Search />
        </div>

    </header>
  )
}

export default Header