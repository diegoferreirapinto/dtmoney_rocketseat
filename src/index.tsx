import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';
import { rootCertificates } from 'tls';


createServer({
  routes() {
    this.namespace = '/api';
    this.get('transactions', () => {
      return [
        {
          id: 'Casa 3',
          title: 'Transfer #',
          amount: 333,
          type: 'deposit',
          category: 'Tech',
          createAt: new Date()
        }
      ]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);