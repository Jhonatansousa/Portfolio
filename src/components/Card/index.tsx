import './style.css'

interface CardProps {
  image: string,
  alt?: string,
  title: string,
  text: string
}

const Card = ({ image, alt, title, text }: CardProps) => {



  return (
    <div className='card'>
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
export default Card