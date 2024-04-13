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

export const loader:LoaderFunction = async ({params}) => {
  const fetchTools = async () => {
    try {
      const client = generateClient();
      const toolsData = await client.graphql({ 
        query: queries.listTools,
        variables: {
//          input: {
//            id: toolSearchCondition?.place_id,
//          }
        }
      });

      return  toolsData.data.listTools.items;

    } catch (err) {
      console.error('error fetching Places', err);
    }
  };

  return fetchTools();
}

const ToolSearchResultComponent: React.FC = () => {

  const { toolSearchCondition } = useOutletContext<ToolResultContextType>();

  console.debug('@ToolSearchResult:'+JSON.stringify(toolSearchCondition))
  
  const tools = useLoaderData() as Array<Tool>;

  return (
    <div>
    <h1>Tool List {toolSearchCondition?.tip_type}</h1>
    <div>
    <p>place : { toolSearchCondition?.place_id } </p>

    { tools ? (
    <ul>
      { tools?.map((tool) => (
      <li key={tool.id}>
        {tool.id}
      </li>
      ))}
    </ul>
    ) : (
      <p>
        <i>工具が登録されていません</i>
      </p>
    )
    }

    </div>
    </div>
    );
    };

export default ToolSearchResultComponent;
