import React from 'react';
import { Button, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';

import NavigationContainer from './src/navigation/index';
import storeConfig from './src/store';

const App = () => {
  return (
    <Provider store={storeConfig}>
      {/* <TestComp /> */}
      <NavigationContainer />
    </Provider>
  );
};

const TestComp = () => {
  const testState = useSelector((rootState) => rootState.test);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <Button
          onPress={() => dispatch(actions.exampleAction(true))}
          title="Test Sync"
          color="#841584"
        />

        <Button
          color="#841584"
          onPress={() => dispatch(actions.asyncSagaAction(true))}
          title="Test Async"
        />
      </View>
      <Text style={{padding: 16, fontSize: 24}}>
        {JSON.stringify(testState)}
      </Text>
    </View>
  );
};

export default App;
