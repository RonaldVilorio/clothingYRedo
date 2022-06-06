import './cardlist.styles.scss'
import Card from '../card/card.component';

// loop through all cards
const CardList = ({cardlist}) => {  
    return (
        <div className='categories-container'>
        {
            cardlist.map(({title,imageUrl,id})=>{
                return(
                    <Card key={id} title={title} imageUrl={imageUrl} />
                )
            })
        }
        </div>
     );
}
 
export default CardList;