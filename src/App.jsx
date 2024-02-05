import './Global.css'
import Header from './components/Header/Header'
import firstContent from '../src/assets/firstContent.webp'
import styles from "./App.module.css"
import secondContent from '../src/assets/secondContent.webp'

function App() {

  return (
    <>
      <Header />
      <div className={styles.contentsDiv}><img src={firstContent} className={styles.firstContent} alt="firstContent" /></div>
      <div className={styles.contentsDiv}><img src={secondContent} className={styles.firstContent} alt="secondContent" />img</div>
    </>
  )
}

export default App
