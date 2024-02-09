import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NameCollection } from '../fetch/name-collection';
import { UserEdit } from './user-edit';

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NameCollection />} />
        <Route path="users/:name" element={<UserEdit />} />
      </Routes>
    </HashRouter>
  );
};