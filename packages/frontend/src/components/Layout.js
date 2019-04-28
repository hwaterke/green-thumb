import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Sidebar} from './Sidebar'
import {Redirect} from '@reach/router'
import {FirebaseAuthContext} from './FIrebaseContectProvider'

export const Layout = ({children}) => {
  const user = useContext(FirebaseAuthContext)

  if (!user) {
    return <Redirect to="/login" noThrow />
  }

  return (
    <div className="columns is-gapless">
      <Sidebar />
      <div className="column">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
