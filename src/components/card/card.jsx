import './card.css'



const Card = ({children, color = 'orange'}) => {
    return (
        <div className='card' style={{ backgroundColor: color }}>
            {children}
        </div>
    )
}

export default Card;