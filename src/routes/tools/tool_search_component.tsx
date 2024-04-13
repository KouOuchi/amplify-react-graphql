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
  const formData = await request.formData();
  const place_id = formData.get("place_id");

  try {
    return redirect(`place/${place_id}`);
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

export interface ToolSearchCondition {
  place_id: string;
  tip_type: string;
  D: number;
  R: number;
  Ds: number;
  L: number;
  L1: number;
}

export type ToolResultContextType = { toolSearchCondition: ToolSearchCondition | null };

interface Option {
  value: string;
  label: string;
}

const tip_type_options: Option[] = [
  { value: 'ball', label: 'ボール' },
  { value: 'radius', label: 'ラジアス' },
  { value: 'square', label: 'スクエア' },
];

const ToolSearchComponent: React.FC = () => {
  console.debug('@Tools:');
  const [isCaptureLotOpen, setIsCaptureLot] = useState(false);
  const [captureLotResult, setCaptureLotResult] = useState<string | null>(null);

  const [toolSearchCondition, setToolSearchCondition] = React.useState<ToolSearchCondition>({} as ToolSearchCondition);

  const places = useLoaderData() as Array<Place>;

  const handleOpenCaptureLot = () => {
    setIsCaptureLot(true);
  };

  const handleCloseCaptureLot = (result:string) => {
    setIsCaptureLot(false);
    setCaptureLotResult(result);
 };

  // input handlers
  const handlePlaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    toolSearchCondition.place_id = event.target.value;
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleTipTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    toolSearchCondition.tip_type = event.target.value;
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleRChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.R = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.D = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleDsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.Ds = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.L = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleL1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.L1 = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };

  return (
    <>
      <div id="serch-condition">
        <Form method="post">
          <select name="place_id" value={toolSearchCondition.place_id} onChange={handlePlaceChange}>
            <option key="-" value="">拠点・在庫場所選択</option>
            {  places?.map(place => (
               <option key={place?.id} value={place?.id}>{place.name}</option>
            ))
            }
          </select>
          <p>R
            <input onChange={handleRChange}
              aria-label="Search contacts"
              placeholder="<R>"
              type="search"
              name="R"
            />
          </p>
          <p>D
            <input onChange={handleDChange}
              aria-label="Search contacts"
              placeholder="<D>"
              type="search"
              name="D"
            />
          </p>
          <p>Ds
            <input onChange={handleDsChange}
              aria-label="Search contacts"
              placeholder="<Ds>"
              type="search"
              name="Ds"
            />
          </p>
          <p>L1
            <input onChange={handleL1Change}
              aria-label="Search contacts"
              placeholder="<L1>"
              type="search"
              name="L1"
            />
          </p>

          <select value={toolSearchCondition.tip_type} onChange={handleTipTypeChange}>
            {tip_type_options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          <div>
            <button type="submit">更新</button>
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
        <Outlet context={{toolSearchCondition} satisfies ToolResultContextType} />
      </div>
    </>
  );
};

export default ToolSearchComponent;
