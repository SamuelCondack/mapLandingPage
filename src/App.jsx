import './Global.css'
import Header from './components/Header/Header'
import Pics from './components/Pics/Pics'
import styles from "./App.module.css"

function App() {

  return (
    <>
      <Header />
      <Pics />
      <div className={styles.statisticsContainer}>
        <div className={styles.statisticsItem}>
          <h2 className={styles.number}>600</h2>
          <p className={styles.quantity}>Milhões de visitas</p>
          <p className={styles.description}>registradas por mês nos principais marketplaces do Brasil.</p>
        </div>
        <div className={styles.statisticsItem}>
          <h2 className={styles.number}>R$169,6</h2>
          <p className={styles.quantity}>Bilhões</p>
          <p className={styles.description}>de reais faturados no varejo online em 2022.</p>
        </div>
        <div className={styles.statisticsItem}>
          <h2 className={styles.number}>61%</h2>
          <p className={styles.quantity}>Dos Brasileiros</p>
          <p className={styles.description}>preferem realizar compras online ao invés de se dirigirem até as lojas físicas.</p>
        </div>
        <div className={styles.statisticsItem}>
          <h2 className={styles.number}>85%</h2>
          <p className={styles.quantity}>Dos Consumidores</p>
          <p className={styles.description}>brasileiros utilizam marketplaces como principal plataforma de compras online.</p>
        </div>
      </div>
    </>
  )
}

export default App
