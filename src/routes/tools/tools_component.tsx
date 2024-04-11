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
         redirect, } from "react-router-dom";
import { CaptureLotComponent } from './capture_lot_component';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Place, Tool } from '../../API';

export const loader:LoaderFunction = async ({params}) => {
  const fetchPlaces = async () => {
    try {
      const client = generateClient();
      const placesData = await client.graphql({ query: queries.listPlaces });
      return placesData.data.listPlaces.items as Array<Place>;

    } catch (err) {
      console.error('error fetching Places', err);
    }
  };

  return fetchPlaces();
};

const ToolsComponent: React.FC = () => {
  console.debug('@Tools:');
  const [isCaptureLotOpen, setIsCaptureLot] = useState(false);
  const [captureLotResult, setCaptureLotResult] = useState<string | null>(null);
  const places = useLoaderData() as Array<Place>;

  const handleOpenCaptureLot = () => {
    setIsCaptureLot(true);
  };

  const handleCloseCaptureLot = (result:string) => {
    setIsCaptureLot(false);
    setCaptureLotResult(result);
 };

  const handleUpdateToolList = () => {
    ;;
  };

  return (
    <>
      <div id="serch-condition">
        <form id="search-form" role="search">
          <select>
            <option key="-" value="-">拠点・在庫場所選択</option>
            {  places?.map(place => (
               <option key={place?.id} value={place?.id}>{place.name}</option>
            ))
            }
          </select>
          <p>D
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          </p>
          <p>Ds
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          </p>
          <p>L
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          </p>
          <p>L1
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          </p>
          ボール<input type="checkbox" />&nbsp;ラジアス<input type="checkbox" />&nbsp;スクエア<input type="checkbox" />
        </form>

        <div>
          {isCaptureLotOpen && <CaptureLotComponent onClose={handleCloseCaptureLot} />}
          <button onClick={handleOpenCaptureLot}>モーダルを開く</button>
          {captureLotResult && <div>モーダルからのデータ: {captureLotResult}</div>}
        </div>
        <div>
          <button onClick={handleUpdateToolList}>更新</button>
        </div>
      </div>


      <div id="grid">
        <h1>tools </h1>
        <ul>
          
        </ul>
      </div>
    </>
  );
};

export default ToolsComponent;
