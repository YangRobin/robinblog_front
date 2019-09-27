
import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../../common/Header'
// import { Wrapper, Row, Col } from '../../components/robin';
import routes from './router';
import '../../resource/iconfont.css';
import Menu from './components/Menu';
import CommonContext from './commonContext';
import style from './app.less';

const App = () => {
  const [state, setState] = useState({
    search: 'query'
  })

  return (
    <CommonContext.Provider value={{ state, setState }}>
      <Router>
        <div>
          <Header />
          <main className={style.mainWrapper}>
            <div className={style.left}>
              <Menu routes={routes} />
            </div>
            <div className={style.right}>
              <main>
                {
                  routes.map(i => {
                    return <Route key={i.path} path={i.path} exact={i.exact} component={i.component} />
                  })
                }
              </main>
            </div>
          </main>
          {/**
            
           <Footer /> */}
        </div>
      </Router>
    </CommonContext.Provider>

  );
};




export default App;
