import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'react-select/dist/react-select.css';

const SOMStart = () => (
  <MuiThemeProvider>
  	<App />
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(<SOMStart />, document.getElementById('root'));
registerServiceWorker();
