import React from 'react'
import {Router} from '@reach/router'
import {LoginScreen} from './LoginScreen'
import {DashboardScreen} from './DashboardScreen'
import {Layout} from './Layout'
import {SettingsScreen} from './SettingsScreen'

export const App = () => {
  return (
    <Router>
      <LoginScreen path="/login" />
      <Layout path="/">
        <DashboardScreen path="/" />
        <SettingsScreen path="/settings" />
      </Layout>
    </Router>
  )
}
