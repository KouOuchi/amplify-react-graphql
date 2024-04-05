import React, { useEffect, useState } from 'react';
import { Route, redirect, RouteProps } from 'react-router-dom';
//import { Auth } from 'aws-amplify';
//import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme

//import { createBrowserHistory } from 'history';

// カスタム履歴オブジェクトの作成


//export const ProtectedRoute: React.FC<RouteProps> = ({ children:, ...rest }) => {
//  return (
//    <Route {...rest}>
//      {children}
//    </Route>
//  );
//};


//= ({children}:any) => {
//  return (
//    <Route element={
//    <Authenticator.Provider>
//      <View>
//        {children}
//      </View>
//    </Authenticator.Provider>
//      } />
//  );
//};


