import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './src/pages/login';
import Dashboard from './src/pages/dashboard';

const App = () => {
const [auth, setAuth] = useState(false)
     return auth? <Login/>: <Dashboard />; 
}

ReactDOM.render(<App />, document.getElementById('root'))