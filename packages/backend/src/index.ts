import './env'

import admin from 'firebase-admin'
// @ts-ignore
import sensor from 'node-dht-sensor'

// tslint:disable-next-line:no-console
console.log('Reading sensor data')

// tslint:disable-next-line:no-var-requires
const serviceAccount = require('../serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://green-thumb-a43c6.firebaseio.com',
})

const db = admin.firestore()

sensor.read(22, 23, (err: any, temperature: number, humidity: number) => {
  if (!err) {
    db.collection('sensor-data').add({
      date: admin.firestore.Timestamp.fromDate(new Date()),
      humidity,
      temperature,
    })
  }
})
