import { 
  useQuery, 
} from 'react-query';
import { Authenticator } from '@aws-amplify/ui-react';
import { Outlet, 
         Link, 
         Form,
         ActionFunction,
         redirect, } from "react-router-dom";
import { getContacts, createContact,TContact } from "../contacts";

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@create new action #1');
  const contact = await createContact();
  console.debug('@create new action #2:'+`contacts/${contact.id}/edit`);
  return redirect(`contacts/${contact.id}/edit`);
};

export default function Root() {
  const { isLoading, error, data } = useQuery<TContact[]>('get_all', async () => {
    return await getContacts('');
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

  if(!data) throw new Error('contact data fetching error.');

  const contacts = data as TContact[];

  console.debug('@Root:'+JSON.stringify(contacts));

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
