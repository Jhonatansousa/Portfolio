import TrackVisibility from 'react-on-screen'
import './style.css'
import 'animate.css'
import downloadButton from '../../assets/downloads.png'
import aboutImage from '../../assets/about.jpg'
import curriculo from '../../assets/curriculo.pdf'

const About = () => {

  const downloadDocumento = () => {

    const nomeArquivo = "Jhonatan Sousa.pdf";

    const link = document.createElement("a");
    link.href = curriculo;
    link.download = nomeArquivo;

    link.style.display = "none";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }



  return (
    <section id='about' className="about">
      <div className="textAbout">

        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeInDown animate__slow' : 'invisible'}>

              <h2>SOBRE MIM</h2>
            </div>}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeInUp animate__slow' : 'invisible'}>

              <p>Olá, meu nome é <span>Jhonatan</span> e sou um desenvolvedor Front-end.</p>
            </div>}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeInUp animate__slow' : 'invisible'}>

              <p>Sou apaixonado por criar interfaces incríveis e funcionais para a web. Com conhecimentos em <span>HTML, CSS, JavaScript, TypeScript, ReactJS, Git e GitHub</span>, amo construir sites e aplicativos web responsivos e agradáveis aos usuários. Atualmente estou na faculdade de <span>Engenharia de Software</span> na Estácio, afim de aprimorar cada vez mais meus conhecimentos.</p>
            </div>}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeInUp animate__slow' : 'invisible'}>

              <button id='btnDownload' onClick={downloadDocumento} ><img src={downloadButton} alt="icon download" />DOWNLOAD CV</button>
            </div>}
        </TrackVisibility>
      </div>

      <div className="imageAbout ">
        <img className=' animate__animated animate__slower animate__pulse animate__infinite infinite' src={aboutImage} alt="about img" />
      </div>
    </section>
  )
}

export default About