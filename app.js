import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Auth from './src/pages/auth';
import Dashboard from './src/pages/dashboard';
import './src/style/style.css'
import AuthContext from './src/core/context/auth';
import { Toaster } from 'react-hot-toast';

const App = () => {
const [authenticated, setAuthenticated] = useState({data: null, status: false})
     return  <AuthContext.Provider value={{user: authenticated, set: setAuthenticated}}>
              <Toaster position="top-center" reverseOrder={false}/>
          {authenticated.status? <Dashboard />: <Auth/>}</AuthContext.Provider>; 
}

ReactDOM.render(<App />, document.getElementById('root'))