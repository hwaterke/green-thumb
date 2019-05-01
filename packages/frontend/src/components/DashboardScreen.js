import React, {useContext, useEffect, useState} from 'react'
import {FirebaseAuthContext} from './FIrebaseContectProvider'
import {sensorDataRef} from '../constants/firebase'

export const DashboardScreen = () => {
  const user = useContext(FirebaseAuthContext)
  const [temperatures, setTemperature] = useState([])

  useEffect(() => {
    return sensorDataRef
      .orderBy('date', 'desc')
      .limit(10)
      .onSnapshot(querySnapshot => {
        const temps = []
        querySnapshot.forEach(doc => {
          temps.push(doc.data())
        })
        setTemperature(temps)
      })
  }, [])

  return (
    <div>
      <p>Hello {user.displayName}</p>

      <pre>{JSON.stringify(temperatures, null, 2)}</pre>
    </div>
  )
}
