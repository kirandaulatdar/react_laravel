import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Switch, Redirect, withRouter,BrowserRouter, Route, Routes } from 'react-router-dom';
const Login = lazy(() => import('./Pages/login'));
const ProductPage = lazy(() => import('./Pages/product'));
const Users = lazy(() => import('./Pages/users'));

const Forgot_password = lazy(() => import('./Pages/forgot_password'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/forgot_password" element={<Forgot_password />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
