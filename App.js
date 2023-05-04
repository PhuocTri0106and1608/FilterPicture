import React from 'react';
import RootNavigator from './src/routes/navigation';

const App = (props) => {
  return (
    <RootNavigator {...props}/>
  );
};

export default App;
