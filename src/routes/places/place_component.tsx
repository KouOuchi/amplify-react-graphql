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
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    <Card sx={{ minWidth: 375 }}>
      <CardContent>

        <Typography variant="h5">
          {place?.name}
        </Typography>

        <Typography>
          コメント: {place?.comment && place?.comment}
        </Typography>

        <CardActions>
          <Form action="edit">
            <Button variant="contained" type="submit">編集</Button>
          </Form>
          <Form action="destroy" method="post" onSubmit={(event) => {
            const isConfirmed = window.confirm("本当に削除しますか？");
            if (!isConfirmed) {
              console.debug("@answer no.");
              event.preventDefault();
            } else {
              console.debug("@answer yes.");
            }
          }}>
            <Button type="submit" variant="contained">削除</Button>
          </Form>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceComponent;
