import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from './component/Checkout';
import Login from "./component/Login";
import Register from "./component/Register";
import { toast } from "react-toastify";
import '@stripe/stripe-js';
import success from "./component/Sucess";
import cancel from "./component/Cancel";

function App() {
  toast.configure({
    autoClose: 10000,
    draggable: true,
  });
  return ( //Switch is replaced with routes in upgraded react use them on behalf of last project <reactdemoProject></reactdemoProject>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Product/:id" component={Product}/>
        <Route exact path="/Cart" component={Cart}/>

        <Route exact path="/login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Checkout" component={Checkout}/>
        <Route exact path="/Cancel" component={cancel}/>
        <Route exact path="/Success" component={success}/>
        
       
      </Switch>
    </div>
  );
}

export default App;
