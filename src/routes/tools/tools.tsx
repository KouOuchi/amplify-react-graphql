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
import React, { useState } from 'react';
import { CaptureLot } from './capture_lot';

export default function Tools() {
  console.debug('@Tools:');
  const [isCaptureLotOpen, setIsCaptureLot] = useState(false);
  const [captureLotResult, setCaptureLotResult] = useState<string | null>(null);
  
  const handleOpenCaptureLot = () => {
    setIsCaptureLot(true);
  };

  const handleCloseCaptureLot = (result:string) => {
    setIsCaptureLot(false);
    setCaptureLotResult(result);
 };

  return (
    <>
      <div id="serch-condition">
        <form id="search-form" role="search">
          <p>R
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          </p>
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
    {isCaptureLotOpen && <CaptureLot onClose={handleCloseCaptureLot} />}
    <button onClick={handleOpenCaptureLot}>モーダルを開く</button>
    {captureLotResult && <div>モーダルからのデータ: {captureLotResult}</div>}
      </div>

    <input type="search" placeholder="lot number" />
    <input type="submit" />

      </div>


      <div id="grid">
        <h1>tools </h1>
        <ul>
        </ul>
      </div>
    </>
  );
}
