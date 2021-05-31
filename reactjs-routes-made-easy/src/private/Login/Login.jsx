import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../../core/services/AuthService';

import { Storagehelper } from '../../shared/helpers/StorageHelper';
import styles from './Login.module.scss';

function Login() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState('hruday@gmail.com');
  const [password, setPassword] = useState('hruday123');

  const handleSubmit = async e => {
    setLoading(true);
    try {
      const res = await AuthService.doAuthUser({
        username, password
      });
      Storagehelper.setAccessToken(res.accessToken);
      Storagehelper.setUserData(res.userData);

      setLoading(false);

      history.push('/');
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <h1>{loading ? 'Logging in....' : 'Please Log In'}</h1>
      <label>
        <p>Username</p>
        <input type="text" value={username} onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <div className={styles.btn}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login;