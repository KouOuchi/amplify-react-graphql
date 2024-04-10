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
import { getContacts, createContact,TContact } from "./contacts";
import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { listPlaces } from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { Place } from '../../API';

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@create new action #1');
  const contact = await createContact();
  console.debug('@create new action #2:'+`contacts/${contact.id}/edit`);

  console.debug('@API creation start.');

  return redirect(`place/${contact.id}/edit`);
};

const PlacesComponent: React.FC = () => {
  const [places, setPlaces] = useState<Array<Place | null >>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const client = generateClient();
        const placesData = await client.graphql({ query: listPlaces });
        const placesList = placesData.data.listPlaces.items as Array<Place>;
        setPlaces(placesList);
      } catch (err) {
        console.error('error fetching Places', err);
      }
    };

    fetchPlaces();
  }, []);

  const navigation = useNavigation();
  //console.debug('@Top:'+JSON.stringify(contacts));

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
          <Link to="./cam">CAM</Link>
        </div>

        <nav>
          { places.length > 0 ? (
            <ul>
              { places.map((place) => (
                <li key={place?.id}>
                  <NavLink to={`place/${place?.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                    }
                  >
                    {place?.name}
                    {place?.fovorite && <span>★</span>}
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

      <div id="detail"
        className={
        navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>

    </>
  );
};

export default PlacesComponent;