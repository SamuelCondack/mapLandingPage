import './Global.css'
import Header from './components/Header/Header'
import firstContent from '../src/assets/firstContent.webp'
import styles from "./App.module.css"

function App() {

  return (
    <>
      <Header />
      <img src={firstContent} className={styles.firstContent} alt="firstContent" />
    </>
  )
}

export default App
