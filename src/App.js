import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MainHome from "./Components/Home/MainHome/MainHome";
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
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
