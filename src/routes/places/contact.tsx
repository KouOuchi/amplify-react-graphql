import { 
  Form, 
  useLoaderData, 
  LoaderFunction, 
  ActionFunction,
  useFetcher,
} from "react-router-dom";
import { 
  getContact, 
  TContact,
  UpdateContact,
} from "./contacts";

export const loader:LoaderFunction = async ({params}) => {
  console.debug('@editLoader');

  const contactId = params.contactId as string;
  console.debug('@Contact:'+JSON.stringify(contactId));

  if(!contactId) {
    throw new Error("contact id not defined.");
  }

  const id:string = contactId as string;

  return getContact(id);
};

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@contactAction!');
  const formData = await request.formData();
  const fav = formData.get("favorite");

  if(!params) {
    throw new Error("エラー3");
  }
  if(!params.contactId) {
    throw new Error("エラー4");
  }

  const id:string = params.contactId as string;
  let contact:TContact = await getContact(id);

  if(fav === "true") {
    contact.favorite = true;
  } else if(fav === "false") {
    contact.favorite = false;
  } else {
    throw new Error("true false error");
  }
  
  return UpdateContact(contact);
};

//export async function fetchData(): Promise<TContact> {
//  const id = '';
//
//}

export default function Contact() {
  const contact = useLoaderData() as TContact;

  return (
    <div id="contact">
      <div>
        <img alt="avatar"
          key={contact.avatar}
          src={contact.avatar}
        />
      </div>

      <div>
        <h1>
          {contact.first} {contact.last}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank" rel="noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            action="destroy" method="post"
            onSubmit={(event) => {
              const isConfirmed = window.confirm("本当に削除しますか？");
              if (!isConfirmed) {
                console.debug("@answer no.");
                event.preventDefault();
              } else {
                console.debug("@answer yes.");
              }
            }}>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

interface ContactProps {
  contact: TContact;
}

function Favorite({contact}: ContactProps) {
  const fetcher = useFetcher();
  // yes, this is a `let` for later
//  console.debug('@Favorite:'+JSON.stringify(contact));
  let favorite:boolean = contact.favorite;

  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
        favorite
        ? "Remove from favorites"
        : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
