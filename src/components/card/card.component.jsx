
const Card = ({name,img}) => {
    console.log(name)
    return ( 
        <div className="card">
            {/* img */}
            <div>
                <h2>{name}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}
     

 
export default Card;