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
         redirect, 
         useOutletContext,
} from "react-router-dom";
import { CaptureLotComponent } from './capture_lot_component';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Place, Tool } from '../../API';


export const loader:LoaderFunction = async ({request, params}) => {
  console.debug('@loader start');
  try {



    //    const formData = await request.formData();
    console.debug('@tools from data:'+JSON.stringify(params));
    //    console.debug('@tools from data:'+JSON.stringify(formData.get("Ds")));
    return '';
  } finally {
    console.debug('@loader end');
  }
};

const ToolListComponent: React.FC = () => {
  const selectedPlace = useOutletContext();
  console.debug('@ToolList:'+selectedPlace);


  return (
    <div id="place">
      <h1>Tool List</h1>
    </div>
  );
};

export default ToolListComponent;
