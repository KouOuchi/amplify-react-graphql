import { Authenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { Outlet, 
         Link,
         NavLink,
         Form,
         ActionFunction,
         LoaderFunction,
         useLoaderData,
         useNavigation,
         redirect, } from "react-router-dom";

export default function Main() {
  const navigation = useNavigation();
  return (
    <>
      <nav>
        <NavLink to='places'
          className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
          }
        >
          Places
        </NavLink>
        <NavLink to='tools'
          className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
          }
        >
          Tools
        </NavLink>
        <button value="ログアウト" onClick={(e) => { signOut(); }} />
      </nav>
      <div id="detail"
        className={
        navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>

    </>
  );
}
