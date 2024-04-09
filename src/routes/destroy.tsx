import { 
  redirect,
  ActionFunction 
} from "react-router-dom";
import { deleteContact } from "../contacts";

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@destroy:action');
  if(!params) {
    throw new Error("no param");
  }
  if(!params.contactId) {
    throw new Error("no contact id");
  }

  const id:string = params.contactId as string;

  await deleteContact(id);
  return redirect("../../places");
};

