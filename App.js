import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import ToDoList from './screens/ToDoList';
import {AuthContext, AuthProvider} from './components/AuthContext';
// import { AuthContext } from './components/Context'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Loader from './components/Loader'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="todolist" component={ToDoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
