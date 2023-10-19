import { useState, useEffect } from 'react'
import './App.css'


import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedWork from './components/FeaturedWork'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import { ScaleLoader } from 'react-spinners'


function App() {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <>
      {
        loading ?
          <div className='loader'>
            <ScaleLoader
              color={'#81c281'}
              loading={loading}
              margin={3}
              radius={0}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <div>
            <Header />
            <Main />
            <About />
            <Skills />
            <FeaturedWork />
            <MyProjects />
            <Contact />
          </div>
      }
    </>
  )
}

export default App
