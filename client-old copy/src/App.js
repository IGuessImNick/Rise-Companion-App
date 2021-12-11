import React, { Fragment } from 'react'
import Header from './Components/Header';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Aspects from './Components/Aspects';
// import Vitality from './Components/Vitality';
// import Powers from './Components/Powers';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <div className="App" bg="dark">
//       <header className="App-header">
//           <br/>
//           <br/>
//           <br/>
//           <Header />
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route exact path="/login">
//                 <Login />
//               </Route>
//               <Route exact path="/signup">
//                 <Signup />
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
          </Routes>
        </Fragment>
      </Router>
    </ApolloProvider>
  )
}

export default App;