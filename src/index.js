import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import "react-md/dist/react-md.blue-amber.min.css"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
