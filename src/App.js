import HomePage from './components/Home'
import Footer from './components/Footer';

import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";
import Order from './components/Order';

const App = () => {
  return (
    <BrowserRouter>
      <div className="tiki-app">
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/order'  component={Order} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
