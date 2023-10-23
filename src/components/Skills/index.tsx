import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";



import './style.css'
import Card from '../Card'

import htmlCssImg from '../../assets/html-css.png'
import jsImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'


const Skills = () => {


  return (
    <div className='skills'>


      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}

        className="mySwiper"
      >


        <SwiperSlide>
          <Card image={reactImg} title='ReactJS' text='Sou um desenvolvedor ReactJS com habilidades em criar componentes reutilizáveis e interativos, inclusive este website foi desenvolvido através do ReactJS' />
        </SwiperSlide>

        <SwiperSlide>
          <Card image={htmlCssImg} title='HTML e CSS' text='Minha proficiência em HTML e CSS me permite desenvolver páginas da web que são tanto visualmente atraentes quanto altamente funcionais.' />
        </SwiperSlide>


        <SwiperSlide>
          <Card image={jsImg} title='JavaScript' text='Tenho conhecimentos avançados em JavaScript, desenvolvendo aplicações interativas e dinâmicas, utilizando bibliotecas e frameworks modernos' />
        </SwiperSlide>

      </Swiper>
    </div >
  )
}
export default Skills