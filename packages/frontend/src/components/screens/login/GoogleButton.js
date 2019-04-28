import React from 'react'
import {firebaseInstance} from '../../../constants/firebase'
import styled from 'styled-components'

const provider = new firebaseInstance.auth.GoogleAuthProvider()

const Button = styled.button.attrs({className: 'button'})`
  color: rgb(65, 104, 49);
`

export const GoogleButton = () => {
  const onClick = () => firebaseInstance.auth().signInWithPopup(provider)

  return <Button onClick={onClick}>Login</Button>
}
