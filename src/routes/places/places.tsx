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

import { generateClient } from 'aws-amplify/api';
import { listPlaces } from '../../graphql/queries';

export const loader:LoaderFunction = () => {
  console.debug('@topLoader');

//  console.debug('@API');
//  const client = generateClient();
//  const result = client.graphql({ query: listPlaces });
//  console.debug('@API data:'+JSON.stringify(result));

  return getContacts('');
};

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@create new action #1');
  const contact = await createContact();
  console.debug('@create new action #2:'+`contacts/${contact.id}/edit`);
  return redirect(`contacts/${contact.id}/edit`);
};

export default function Places() {
  const contacts = useLoaderData() as TContact[];
  const navigation = useNavigation();
  console.debug('@Top:'+JSON.stringify(contacts));

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
          {contacts.length > 0 ? (
            <ul>
              {contacts.map((contact:TContact) => (
                <li key={contact.id}>
                  <NavLink to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                    }
                  >
                    {contact.first} {contact.last}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
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
}
