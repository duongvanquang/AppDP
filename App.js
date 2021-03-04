import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Booking from './src/component/Booking';
import Home from './src/component/Home';
import Settings from './src/component/Settings';
import Detail from './src/component/Detail';
import Filter from './src/component/Filter';
import Lightbox from 'react-native-lightbox';
import Danhsach from './src/component/Danhsach';
import Price from './src/component/Price';
import Voucher from './src/component/Voucher';
import Signup from './src/component/Signup';
import Login from './src/component/Login';


const LightboxView = ({ navigator }) => (
  <Lightbox navigator={navigator}>
    <Image
      style={{ height: 300 }}
      source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
    />
  </Lightbox>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const reducers = combineReducers({
  cart: require('./src/component/redux/cart').reducer
})
const store = createStore(reducers);
const home = require('./src/component/home.png')
const booking = require('./src/component/booking.png')
const settings = require('./src/component/settings.png')


function Mytab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let source;
          if (route.name === 'Home') {
            source = home
          } else if (route.name === 'Booking') {
            source = booking
          } else if (route.name === 'Profile') {
            source = settings
          }
          // You can return any component that you like here!
          return <Image
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
            source={source} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Profile" component={Settings} />
    </Tab.Navigator>
  );
}
const renderScene = (route, navigator) => {
  const Component = route.component;

  return (
    <Component navigator={navigator} route={route} {...route.passProps} />
  );
};
class StackApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Đăng nhập" component={Login} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="Trang chủ" component={Mytab} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="renderScene" component={renderScene} />
          <Stack.Screen name="Thông Tin Chi Tiết" component={Danhsach} />
          <Stack.Screen name="Price" component={Price} />
          <Stack.Screen name="Voucher" component={Voucher} />
          <Stack.Screen name="Đăng ký" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App = () => (
  <Provider store={store}>
    <StackApp />
  </Provider>
)
