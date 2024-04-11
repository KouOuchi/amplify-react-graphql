import { 
  redirect,
  ActionFunction 
} from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { Place } from '../../API';

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@destroy:action');
  if(!params) {
    throw new Error("no param");
  }
  if(!params.contactId) {
    throw new Error("no contact id");
  }

  const id:string = params.contactId as string;

  try {
    const client = generateClient();
    const deleteResult = await client.graphql({
      query: mutations.deletePlace,
      variables: {
        input: {
          id: params.contactId as string,
        }
      }
    });
  } catch (err) {
    console.error('error removing Place', err);
  }

  return redirect('../../places');
};

