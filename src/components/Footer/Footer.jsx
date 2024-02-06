import styles from "./Footer.module.css"
import mapLogoBigger from "../../assets/mapLogoBigger.webp"
import mailIcon from "../../assets/mailIcon.png"
import wppLogo from "../../assets/wppLogo.jpg"
import locationIcon from "../../assets/locationIcon.png"
import instagramLogo from "../../assets/instagramLogo.png"
import linkedinLogo from "../../assets/linkedinLogo.png"

export default function Footer(){
    
    return(
        <>
        <div className={styles.footerContainer}>
            <div className={styles.footerFirst}>
                <p>Especialistas em marketplaces</p>
                <img className={styles.mapLogo} src={mapLogoBigger} alt="map logo" />
            </div>
            <div className={styles.footerContact}>
                <p>Contato</p>
                <div className={styles.contactItems}>
                    <img className={styles.contactIcons} src={mailIcon} alt="email" />
                    <p>contato@mapmarketplaces.com</p>
                </div>
                <div className={styles.contactItems}>
                    <img className={styles.contactIcons} src={wppLogo} alt="whatsapp" />
                    <p>&#10090;22&#41; 99273-9203</p>
                </div>
                <div className={styles.contactItems}>
                    <img className={styles.contactIcons} src={locationIcon} alt="location" />
                    <p>Alameda Barão de Nova Friburgo, 131 - Olaria, Nova Friburgo - RJ, 28623-060</p>
                </div>
            </div>
            <div className={styles.socials}>
                <p>onde nos encontrar</p>
                <div className={styles.socialIcons}>
                    <a href=""><img className={styles.socialImages} src={instagramLogo} alt="instagram logo" /></a>
                    <a href=""><img className={styles.socialImages} src={linkedinLogo} alt="linkedin logo" /></a>
                </div>
            </div>
        </div>
        <div className={styles.subFooter}>
            <p>MAP Marketplaces - Copyright (c) - Todos os direitos reservados</p>
            <a href="">
                <p>Política de privacidade</p>
            </a>
        </div>
        </>
    )
}