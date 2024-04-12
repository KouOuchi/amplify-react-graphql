// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// application imports
import ErrorComponent, {
} from "./error_component";

// places routes
import MainComponent, {
} from "./routes/main_component";
import PlacesComponent, {
  loader as placesLoader,
  action as placesAction,
} from "./routes/places/places_component";
import PlaceComponent, {
  loader as placeLoader,
  action as placeAction,
} from "./routes/places/place_component";
import EditPlaceComponent, {
  action as editPlaceAction,
} from "./routes/places/edit_place_component";
import EmptyComponent from "./routes/places/empty_component";
import { 
  action as destroyPlaceAction 
} from "./routes/places/destroy";
//import './index.css';

import ToolSearchComponent, {
  loader as toolSearchLoader,
  action as toolSearchAction 
} from "./routes/tools/tool_search_component";
import ToolSearchResultComponent, {
} from "./routes/tools/tool_search_result_component";

// welcom route
import { Welcome, 
} from "./welcome/welcome";

// amplify
import { Amplify } from 'aws-amplify'; // checked 2024-4-5
//import awsmobile from './aws-exports'; // checked 2024-4-5
import { generateClient } from "aws-amplify/api"; // checked 2024-4-5
//import { type AuthUser } from "aws-amplify/auth";
import { useAuthenticator } from '@aws-amplify/ui-react';

import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css"; // checked 2024-4-5

// etc
import reportWebVitals from './reportWebVitals';

// amplify configs
import awsmobile from './aws-exports.js'
import config from './amplifyconfiguration.json';

// start logic
Amplify.configure(awsmobile);
Amplify.configure(config);



// build router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*">

      <Route path="welcome/*">
        <Route
          index={true}
          element={<Welcome />}
          errorElement={<ErrorComponent />}
        />
      </Route>

      <Route path="toolapp/*">
        <Route
          path="main"
          element={
            <Authenticator loginMechanisms={['username']} variation="modal" initialState="signUp">
                                           {({ signOut, user }) => (
                                             <MainComponent />
                                           )}
            </Authenticator>
          }
          errorElement={<ErrorComponent />}
        >
          <Route
            path= "places"
            element={<PlacesComponent />}
            loader={ placesLoader }
            action={ placesAction }
          >
            <Route
              index={true}
              element={<EmptyComponent />}
            />
            <Route 
              path="place/:contactId"
              element={<PlaceComponent />}
              action={ placeAction }
              loader={ placeLoader }
            />
            <Route
              path="place/:contactId/edit"
              element={<EditPlaceComponent />}
              action={ editPlaceAction }
              loader={ placeLoader }
            />
            <Route
              path="place/:contactId/destroy"
              action={ destroyPlaceAction }
            />
          </Route>
          <Route
            path="tool_search"
            element={<ToolSearchComponent />}
            loader={ toolSearchLoader }
            action={ toolSearchAction }
          >
            <Route
              index={true}
              element={<EmptyComponent />}
            />
            <Route
              path="place/:contactId"
              element={<ToolSearchResultComponent />}
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
