import React from 'react';
import 'react-native-gesture-handler';
import AppRouter from './src/navigation/Nav';
import { Provider } from './src/context/BlogContext';

const App = () => {
  return (<Provider>
    <AppRouter />
  </Provider>);
}
export default App;