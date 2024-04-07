import { 
  useQuery, 
} from 'react-query';
import { 
  Form,
  redirect,
  ActionFunction,
  LoaderFunction,
  useNavigate,
  useParams
} from "react-router-dom";
import { 
  getContact,
  updateContact, 
  TContact 
} from "../contacts";

export const action:ActionFunction = async ({ request, params }) => {

  const formData = await request.formData();
//  const updates = Object.fromEntries(formData);
//  console.debug('@editAction:updated'+JSON.stringify(updates)+'@id:'+id);
  const updated:TContact = {
    id: Number(params.contactId),
    first: formData.get("first") as string,
    last: formData.get("last") as string,
    avatar: formData.get("avatar") as string,
    twitter: formData.get("twitter") as string,
    notes: formData.get("notes") as string,
    favorite: formData.get("favorite") === "true" ? true : false as boolean,
  };
  
  await updateContact(updated);
  return redirect(`/contacts/${params.contactId}`);
};

export default function EditContact() {
  const navigate = useNavigate();

  const { contactId } = useParams();
  console.debug('@Contact:'+JSON.stringify(contactId));

  if(!contactId) {
    throw new Error("contact id not defined.");
  }

  const id:string = contactId as string;

  const { isLoading, error, data } = useQuery<TContact>(`get_one_${id}`, async () => {
    return await getContact(id);
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

  if(!data) throw new Error('contact data fetching error.');

  const contact = data as TContact;


  return (
    <Form id="contact-form" action="save">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
