import './cardlist.styles.scss'
import Card from '../card/card.component';

// loop through all cards
const CardList = ({cardlist}) => {  
    return (
        <div>
        {
            cardlist.map(({name,img,id})=>{
                return(
                    <Card key={id} name={name} img={img} />
                )
            })
        }
        </div>
  
     );
}
 
export default CardList;