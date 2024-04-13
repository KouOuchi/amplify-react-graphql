import { 
  redirect,
  ActionFunction 
} from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { Tool } from '../../API';

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@destroy:action');
  if(!params) {
    throw new Error("no param");
  }
  if(!params.contactId) {
    throw new Error("no contact id");
  }

  const id:string = params.toolId as string;

  try {
    const client = generateClient();
    const deleteResult = await client.graphql({
      query: mutations.deleteTool,
      variables: {
        input: {
          id: params.toolId as string,
        }
      }
    });
  } catch (err) {
    console.error('error removing Place', err);
  }

  return redirect('../tool_add');
};

