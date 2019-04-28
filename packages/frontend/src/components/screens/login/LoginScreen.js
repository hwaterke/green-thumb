import React, {useContext} from 'react'
import {Redirect} from '@reach/router'
import {FirebaseAuthContext} from '../../FIrebaseContectProvider'
import {GoogleButton} from './GoogleButton'
import {FilledScreen} from '../../FilledScreen'

export const LoginScreen = () => {
  const user = useContext(FirebaseAuthContext)

  if (user) {
    return <Redirect to="/" noThrow />
  }

  return (
    <FilledScreen>
      <GoogleButton />
    </FilledScreen>
  )
}
