import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import reducer, {initialState} from './reducer';

function App() {
  return (
    <div className="App">
      <StateProvider reducer={reducer} initialState={initialState}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
