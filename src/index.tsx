import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';


createServer({
  models: {

    transaction: Model,

  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Free web developer',
          type: 'deposit',
          category: 'Tech',
          amount: 500,
          createdAt: new Date('2022-04-05 19:27:00'),
        },
        {
          id: 2,
          title: 'Support IT',
          type: 'deposit',
          category: 'Tech',
          amount: 200,
          createdAt: new Date('2022-04-07 19:27:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = '/api';
    this.get('transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })


  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);