import './cardlist.styles.scss'
import Card from '../card/card.component';

// loop through all cards
const CardList = ({cardlist}) => {  
    return (
        <div className='categories-container'>
        {
            cardlist.map((card)=>{
                return(
                    <Card key={card.id} card={card} />
                )
            })
        }
        </div>
     );
}
 
export default CardList;