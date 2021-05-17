import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import SignPage from "./pages/SignPage";
import { ShopPage } from "./pages/ShopPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/sign" component={SignPage} />

          <div>
            <Navbar />

            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/checkout" component={CartPage} />
            <Route path="/shop" component={ShopPage} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
