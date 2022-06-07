import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import { Routes,Route } from "react-router-dom";
import { Fragment } from "react";
const App =()=> {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/shop" element={<Shop/>}/>

        </Route>
      </Routes>
    </Fragment>
    
  );
}

export default App;
