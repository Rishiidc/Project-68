import react from 'react';
import { styleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import fb from './Screens/fb';
import insta from './Screens/insta';

export default class App extends React.Component {
   render(){
     return(

        <AppContainer />

     );
   }
}

const TabNavigator = createBottomTabNavigator({
     Fb: {Screen: fb},
     insta: {Screen: insta},
});

const AppContainer = createAppContainer(TabNavigator); 