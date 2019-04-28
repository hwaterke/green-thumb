import React from 'react'
import styled from 'styled-components'
import {sizes} from '../constants/media'
import {FaCog, FaLeaf, FaSignOutAlt} from 'react-icons/fa'
import {Link} from '@reach/router'
import {firebaseInstance} from '../constants/firebase'

const Container = styled.div.attrs({className: 'column'})`
  flex-grow: 0;
  flex-basis: content;
  background-color: rgb(190, 215, 194);

  @media (min-width: ${sizes.tablet}px) {
    min-height: 100vh;
  }
`

const Inside = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem 0;
`

const Item = styled(Link)`
  color: rgb(90, 120, 90);
  display: flex;
  align-items: center;
  padding: 1rem;

  :hover {
    background-color: rgb(163, 180, 141);
  }
`

const ButtonItem = styled.button`
  font-size: 1rem;
  border: none;
  background-color: transparent;

  color: rgb(90, 120, 90);
  display: flex;
  align-items: center;
  padding: 1rem;

  :hover {
    background-color: rgb(163, 180, 141);
  }
`

export const Sidebar = () => {
  return (
    <Container>
      <Inside>
        <ul>
          <li>
            <Item to="/">
              <FaLeaf />
            </Item>
            <Item to="/settings">
              <FaCog />
            </Item>

            <ButtonItem
              onClick={() => {
                firebaseInstance.auth().signOut()
              }}
            >
              <FaSignOutAlt />
            </ButtonItem>
          </li>
        </ul>
      </Inside>
    </Container>
  )
}
