import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import Authorized from './pages/Authorized';
import Home from './pages/Home';
import Test from './pages/Test';
// import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/404';
import store from './store';
import { connect } from 'react-redux';
// import { renderRoutes } from 'react-router-config';
// import RoutesMap from './routes'; //非react-router-config模式
// import routes from './routes/config'; //适用于整个网站只有一种布局
// import routes from './routes/config-diff-layout'; //适用于一个网站有多个布局

class App extends Component {
  componentWillMount() {
    store.dispatch({
      type: 'GET_LOGGED_USER'
    })
  }
  render() {
    return (
      <Router>
        <Switch>
          {/* <Auth> */}
          <Route exact path="/login" render={ props => <Login {...props} title="登录" /> } />
            {/* <Authorized exact path="/login" title="登录" component={Login} {...this.props} /> */}
          {/* </Auth> */}
          {/* {renderRoutes(routes)} */}
          <BasicLayout>
            {/* <Authorized {...this.props}> */}
              <Switch>
                {/* <Route exact path="/" render={ props => <Home {...props} title="首页" /> } />
                <Route path="/playlist" render={ props => <Test {...props} title="歌单" /> } />
                <Route path="/album" render={ props => <Test {...props} title="专辑" /> } />
                <Route path="/singer" render={ props => <Test {...props} title="歌手" /> } />
                <Route path="/error/403" render={ props => <Test {...props} title="403" /> } /> */}
                <Authorized exact path="/" component={Home} {...this.props} title="首页" />
                <Authorized path="/playlist" component={Test} {...this.props} title="歌单" />
                <Authorized path="/album" component={Test} {...this.props} title="专辑" />
                <Authorized path="/singer" component={Test} {...this.props} title="歌手" />
              </Switch>
            {/* </Authorized> */}
          </BasicLayout>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const stateToProps = ({ loginStatus }) => ({
  pending: loginStatus.pending,
  isLogin: loginStatus.isLogin
});

export default connect(stateToProps)(App);