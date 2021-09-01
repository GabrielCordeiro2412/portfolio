/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';
import git from '../../img/git.svg'
import linkedin from '../../img/linkedin.svg'
import gmail from '../../img/gmail.svg'


export default function Footer() {
    return(
        <div className="footer">
            <h1 className="desc-footer">Todos os Direitos Reservados © 2021 <a href="#" className="link-git">GabrielCordeiro2412</a></h1>
            <div className="redes">
                <a href="#"><img src={git} alt="git" className="icon"/></a>
                <a href="#"><img src={linkedin} alt="linkedin" className="icon"/></a>
                <a href="#"><img src={gmail} alt="gmail" className="icon"/></a>
            </div>
        </div>
    )
}