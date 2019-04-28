import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(211, 231, 207);
`

export const FilledScreen = ({children}) => <Container>{children}</Container>

FilledScreen.propTypes = {
  children: PropTypes.node.isRequired,
}
