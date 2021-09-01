import './Tecnologias.css'
import react from '../../img/react.svg';
import js from '../../img/js.svg';
import html from '../../img/html.svg';
import node from '../../img/node.svg';

export default function Tecnologia(){
    return(
        <div className="tecnologias">
            <h1 className="title">Gosto de programar em</h1>
            <div className="tec">
                <img src={react} alt="React" className="img-stack" />
                <h3 className="desc-stack">ReactJS e React Native para o <strong className="destaque">front</strong></h3>
            </div>
            <div className="tec">
                <img src={html} alt="Html" className="img-stack"/>
                <h3 className="desc-stack">HTML para a <strong className="destaque">desenvolvimento</strong> da página web </h3>
            </div>
            <div className="tec">
                <img src={js} alt="JavaScript" className="img-stack"/>
                <h3 className="desc-stack">JavaScript para criação do <strong className="destaque">cérebro</strong> das páginas web</h3>
            </div>
            
            <div className="tec">
                <img src={node} alt="Node" className="img-stack"/>
                <h3 className="desc-stack">NodeJS para o <strong className="destaque">backend</strong> das minhas aplicações </h3>
            </div>
        </div>
    )
}