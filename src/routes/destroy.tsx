import { 
  redirect,
  ActionFunction 
} from "react-router-dom";
import { deleteContact } from "../contacts";

export const action:ActionFunction = async ({ request, params }) => {
  if(!params) {
    throw new Error("エラー1");
  }
  if(!params.contactId) {
    throw new Error("エラー2");
  }

  const id:string = params.contactId as string;

  await deleteContact(id);
  return redirect("/");
};

