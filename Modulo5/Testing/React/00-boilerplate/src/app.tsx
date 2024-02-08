import * as React from 'react';
import { NameEdit } from './name-edit/name-edit';
import { NameCollection } from './fetch/name-collection';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <h1>05-Testing / 01 React</h1>
      <NameEdit />
      <NameCollection />
    </>
  );
};