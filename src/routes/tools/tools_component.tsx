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

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@action start');
  try {

//    const formData = await request.formData();
//    console.debug('@tools from data:'+JSON.stringify(formData.get("D")));
//    console.debug('@tools from data:'+JSON.stringify(formData.get("Ds")));

    
    return redirect(`place/12345`);
  } finally {
    console.debug('@action end');
  }
};

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
        <Form method="post">
          <select>
            <option key="-" value="-">拠点・在庫場所選択</option>
            {  places?.map(place => (
               <option key={place?.id} value={place?.id}>{place.name}</option>
            ))
            }
          </select>
          <p>D
            <input
              aria-label="Search contacts"
              placeholder="<D>"
              type="search"
              name="D"
            />
          </p>
          <p>Ds
            <input
              aria-label="Search contacts"
              placeholder="<Ds>"
              type="search"
              name="Ds"
            />
          </p>
          <p>L
            <input
              aria-label="Search contacts"
              placeholder="<L>"
              type="search"
              name="L"
            />
          </p>
          <p>L1
            <input
              aria-label="Search contacts"
              placeholder="<L1>"
              type="search"
              name="L1"
            />
          </p>

          ボール<input name="ball" type="checkbox" />&nbsp;ラジアス<input name="radius" type="checkbox" />&nbsp;スクエア<input name="square" type="checkbox" />
          <div>
            <button type="submit" onClick={handleUpdateToolList}>更新</button>
            <NavLink to={`place/999`}>test link</NavLink>

          </div>
        </Form>

        <div>
          {isCaptureLotOpen && <CaptureLotComponent onClose={handleCloseCaptureLot} />}
          <button onClick={handleOpenCaptureLot}>モーダルを開く</button>
          {captureLotResult && <div>モーダルからのデータ: {captureLotResult}</div>}
        </div>
      </div>


      <div id="grid">
        <h1>tools </h1>
        <Outlet />
      </div>
    </>
  );
};

export default ToolsComponent;
