import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './styles.css';

import App from './App';
import TexMexAddress from './TexMexMapper/TexMexAddress';
import TexMexMenu from './TexMexMapper/TexMexMenu';
import registerServiceWorker from './registerServiceWorker';

// import 'boostrap/dist/css/bootstrap.css';


const Home = () => {
  return(
    <div>
      <h3>Hello from Tex Mex Home</h3>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <div className="nav-bar-container">
      // <Route exact path="/" component= { Home } />
      // <Route path="/TexMexMapper" component={ TexMexAddress } />
      <App />
      <TexMexAddress />
      <TexMexMenu />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();


// ReactDOM.render((
//   <Router>
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   </Router>
// ))
