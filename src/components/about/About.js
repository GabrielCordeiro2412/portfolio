import './About.css'
import me from '../../img/me.svg'

export default function About() {
    return(
        <div className="about">
            <h1 className="title-about">Sobre mim</h1>
            <div className="background">
                <img src={me} alt="Me" className="me"/>
                <p className="desc-pessoal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

        </div>
    )
}