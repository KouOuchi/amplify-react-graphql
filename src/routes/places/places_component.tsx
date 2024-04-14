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
import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Place } from '../../API';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@create new action #1');

  let created_place:Place | null = null;

  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);

    const client = generateClient();

    const placeDetails = {
      name: 'My first places!',
      userID: userId,
      fovorite: false
    };

    const result = await client.graphql({
      query: mutations.createPlace,
      variables: { input: placeDetails }
    });
    console.debug('@API creation done:'+result);
    created_place = result.data.createPlace;

  } catch (err) {
    console.log(err);
  }

  console.debug('@create new action #2:'+`place/${created_place?.id}/edit`);
  return redirect(`place/${created_place?.id}/edit`);
};

export const loader:LoaderFunction = async ({params}) => {

  const fetchPlaces = async () => {
    try {
      const client = generateClient();
      const placesData = await client.graphql({ query: queries.listPlaces });
      return placesData.data.listPlaces.items as Array<Place>;

    } catch (err) {
      console.error('error fetching Places', err);
    }
  };

  return fetchPlaces();
};

const PlacesComponent: React.FC = () => {
  const places = useLoaderData() as Array<Place>;
  const navigation = useNavigation();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} padding={1}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h4" gutterBottom>拠点・在庫場所</Typography>
          </Grid>
          <Grid xs={6}>
            <Form method="post">
              <Button type="submit" variant="contained">新規作成</Button>
            </Form>
          </Grid>
        </Grid>
      </Box>
      <div>
        <nav>
          { places.length > 0 ? (
              <ul>
                { places.map((place) => (
                  <li key={place.id}>
                    <NavLink to={`place/${place.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                      }
                    >
                      {place.name}
                      {place.fovorite && <span>★</span>}
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
      <Outlet />
    </div>
  );
};

export default PlacesComponent;
