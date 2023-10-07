import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './src/pages/auth';
import Dashboard from './src/pages/dashboard';
import './src/style/style.css'

const App = () => {
const [auth, setAuth] = useState(false)
     return auth? <Dashboard />: <Login/>; 
}

ReactDOM.render(<App />, document.getElementById('root'))