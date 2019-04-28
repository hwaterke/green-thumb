import React from 'react'
import {Router} from '@reach/router'
import {LoginScreen} from './screens/login/LoginScreen'
import {DashboardScreen} from './DashboardScreen'
import {Layout} from './Layout'
import {SettingsScreen} from './SettingsScreen'
import {FirebaseContextProvider} from './FIrebaseContectProvider'

export const App = () => {
  return (
    <FirebaseContextProvider>
      <Router>
        <LoginScreen path="/login" />
        <Layout path="/">
          <DashboardScreen path="/" />
          <SettingsScreen path="/settings" />
        </Layout>
      </Router>
    </FirebaseContextProvider>
  )
}
