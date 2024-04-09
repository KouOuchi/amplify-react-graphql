// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

// application imports
import ErrorPage, {
} from "./routes/error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import Main, {
} from "./routes/main";
import Places, {
  loader as placesLoader,
  action as placesAction,
} from "./routes/places";
import EditContact, {
  action as editAction,
} from "./routes/edit";
import Cam, { 
} from "./routes/cam";
import Index, {
} from "./routes/index";
import { 
  action as destroyAction 
} from "./routes/destroy";
import './index.css';
import { Welcome, 
} from "./welcome/welcome";

// auth related imports
//import LoginPage from './login/login_page';
//import ProtectedPage from './login/protected_page';
//import { ProtectedRoute, } from './login/protected_route';

// amplify
import { Amplify } from 'aws-amplify'; // checked 2024-4-5
//import awsmobile from './aws-exports'; // checked 2024-4-5
import { generateClient } from "aws-amplify/api"; // checked 2024-4-5
//import { type AuthUser } from "aws-amplify/auth";
import { useAuthenticator } from '@aws-amplify/ui-react';
// NOTE: useAuthenticator or withAuthenticator???
//import {
//  withAuthenticator,
//  WithAuthenticatorProps,
//} from '@aws-amplify/ui-react'; // checked 2024-4-5

import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css"; // checked 2024-4-5

// etc
import reportWebVitals from './reportWebVitals';

// start logic
import awsmobile from './aws-exports.js'
Amplify.configure(awsmobile); //checed 2024-4-5

//type AppProps = {
//  signOut?: UseAuthenticator["signOut"]; //() => void;
//  user?: AuthUser;
//};

//interface Props extends WithAuthenticatorProps {
//  isPassedToWithAuthenticator: boolean;
//}

// build router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*">

      <Route path="welcome/*">
        <Route
          path="welcome"
          element={<Welcome />}
          errorElement={<ErrorPage />}
        />
      </Route>

      <Route path="toolapp/*">
        <Route
          path="main"
          element={
            <Authenticator loginMechanisms={['username']} variation="modal" initialState="signUp">
                                           {({ signOut, user }) => (
                                             <Main />
                                           )}
            </Authenticator>
          }
          errorElement={<ErrorPage />}
        >
          <Route
            path= "places"
            element={<Places />}
            action={ placesAction }
            loader={ placesLoader }
          >
            <Route
              index={true}
              element={<Index />}
            />
            <Route 
              path="contacts/:contactId"
              element={<Contact />}
              action={ contactAction }
              loader={ contactLoader }
            />
            <Route
              path="contacts/:contactId/edit"
              element={<EditContact />}
              action={ editAction }
              loader={ contactLoader }
            />
            <Route
              path="cam"
              element={<Cam />}
            />
            <Route
              path="contacts/:contactId/destroy"
              action={ destroyAction }
            />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <RouterProvider router={router} />
    </Authenticator.Provider>
  </React.StrictMode>
);

//export default withAuthenticator(props);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
