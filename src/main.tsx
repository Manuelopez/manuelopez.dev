import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from './index.tsx';
import Layout from './layout.tsx';
import DsALgo from './dsAlgo/index.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import DsInfo from './component/dsInfo.tsx';
import { Problem } from './component/problem.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />

          <Route path='/dsAlgo'>
            <Route index element={<DsALgo />} />

            <Route path='/dsAlgo/:ds' element={<DsInfo />} />
            <Route path='/dsAlgo/:ds/p/:pId' element={<Problem />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
