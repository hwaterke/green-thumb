import React from 'react'
import {Sidebar} from './Sidebar'

export const App = () => {
  return (
    <div className="columns is-gapless">
      <Sidebar />
      <div className="column">
        <p>Hello</p>
      </div>
    </div>
  )
}
