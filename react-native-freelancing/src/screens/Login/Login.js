import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../../store/actions/Auth';
import {horizontalScale as hs} from '../../utils/styleUtils';

const Login = () => {
  const authState = useSelector((rootState) => rootState.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        actions.authenticate({
          emailOrMobilenumber: 'colkar99@gmail.com',
          password: 'Colkar$99',
        }),
      );
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: hs(14)}}>Login works!!</Text>
      <Text>{JSON.stringify(authState)}</Text>
    </View>
  );
};

export default Login;
