import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Assets/Context/AuthProvider";
// import PrivateRoute from "./Common/utilityComponents/PrivateRoute"
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login.js'
import Register from './Pages/Register/Register'
import NotFound from './Pages/NotFound/NotFound';
import Products from "./Pages/Products/Products";
import PrivateRoute from './Common/utilityComponents/PrivateRoute'
import Order from './Pages/Order/Order'
import Dashboard from './Pages/DashBoard/DashBoard'
import About from "./Pages/About/About";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <PrivateRoute exact path="/products/:productid">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
            <Route exact path="/login">
            <Login></Login>
          </Route>
            <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App; 