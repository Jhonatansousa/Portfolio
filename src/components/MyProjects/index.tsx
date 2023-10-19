import './style.css'
import GitHub from '../../assets/github.png'
import Deploy from '../../assets/deploy.png'

import CardForm from '../../assets/cardForm.png'
import Manhattan from '../../assets/manhattan.png'
import Agencia from '../../assets/agencia.png'
import LoginForm from '../../assets/loginForm.png'
import Vertigo from '../../assets/Vertigo.png'
import OticasVida from '../../assets/oticasVida.png'

const MyProjects = () => {


  return (

    <section className='my-projects'>

      <div className='project-img'>
        <img className='thumbnail' src={CardForm} alt="projeto formulário de cartão" />

        <div className='project-link'>
          <h4>Formulário de Cartão de Crédito</h4>
          <p>Desenvolvido com HTML, CSS e JavaScript que tem como objetivo oferecer uma experiência visual mais agradável e interativa para o usuário, apresentando diversas funcionalidades:
            <ul>
              <li>Reconhecimento de bandeira</li>
              <li>Animação</li>
              <li>Espelhamento das informações digitadas no cartão virtual</li>
            </ul>
          </p>
          <a href="https://github.com/Jhonatansousa/Card-Form" target="_blank" rel="noreferrer" ><img src={GitHub} alt="github-icon" />
            Confira o código no GitHub</a>
          <a href="https://jhonatansousa.github.io/Card-Form/" target="_blank" rel="noreferrer" ><img src={Deploy} alt="deploy-icon" />Dê uma olhada no site em funcionamento!</a>
        </div>

      </div>

      <div className='project-img'>
        <img className='thumbnail' src={Manhattan} alt="projeto manhattan coffee-house" />


        <div className='project-link'>
          <h4>Manhattan Coffee House</h4>
          <p>Uma landing page moderna e convidativa de uma cafeteria fictícia. Destaquei a localização, horário de funcionamento e design totalmente responsivo, garantindo ótima experiência em todos os dispositivos.
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </p>
          <a href="https://github.com/Jhonatansousa/Manhattan-Coffe-House" target="_blank" rel="noreferrer" ><img src={GitHub} alt="github-icon" />
            Confira o código no GitHub</a>
          <a href="https://jhonatansousa.github.io/Manhattan-Coffe-House/" target="_blank" rel="noreferrer" ><img src={Deploy} alt="deploy-icon" />Dê uma olhada no site em funcionamento!</a>
        </div>
      </div>

      <div className='project-img'>
        <img className='thumbnail' src={Agencia} alt="projeto Agencia" />

        <div className='project-link'>
          <h4>Agência de Branding</h4>
          <p>Uma landing page de uma agência fictícia, onde utilizei ReactJS para criar a interface interativa e responsiva, com destaque para a funcionalidade de alternar entres os modos claro e escuro (dark mode).
            <ul>
              <li>ReactJS</li>
            </ul>
          </p>
          <a href="https://github.com/Jhonatansousa/Agencia-Digital" target="_blank" rel="noreferrer" ><img src={GitHub} alt="github-icon" />
            Confira o código no GitHub</a>
          <a href="https://jhonatansousa.github.io/Agencia-Digital/" target="_blank" rel="noreferrer" ><img src={Deploy} alt="deploy-icon" />Dê uma olhada no site em funcionamento!</a>
        </div>
      </div>

      <div className='project-img'>
        <img className='thumbnail' src={LoginForm} alt="projeto loginForm" />

        <div className='project-link loginForm'>
          <h4>Camp.io</h4>
          <p>Este projeto é um formulário de login responsivo,foi desenvolvido a partir de um protótipo no Figma. O formulário apresenta um design moderno e minimalista.
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </p>
          <a href="https://github.com/Jhonatansousa/Login-Form" target="_blank" rel="noreferrer" ><img src={GitHub} alt="github-icon" />
            Confira o código no GitHub</a>
          <a href="https://jhonatansousa.github.io/Login-Form/" target="_blank" rel="noreferrer" ><img src={Deploy} alt="deploy-icon" />Dê uma olhada no site em funcionamento!</a>
        </div>
      </div>

      <div className='project-img'>
        <img className='thumbnail' src={Vertigo} alt="projeto vertigo" />

        <div className='project-link vertigo'>
          <h4>Vertigo</h4>
          <p>Este projeto é uma tela de login responsivo,foi desenvolvido a partir de um protótipo no Figma em um desafio da RocketSeat, apresentando diversas funcionalidades como mostrar a senha, mensagem de erro ao digitar e-mail inválido, etc.
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </p>
          <a href="https://github.com/Jhonatansousa/Tela-de-Login" target="_blank" rel="noreferrer" ><img src={GitHub} alt="github-icon" />
            Confira o código no GitHub</a>
          <a href="https://jhonatansousa.github.io/Tela-de-Login/" target="_blank" rel="noreferrer" ><img src={Deploy} alt="deploy-icon" />Dê uma olhada no site em funcionamento!</a>
        </div>
      </div>

      <div className='project-img'>
        <img className='thumbnail' src={OticasVida} alt="projeto oticas vida" />

        <div className='project-link'>
          <h4>Óticas Vida</h4>
          <p>Uma landing page de uma ótica fictícia, este foi meu primeiro projeto usando ReactJS, onde aprendi componentização, deixando o código mais organizado e limpo.
            <ul>
              <li>ReactJS</li>
            </ul>
          </p>
          <a href="https://github.com/Jhonatansousa/Oticas-Vida-ReactJS" target='_blank' rel="noreferrer"  ><img src={GitHub} alt="github-icon" />
            Confira o código no GitHub</a>
          <a href="https://jhonatansousa.github.io/Oticas-Vida-ReactJS/" target='_blank' rel="noreferrer" ><img src={Deploy} alt="deploy-icon" />Dê uma olhada no site em funcionamento!</a>
        </div>
      </div>
    </section>
  )
}

export default MyProjects