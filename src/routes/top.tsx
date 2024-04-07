import { Authenticator } from '@aws-amplify/ui-react';
import { Outlet, 
         Link, 
         Form,
         ActionFunction,
         LoaderFunction,
         useLoaderData,
         redirect, } from "react-router-dom";
import { getContacts, createContact,TContact } from "../contacts";

export const loader:LoaderFunction = () => {
  console.debug('@topLoader');
  return getContacts('');
};

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@create new action #1');
  const contact = await createContact();
  console.debug('@create new action #2:'+`contacts/${contact.id}/edit`);
  return redirect(`contacts/${contact.id}/edit`);
};

export default function Top() {
  const contacts = useLoaderData() as TContact[];

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
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first} {contact.last}
                    {contact.favorite && <span>★</span>}
                  </Link>
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

      <div id="detail">
        <Outlet />
      </div>

    </>
  );
}
