import React from 'react';
import style from './login.module.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

let Login = ({ isAuth, callbackSetIsAuth }) => {
  let [up, changeUp] = React.useState(false);
  React.useEffect(() => {
    callbackSetIsAuth()
  }, [isAuth])

  return (
    <div className={style.pageLogin}>
      <div className={style.login}>
        <div className={style.btns}>
          <button className={style.signInBtn} value={!up} onClick={() => changeUp(false)}>Sign in</button>
          <button className={style.signUpBtn} value={up} onClick={() => changeUp(true)}>Sign up</button>
        </div>
        <SignIn up={up} callbackSetIsAuth={callbackSetIsAuth} />
        <SignUp up={up} callbackSetIsAuth={callbackSetIsAuth} />
      </div>
    </div>
  )
};

export default Login;