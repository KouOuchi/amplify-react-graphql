import { 
  Form,
  redirect,
  ActionFunction,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { 
  getContact,
  UpdateContact, 
  TContact 
} from "../contacts";

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@editAction:');

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
  
  await UpdateContact(updated);

  return redirect(`../contacts/${params.contactId}`);
};

export default function EditContact() {
  const navigate = useNavigate();


  const contact = useLoaderData() as TContact;


  return (
    <Form method="post" id="contact-form">
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
