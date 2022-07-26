import {
  faArrowUp,
  faBars,
  faCake,
  faCoffee,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon } from './Icon'

export const App = () => {
  return (
    <>
      <h1>añadir iconos de FA en react</h1>
      <Icon css='icon' icon={faCake} />
      <Icon css='icon' icon={faCoffee} />
      <Icon css='icon' icon={faPhone} />
      <Icon css='icon' icon={faBars} />
      <Icon css='icon' icon={faArrowUp} />
    </>
  )
}
