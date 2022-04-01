import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";

function App() {
  return ( //Switch is replaced with routes in upgraded react use them on behalf of last project <reactdemoProject></reactdemoProject>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Product/:id" component={Product}/>
       
      </Switch>
    </div>
  );
}

export default App;
