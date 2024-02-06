import './Global.css'
import Header from './components/Header/Header'
import Pics from './components/Pics/Pics'
import styles from "./App.module.css"
import fourthContent from "./assets/fourthContent.webp"
import objectivePic from "./assets/objectivePic.png"
import yellowCheck from "./assets/yellowCheck.png"
import mercadolivreLogoCropped from "./assets/mercadolivreLogoCropped.jpg"
import amazonLogo from "./assets/amazonLogo.webp"
import sebraeLogo from "./assets/sebraeLogo.webp"
import sheinLogo from "./assets/sheinLogo.webp"
import tinyLogo from "./assets/tinyLogo.webp"
import blingLogo from "./assets/blingLogo.webp"
import magaluLogo from "./assets/magaluLogo.webp"
import endingContent from "./assets/endingContent.webp"



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
      <img src={fourthContent} className={styles.fourthContent} alt="fourthContent" />
        <div className={styles.ourServices}>
          <div className={styles.serviceItem}>
            <img src={objectivePic} className={styles.objectivePic} alt="objective" />
            <p className={styles.serviceTitle}>CONSULTORIA START</p>
            <p className={styles.serviceDescription}>A Consultoria Start é direcionada a empreendedores que desejam ingressar nos marketplaces e buscam uma orientação completa, com um plano definido que abrange desde o início até o fim. Nossa consultoria engloba o cadastro de seus produtos, seguindo estratégias que destacarão seus produtos. Forneceremos direcionamento estratégico e trabalharemos na formulação das melhores estratégias para o seu negócio. Ao concluir este programa de consultoria, seu negócio estará plenamente integrado aos principais marketplaces do Brasil.</p>
            <button className={styles.learnMore}>Saiba mais</button>
          </div>
          {/* ---------------- */}
          <div className={styles.serviceItem}>
            <img src={objectivePic} className={styles.objectivePic} alt="objective" />
            <p className={styles.serviceTitle}>ASSESSORIA START</p>
            <p className={styles.serviceDescription}>A Assessoria Start é ideal para empreendedores que já possuem um negócio, mas ainda não estão presentes nos marketplaces. Este é um serviço contínuo, concebido para estar ao seu lado diariamente, acompanhando-o ao longo de toda a sua jornada nos marketplaces. Durante todo o percurso, você contará com uma equipe 100% especializada em marketplaces, que cuidará da gestão do seu negócio.</p>
            <button className={styles.learnMore}>Saiba mais</button>
          </div>
        {/* ---------------- */}
        <div className={styles.serviceItem}>
            <img src={yellowCheck} className={styles.objectivePic} alt="objective" />
            <p className={styles.serviceTitle}>ASSESSORIA DE REESTRUTURAÇÃO</p>
            <p className={styles.serviceDescription}>A Assessoria de Reestruturação é a escolha ideal para empreendedores que já possuem um negócio consolidado e obtêm um faturamento relevante nos marketplaces. Este serviço é contínuo, projetado para estar presente no seu dia a dia, acompanhando você ao longo de toda a sua jornada nos marketplaces. Durante todo esse percurso, você terá à disposição uma equipe 100% especializada em marketplaces, dedicada à gestão do seu negócio.</p>
            <button className={styles.learnMore}>Saiba mais</button>
          </div>
        {/* ---------------- */}
        <div className={styles.serviceItem}>
            <img src={yellowCheck} className={styles.objectivePic} alt="objective" />
            <p className={styles.serviceTitle}>CONSULTORIA DE REESTRUTURAÇÃO</p>
            <p className={styles.serviceDescription}>A Consultoria de Reestruturação é ideal para empreendedores que já operam nos marketplaces e buscam o suporte necessário para conquistar independência. Oferecemos um serviço completo, com início, meio e fim, projetado para transformar a visão do seu negócio em apenas 60 dias. Com a nossa consultoria, você estará pronto para caminhar com confiança no mundo dos marketplaces</p>
            <button className={styles.learnMore}>Saiba mais</button>
          </div>
        </div>
        <div className={styles.partnersContainer}>
          <h2>Parceiros Oficiais</h2>
          <div className={styles.partnersLogos}>
            <img className={styles.partnersImages} src={mercadolivreLogoCropped} alt="Mercado Livre" />
            <img className={styles.partnersImages} src={amazonLogo} alt="amazon logo" />
            <img className={styles.partnersImages} src={sheinLogo} alt="shein logo" />
            <img className={styles.partnersImages} src={magaluLogo} alt="magalu logo" />
            <img className={styles.partnersImages} src={sebraeLogo} alt="sebrae logo" />
            <img className={styles.partnersImages} src={tinyLogo} alt="tiny logo" />
            <img className={styles.partnersImages} src={blingLogo} alt="bling logo" />
          </div>
        </div>
        <img className={styles.contents} src={endingContent} alt="MAP Mentoria e assessoria" />
    </>
  )
}

export default App
