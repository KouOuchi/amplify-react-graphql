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



export default function Tools() {
  console.debug('@Tools:');

  return (
    <>
      <div id="sidebar">
        <h1>tools </h1>
      </div>
    </>
  );
}
