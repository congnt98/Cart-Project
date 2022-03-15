import './assets/style.scss'
import MenuCT from './containers/MenuCT'

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import React from 'react';
import RouterMenu from './routers/router';

class App extends React.Component {
  onShowMenu = (RouterMenu) => {
    var resuft = null
    if (RouterMenu.length > 0) {
      resuft = RouterMenu.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />;
      })
    }
    return resuft;
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <header>
            <MenuCT />
          </header>
          <main>
            <Routes>
              {this.onShowMenu(RouterMenu)}
            </Routes>
          </main>
          <footer className="page-footer font-small special-color-dark pt-4">
            <div className="container">

            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
              <span href="https://mdbootstrap.com/"> MDBootstrap.com</span>
            </div>
          </footer>

        </BrowserRouter>
      </>

    );
  }
}

export default App;
