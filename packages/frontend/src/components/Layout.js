import React from 'react'
import PropTypes from 'prop-types'
import {Sidebar} from './Sidebar'

export const Layout = ({children}) => (
  <div className="columns is-gapless">
    <Sidebar />
    <div className="column">{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
