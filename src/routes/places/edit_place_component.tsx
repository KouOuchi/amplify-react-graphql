import React from 'react';
import { 
  Form,
  redirect,
  ActionFunction,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { Place } from '../../API';

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@editAction:');

  const formData = await request.formData();

  try {
    const client = generateClient();
    const updateResult = await client.graphql({
      query: mutations.updatePlace,
      variables: {
        input: {
          id: params.contactId as string,
          name: formData.get("name") as string,
          comment: formData.get("comment") as string,
        }
      }
    });
  } catch (err) {
    console.error('error updating Place', err);
  }
  return redirect('..');
};

const EditPlaceComponent: React.FC = () => {
  const navigate = useNavigate();

  const place = useLoaderData() as Place|null;
  const place_name = place?.name as string;
  const place_comment = place?.comment as string;
  
  return (
    <Form method="post" id="contact-form">
      <p>
        <span>拠点・在庫場所</span>
        <input
          placeholder="< 拠点・在庫場所 >"
          aria-label="name"
          type="text"
          name="name"
          defaultValue={place_name}
        />
      </p>
      <label>
        <span>コメント</span>
        <textarea
          placeholder="< コメント >"
          aria-label="comment"
          name="comment"
          defaultValue={place_comment}
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
};

export default EditPlaceComponent;
