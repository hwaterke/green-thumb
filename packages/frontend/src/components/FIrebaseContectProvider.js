import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {firebaseInstance} from '../constants/firebase'
import {FilledScreen} from './FilledScreen'

export const FirebaseAuthContext = React.createContext(null)

export const FirebaseContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line import/namespace
    return firebaseInstance.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
  }, [])

  return (
    <FirebaseAuthContext.Provider value={user}>
      {loading ? <FilledScreen>Loading</FilledScreen> : children}
    </FirebaseAuthContext.Provider>
  )
}

FirebaseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
