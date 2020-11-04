//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import CartScreen from './pages/CartScreen';


const CartStack = createStackNavigator(
  {
   
    Cart:{screen:CartScreen,
      navigationOptions:{
        header:null,
        tabBarVisible: false
      }}
  },
  {
    // defaultNavigationOptions: {
    //   //Header customization of the perticular Screen
    //   headerStyle: {
    //     backgroundColor: '#42f44b',
    //   },
    //   headerTintColor: '#FFFFFF',
    //   title: 'Home',
    //   //Header title
    // },
  }
);


const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    // Cart:{screen:CartScreen,
    //   navigationOptions:{
    //     header:null,
    //     tabBarVisible: false
    //   }
    // }
  },
  {
    defaultNavigationOptions: {
      header: null,    tabBarVisible: false
      //Header customization of the perticular Screen
    
      //Header title
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
	Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
    
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      header: null
    },
  }
);
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack,
      },
    Product: { screen: SettingsStack },
  
    Cart:{screen:CartScreen,
      navigationOptions:{
        header:null,
        tabBarVisible: false
        
      }
    
    
    },
    Profile:{screen:ProfileScreen},
   
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
     
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
      
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Product') {
          iconName = `ios-checkmark-circle${focused ?
            '' : '-outline'
          }`;
        }
        else if (routeName === 'Profile') {
          iconName = `ios-information-circle${focused ?
            '' : '-outline'
          }`;
        }
        else if (routeName === 'Cart') {
          iconName = `ios-checkmark-circle${focused ?
            '' : '-outline'
          }`;
        }
        return <IconComponent
        name={iconName}
        size={25}
        color={tintColor}
      />;
        
      },
      
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);