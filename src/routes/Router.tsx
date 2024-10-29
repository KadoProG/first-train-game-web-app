import { HomePage } from '@/pages/HomePage';
import { PreviewPage } from '@/pages/PreviewPage';
import { SelectPage } from '@/pages/SelectPage';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const MyRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/1" element={<SelectPage />} />
      <Route path="/2" element={<PreviewPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
