import React, { useEffect, useState } from 'react';
import { 
  Form, 
  useLoaderData, 
  LoaderFunction, 
  ActionFunction,
  useFetcher,
} from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import { getPlace } from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { Place } from '../../API';

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@contactAction!');
};

export const loader:LoaderFunction = async ({params}) => {
  const contactId = params.contactId as string;
  console.debug('@Contact:'+JSON.stringify(contactId));

  if(!contactId) {
    throw new Error("contact id not defined.");
  }

  const fetchPlace = async () => {
    try {
      const client = generateClient();
      const placeData = await client.graphql({ 
        query: getPlace,
        variables: {
          id: contactId,
        }
      });
      return placeData.data.getPlace as Place;
    } catch (err) {
      console.error('error fetching Place', err);
    }
  };

  return fetchPlace();
};

const PlaceComponent: React.FC = () => {
  console.debug('@loader');

  const place = useLoaderData() as Place|null;

  return (
    <div id="place">
      <div>
        <h1>
          {place?.name}
        </h1>

        {place?.comment && <p>{place?.comment}</p>}

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

export default PlaceComponent;
