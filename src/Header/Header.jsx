import React from 'react';
import deleteIp from './deleteIp';
import style from './header.module.css';

class Header extends React.Component {
  fullLogout = (login) => {
    deleteIp(login)
    this.props.callbackSetIsAuth(false);
  }

  render() {
    return (
      <div className={style.header}>
        <div>
          <img />
        </div>
        {this.props.isAuth &&
          <div className={style.log}>
            <button onClick={() => { this.fullLogout(this.props.login) }}>Logout</button>
          </div>
        }
      </div>
    )
  }
};

export default Header;