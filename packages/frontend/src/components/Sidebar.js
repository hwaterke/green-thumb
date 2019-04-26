import React from 'react'
import styled from 'styled-components'
import {sizes} from '../constants/media'
import {FaCog, FaLeaf} from 'react-icons/fa'

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

const Item = styled.a`
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
            <Item href="/">
              <FaLeaf />
            </Item>
            <Item href="/settings">
              <FaCog />
            </Item>
          </li>
        </ul>
      </Inside>
    </Container>
  )
}
