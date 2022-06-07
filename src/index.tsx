import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({
  models: {
    survey: Model,
  },
  seeds(server) {
    server.db.loadData({
      surveys: [
        {
          id: 1,
          gender: 'Male',
          age: 22,
          hasDrivingLicense: true,
          isFirstCar: false,
          driveTrain: 'FWD',
          fuelEmissionWorried: false,
          numberOfCars: 2,
          cars: [
            {
              carNumber: 1,
              carMake: 'BWW',
              carModel: 'Z1'
            },
            {
              carNumber: 2,
              carMake: 'Renault',
              carModel: 'Kadjar'
            }
          ],
          createdAt: new Date()
        },
        {
          id: 2,
          gender: 'Female',
          age: 28,
          hasDrivingLicense: true,
          isFirstCar: false,
          driveTrain: 'RWD',
          fuelEmissionWorried: true,
          numberOfCars: 1,
          cars: [
            {
              carNumber: 1,
              carMake: 'BWW',
              carModel: 'X3'
            }
          ],
          createdAt: new Date()
        }
      ]
    }
    )
  },
  routes() {
    this.namespace = 'api';

    this.get('/surveys', () => {
      return this.schema.all('survey')
    });

    this.post('/surveys', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('survey', data);
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

