import React from 'react';
import { render } from 'react-dom';
import App from './app';
import ConnectedApp from './app.connected';
import { configureStore } from './redux';
import { Provider } from 'react-redux';

render(<App />, document.getElementById('root'));
// render(
//   <Provider store={configureStore()}>
//     <ConnectedApp />
//   </Provider>,
//   document.getElementById('root')
// );
