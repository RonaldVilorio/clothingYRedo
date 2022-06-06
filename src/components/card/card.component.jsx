
const Card = ({title,imageUrl}) => {
    return ( 
        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
                }} />
            <div>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}
     

 
export default Card;