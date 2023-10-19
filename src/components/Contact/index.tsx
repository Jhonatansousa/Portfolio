import TrackVisibility from 'react-on-screen'
import 'animate.css'
import './style.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import backToTop from '../../assets/back-to-top.png'



const Contact = () => (
  <section id='contact' className='contact'>
    <div className='contact-media'>

      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? 'animate__animated animate__fadeInDown animate__slow' : 'invisible'}>

            <h2>CONTATO</h2>
          </div>}
      </TrackVisibility>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? 'animate__animated animate__fadeInUp animate__slow' : 'invisible'}>
            <p>Jhonatan Sousa da Silva</p>
            <p>Angra dos Reis - RJ, Brasil</p>

          </div>}
      </TrackVisibility>

      <div className='contact-icons'>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeInUp animate__slow' : 'invisible'}>
              <a href='https://www.linkedin.com/in/jhonatan-s-da-silva-a1a77b268/' target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
              <a href='https://github.com/Jhonatansousa' target='_blank' rel="noreferrer"><img src={github} alt="github icon" /></a>

            </div>}
        </TrackVisibility>

      </div>
    </div>



    <div className='contact-form'>
      <form action="mailto:jhonatandev@outlook.com" method='POST' encType='text/plain'>
        <input className='input-name' name='name' type="text" placeholder='Nome' required />
        <input className='input-email' name='user-email' type="text" placeholder='E-mail' required />
        <input className='input-message' name='user-message' type="text" placeholder='Mensagem' />
        <input className='submit' type="submit" value="Enviar" />
      </form>
    </div>
    <a className='back-to-top' href="#main">
      <img src={backToTop} alt="back to top icon" />
    </a>
  </section >
)

export default Contact