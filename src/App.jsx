import './Global.css'
import Header from './components/Header/Header'
import styles from "./App.module.css"
import firstContent from '../src/assets/firstContent.webp'
import secondContent from '../src/assets/secondContent.webp'
import thirdContent from '../src/assets/thirdContent.webp'

function App() {

  return (
    <>
      <Header />
      <img src={firstContent} className={styles.contents} alt="firstContent" />
      <img src={secondContent} className={styles.contents} alt="secondContent" />
      <img src={thirdContent} className={styles.contents} alt="thirdContent" />
    </>
  )
}

export default App
