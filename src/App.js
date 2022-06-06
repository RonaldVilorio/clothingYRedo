import CardList from "./components/cardlist/cardlist.component"


const cardlist = [
  {
    img:"url",
    name: "Hats",
    id:1
  },
  {
    img:"url",
    name:"Jackets",
    id:2
  },
  {
    img:"url",
    name:"Sneakers",
    id:3
  },
  {
    img:"url",
    name:"Womens",
    id:4
  },
  {
    img:"url",
    name:"Mens",
    id:5
  }
]

const App =()=> {
  return (
    <div>
      Hello
      <CardList cardlist={cardlist}/>
    </div>
  );
}

export default App;
