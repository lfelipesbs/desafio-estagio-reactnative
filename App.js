import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Image } from 'react-native';

import Init from './src/pages/Init';
import Login from './src/pages/Login';
import CriarConta from './src/pages/CriarConta';
import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil';
import Buscar from './src/pages/Buscar';
import store from './src/store/store';
import { globalStyle, corDeFundo, corTres, corQuatro } from './src/constants/css';
import Button from './src/components/Button/Button';
import logo from './src/assets/img/logo.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Group
      screenOptions={{
        headerStyle: {
          backgroundColor: corDeFundo,
          height: 120
        },
        headerLeft: () => <Image style={globalStyle.logo} source={logo}/>,
        headerTintColor: corDeFundo,
        tabBarStyle: {
          backgroundColor: corTres
        },
        tabBarActiveTintColor: corDeFundo,
        tabBarInactiveTintColor: corQuatro,
        tabBarHideOnKeyboard: true,
        tabBarIcon: () => <></>,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'semi-bold',
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarItemStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerRight: () => <Button type='header'>+ POST</Button>
        }}
      />
      <Tab.Screen name="Buscar" component={Buscar} />
    </Tab.Group>
  </Tab.Navigator>
)

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Group
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="HomeTabs" component={HomeTabs} /> 
            </Stack.Group>
        <Stack.Group 
          screenOptions={{
              headerStyle: {
                backgroundColor: corDeFundo,
              },
              headerTitleStyle: { color: 'transparent'},
              headerBackTitle: 'Voltar'
          }}
        >
          <Stack.Screen name="Init" component={Init} options={globalStyle}/> 
          <Stack.Screen name="CriarConta" component={CriarConta} options={globalStyle}/> 
          <Stack.Screen name="Login" component={Login} options={globalStyle}/> 
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;