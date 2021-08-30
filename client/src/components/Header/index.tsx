import React from 'react'

import { RiFileEditFill } from 'react-icons/ri'
import { GrRestaurant } from 'react-icons/gr'
import { FaUserTie } from 'react-icons/fa'

import { Container, Title, Menu, MenuItem, MenuIcon } from './styles'
import { useHistory, useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'

const menuData = [
  {
    path: '/',
    icon: RiFileEditFill,
    title: 'Realizar novo pedido',
    name: 'Pedido'
  },
  {
    path: '/kitchen',
    icon: GrRestaurant,
    title: 'Listar de pedidos',
    name: 'Cozinha'
  },
  {
    path: '/waiter',
    icon: FaUserTie,
    title: 'Retirar pedidos',
    name: 'Retirar pedidos'
  }
]

const Header: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const theme = useTheme()

  const navigateToPage = (path: string) => {
    history.push(path)
  }
  return (
    <Container>
      <Title>Devs Rest</Title>
      <Menu>
        {menuData.map((item, i) => (
          <MenuItem
            key={i}
            title={item.title}
            onClick={() => navigateToPage(item.path)}
          >
            <MenuIcon>
              <item.icon
                size={30}
                color={
                  location.pathname === item.path
                    ? theme.colors.activeIcon
                    : theme.colors.primary
                }
              />
            </MenuIcon>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  )
}

export { Header }
