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
  action as contactAction,
} from "./routes/contact";
import Top, {
//  loader as topLoader,
  action as topAction,
} from "./routes/top";
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
import Amplify from 'aws-amplify'; // checked 2024-4-5
//import awsmobile from './aws-exports'; // checked 2024-4-5
import { generateClient } from "aws-amplify/api"; // checked 2024-4-5
//import { type AuthUser } from "aws-amplify/auth";
//import { useAuthenticator } from '@aws-amplify/ui-react';
// NOTE: useAuthenticator or withAuthenticator???
//import {
//  withAuthenticator,
//  WithAuthenticatorProps,
//} from '@aws-amplify/ui-react'; // checked 2024-4-5

import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css"; // checked 2024-4-5

// etc
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';

// start logic
//Amplify.configure(awsmobile); //checed 2024-4-5

//type AppProps = {
//  signOut?: UseAuthenticator["signOut"]; //() => void;
//  user?: AuthUser;
//};

//interface Props extends WithAuthenticatorProps {
//  isPassedToWithAuthenticator: boolean;
//}

const queryClient = new QueryClient();

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
          path= "top"
          element={<Top />}
          errorElement={<ErrorPage />}
          action={ topAction }
        >
          <Route
            index={true}
            element={<Index />}
          />
          <Route 
            path="contacts/:contactId"
            element={<Contact />}
            action={ contactAction }
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
            action={ editAction }
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
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Authenticator.Provider>
  </React.StrictMode>
);

//export default withAuthenticator(props);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
