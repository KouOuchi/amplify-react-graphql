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
import {ToolResultContextType} from './tool_search_component'; 

const ToolSearchResultComponent: React.FC = () => {

  const { toolSearchCondition } = useOutletContext<ToolResultContextType>();

  console.debug('@ToolSearchResult:'+JSON.stringify(toolSearchCondition))
  
  return (
    <div>
      <h1>Tool List {toolSearchCondition?.tip_type}</h1>
    </div>
  );
};

export default ToolSearchResultComponent;
