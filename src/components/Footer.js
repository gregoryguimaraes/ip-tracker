import React from 'react'
import '../styles/Footer.css'
import instagramIcon from '../assets/instagram_icon.png'
import linkedinIcon from '../assets/linkedin_icon.png'
import twitterIcon from '../assets/twitter_icon.png'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-menu">
                    <li><a href="">Início</a></li>
                    <li><a href="">Contate-nos</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Tecnologias utilizadas</a></li>
                    
                </div>
                <div className="footer-description">
                    <p>Todos os direitos reservados. <a href="">Termos e Privacidade</a></p>
                    
                </div>
            </div>
            <div className="sub-footer">
            <h5>&copy; 2021 Copyrigth - Desenvolvido por Gregory Guimarães</h5>
                <div className="icon-box">
                    <img src={instagramIcon}/>
                    <img src={linkedinIcon}/>
                    <img src={twitterIcon}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
