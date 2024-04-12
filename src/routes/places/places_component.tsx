import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Outlet, 
         Link,
         NavLink,
         Form,
         ActionFunction,
         LoaderFunction,
         useLoaderData,
         useNavigation,
         redirect, } from "react-router-dom";
import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Place } from '../../API';

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@create new action #1');

  let created_place:Place | null = null;

  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);

    const client = generateClient();

    const placeDetails = {
      name: 'My first places!',
      userID: userId,
      fovorite: false
    };

    const result = await client.graphql({
      query: mutations.createPlace,
      variables: { input: placeDetails }
    });
    console.debug('@API creation done:'+result);
    created_place = result.data.createPlace;

  } catch (err) {
    console.log(err);
  }

  console.debug('@create new action #2:'+`place/${created_place?.id}/edit`);
  return redirect(`place/${created_place?.id}/edit`);
};

export const loader:LoaderFunction = async ({params}) => {

  const fetchPlaces = async () => {
    try {
      const client = generateClient();
      const placesData = await client.graphql({ query: queries.listPlaces });
      return placesData.data.listPlaces.items as Array<Place>;

    } catch (err) {
      console.error('error fetching Places', err);
    }
  };

  return fetchPlaces();
};

const PlacesComponent: React.FC = () => {
  const places = useLoaderData() as Array<Place>;
  const navigation = useNavigation();

  return (
    <div>
      <div id="sidebar">
        <h1>拠点・在庫場所一覧</h1>
        <div>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        <nav>
          { places.length > 0 ? (
              <ul>
                { places.map((place) => (
                  <li key={place.id}>
                    <NavLink to={`place/${place.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                      }
                    >
                      {place.name}
                      {place.fovorite && <span>★</span>}
                    </NavLink>
                  </li>
                  ))}
              </ul>
          ) : (
              <p>
                <i>No contacts</i>
              </p>
          )
          }
        </nav>
      </div>

      <div
        className={
        navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>

    </div>
  );
};

export default PlacesComponent;
