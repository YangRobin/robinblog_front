
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { Wrapper, Row, Col } from '../../components/robin';
import routes from './router';
import '../../resource/iconfont.css';
import Menu from './components/Menu';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Row>
            <Col span={4}>
              <Menu routes={routes} />
            </Col>
            <Col span={16}>
              <main style={{ margin: '10px' }}>
                {
                  routes.map(i => {
                    return <Route key={i.path} path={i.path} exact={i.exact} component={i.component} />
                  })
                }
              </main>
            </Col>
            <Col span={4}> </Col>
          </Row>
        </Wrapper>
        {/** <Footer /> */}
      </div>
    </Router>
  );
};




export default App;
