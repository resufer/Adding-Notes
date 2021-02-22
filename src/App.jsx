import React from 'react';
import Header from './Header/Header';
import Login from './Login/Login';
import Notes from './Notes/Notes';
import style from './App.module.css';
import { checkIp } from './checkIp';
import createExample from './dataProcessing/createExample';


class App extends React.Component {
  componentDidMount() {
    createExample();
  };

  state = {
    isAuth: false,
    login: null
  };

  callbackSetIsAuth = async (isAuth, login = null) => {
    if (login === null) {
      let [AuthByIp, loginByIp] = await checkIp();
      if (AuthByIp) {
        this.setState({ isAuth: AuthByIp, login: loginByIp });
      } else {
        this.setState({ isAuth, login });
      }
    } else {
      this.setState({ isAuth, login });
    }
  };

  render() {
    return (
      <div className={style.app}>
        <Header login={this.state.login} isAuth={this.state.isAuth} callbackSetIsAuth={this.callbackSetIsAuth} />
        {this.state.isAuth ? <Notes login={this.state.login} /> : <Login callbackSetIsAuth={this.callbackSetIsAuth} />}
      </div>
    )
  };
};

export default App;
