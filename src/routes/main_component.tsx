import React, { useEffect, useState } from 'react';
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

const MainComponent: React.FC = () => {
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
        <NavLink to='tool_search'
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
        <a href="." onClick={(e) => { signOut(); }}>ログアウト</a>
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
};

export default MainComponent;
