import './style.css'
import TrackVisibility from 'react-on-screen'
import 'animate.css'


const FeaturedWork = () => (
  <section id='projects' className='featured-work'>

    <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? 'animate__animated animate__fadeInDown animate__slow' : 'invisible'}>

          <h2>PROJETOS EM DESTAQUE</h2>
        </div>}
    </TrackVisibility>


    <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? 'animate__animated animate__fadeInUp animate__slow' : 'invisible'}>

          <p>Navegue por uma série de projetos pessoais de front-end, onde busco constantemente aprimorar minha habilidade em traduzir ideias em interfaces web interativas, responsivas e de alta qualidade.</p>
        </div>}
    </TrackVisibility>


  </section>
)

export default FeaturedWork