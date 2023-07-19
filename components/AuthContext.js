import axios from 'axios';
import React, {createContext, useState} from 'react';
import {BASE_URL} from './Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});

  const register = (name, email, password) => {
    axios
      .post(`${BASE_URL}/api/users/`, {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
      });
  };

  const login = (email, password) => {
    axios
      .post(`${BASE_URL}/api/users/login/`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      })
      .catch(e => {
        console.log(`login error ${e}`);
      });
  };

  return (
    <AuthContext.Provider value={{register, login, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
