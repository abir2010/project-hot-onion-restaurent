import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MainHome from "./Components/Home/MainHome/MainHome";
import Login from "./Components/Registration/Login/Login";
import Register from "./Components/Registration/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AuthProvider from "./Contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <MainHome></MainHome>
            </Route>
            <Route path="/home">
              <MainHome></MainHome>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
