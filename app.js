import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Auth from './src/pages/auth';
import Dashboard from './src/pages/dashboard';
import './src/style/style.css'
import AuthContext from './src/core/context/auth';

const App = () => {
const [status, setStatus] = useState(false)
     return  <AuthContext.Provider value={setStatus}>{status? <Dashboard />: <Auth/>}</AuthContext.Provider>; 
}

ReactDOM.render(<App />, document.getElementById('root'))