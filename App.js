import React from 'react';
import {Provider} from 'react-redux';
import store from "./src/Redux/store/store";
import {
  StyleSheet,
  View,
} from 'react-native';

import {AppNavigation} from './src/AppNavigation/AppNavigation';

const App = ()  => {
  return (
    
     <Provider store ={store}>
      <AppNavigation />
     </Provider>
      
  );
};

const styles = StyleSheet.create({

});

export default App;
