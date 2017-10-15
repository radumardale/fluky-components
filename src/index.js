import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/highlight.js/styles/ocean.css';

import { Provider } from 'mobx-react';

import docStore from './docs/stores/documentationStore';

const Root = (
  <Provider docStore={docStore}>
    <Docs />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();