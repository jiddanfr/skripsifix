import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home'
import Detail from './src/Detail'
import Splash from './src/Splash'
import About from './src/About';


const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Detail: Detail,
    Splash: Splash,
    About: About,
    
  },
  {
    initialRouteName: "Splash",
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);