import React, { useEffect, useState } from 'react';
import { useRouteError } from 'react-router-dom';

interface RouteError {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
}

const ErrorComponent:React.FC = () => {
  const error = useRouteError() as RouteError;
  const str = error ? JSON.stringify(error) : ".";
  console.log(str);

  return (
    <div id="error-page">
      <h1>エラーが発生しました</h1>
      <p>お手数をかけますが、管理者までお問い合わせください。</p>
      <p>{str}</p>
    </div>
  );
};

export default ErrorComponent;
