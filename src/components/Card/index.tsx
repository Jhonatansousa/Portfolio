import './style.css'

const Card = (props) => {



  return (
    <div className='card'>
      <img src={props.image} alt={props.alt} />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}
export default Card