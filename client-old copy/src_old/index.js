import React from 'react';
import ReactDOM from 'react-dom';
// import { Offcanvas, Button, Form } from "react-bootstrap";
// import SideDrawerButton from './components/Header/SideDrawerButton';
import "bootstrap/dist/css/bootstrap.css";
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CharacterSheet from './components/Character/CharacterSheet';
// import Layout from './layout/Layout';
// import { Container } from './layout/LayoutStyles';
import Header from './components/Header/Header';

import {Provider} from 'react-redux';
import store from './store/store'
import SideDrawer from './components/UIComponents/SideDrawer';
window.store = store;




ReactDOM.render(
  <React.StrictMode>
    {/* <Header />
    <CharacterSheet /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function Layout () {
//   return(
//     <Provider store={store}>
//       <div className="Layout">
//         {/* <Header /> */}
//         {/* <CharacterSheet /> */}
//         {/* <SideDrawerButton /> */}
//         <App />
//       </div>
//     </Provider>
//   )
// }

// ReactDOM.render(
//   React.createElement(Layout, null),
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
