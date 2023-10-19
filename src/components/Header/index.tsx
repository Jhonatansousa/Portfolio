import { useEffect, useState } from 'react'
import TrackVisibility from 'react-on-screen'
import 'animate.css'
import './style.css'

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const windowHeight = window.innerHeight;
      const scrollPosition = window.pageYOffset;
      const opacity = scrollPosition / windowHeight;

      header.style.backgroundColor = `rgba(20, 20, 20, ${opacity})`;
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [active, setActive] = useState(false)
  const toggleMenu = () => {
    setActive(!active)
  }

  const handleClick = () => {
    setActive(false)
  }

  return (
    <header id='header'>
      <nav>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeInDown animate__slow' : 'invisible'}>
              <p className='myName'>JHONATAN <span>SOUSA</span></p>

            </div>}

        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeInDown animate__slow' : 'invisible'}>

              <ul className={active ? 'menu menu-open' : 'menu menu-closed'} >
                <li>
                  <a href='#main' onClick={handleClick} >HOME</a>
                  <span></span>
                </li>
                <li>
                  <a href='#about' onClick={handleClick} >SOBRE</a>
                  <span></span>
                </li>
                <li>
                  <a href='#projects' onClick={handleClick} >PROJETOS</a>
                  <span></span>
                </li>
                <li>
                  <a href='#contact' onClick={handleClick} >CONTATO</a>
                  <span></span>
                </li>
              </ul>
            </div>}
        </TrackVisibility>

        <div className={active ? 'btn btn-active' : 'btn'} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </nav>
    </header >
  )
}

export default Header