import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../utils/config';

export const AuthContext = createContext({});

export const AuthProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then(res => {
        let token = res.data.data.token;
        setUserToken(token);

        AsyncStorage.setItem('userToken', token);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const register = (
    name: string,
    email: string,
    password: string,
    onSuccess: () => void,
  ) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      })
      .then(res => {
        let result = res.data;
        console.log(JSON.stringify(result));
        onSuccess();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken').finally(() => {
      setIsLoading(false);
    });
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let getUserToken = await AsyncStorage.getItem('userToken');
      setUserToken(getUserToken);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, register, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
