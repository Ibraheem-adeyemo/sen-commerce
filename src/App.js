import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer'
import { Provider } from 'react-redux';
import ProductList from './pages/ProductList.page';
import Navbar from './components/Navbar';
import HomePage from './pages/Home.pages';
// import fetchProducts from './store/oneKiosk/action'
import 'bootstrap/dist/css/bootstrap.min.css';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Product from './pages/Product.page';
import Register from './pages/Register.page';
import Login from './pages/Login.page';
import styled from 'styled-components'
import Cart from './pages/Cart.page';


const middlewares = [thunk]
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

const FixedTop = styled.div`
  position: fixed;
  top:0;
  z-index: 4;
  width: 100%;
`
const PageContainer = styled.div`
  margin-top: 120px;
`
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <Router>
          <FixedTop>
            <Announcement />
            <Navbar />
          </FixedTop>
          <PageContainer>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/product-list' component={ProductList} name='loan request' />;
            <Route path='/product/:no' component={Product} exact />
            <Route path='/signup' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/cart' component={Cart} />
            {/*<Route path='/permission' component={Permission} /> */}
           </Switch>
          </PageContainer>
           
           <Footer />
         </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
