import './style.css'
import backgroundMain from '../../assets/backgroundMain.jpg'
import TrackVisibility from 'react-on-screen'
import 'animate.css'


const Main = () => (
  <main id='main'><img className="backgroundMain" src={backgroundMain} alt="background" />
    <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? 'animate__animated animate__fadeInDown animate__slow' : 'invisible'}>

          <h1>BEM-<span>VINDO</span>(A)</h1>
        </div>}
    </TrackVisibility>


    <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? 'animate__animated animate__fadeInUp animate__slow' : 'invisible'}>

          <p>É um prazer ter você aqui! Navegue pelo meu portfólio e conheça meu trabalho e minhas habilidades como <span>desenvolvedor Front-End</span>
          </p>
        </div>}
    </TrackVisibility>
  </main>
)


export default Main