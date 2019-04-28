import React, {useContext} from 'react'
import {FirebaseAuthContext} from './FIrebaseContectProvider'

export const DashboardScreen = () => {
  const user = useContext(FirebaseAuthContext)

  return (
    <div>
      <p>Hello {user.displayName}</p>
    </div>
  )
}
