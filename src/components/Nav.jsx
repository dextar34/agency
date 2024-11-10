import React from 'react'
import Container from './layer/Container'
import Pic from './layer/Pic'
import List from './layer/List'
import { Link } from 'react-router-dom'
import cn from '../lib/cn'

const items = ['Home','Services','Portfolio','Pricing','About']

const Nav = () => {
  return (
    <nav className='nav'>
        <Container className={'my-12'}>
            <div className="main flex items-center justify-between">
                <div className="logo">
                    <Pic/>
                </div>
                <div className="menu">
                        <List items={items} className={'flex gap-x-14 text-white'}/>
                </div>
                <div className="contactBtn">
                    <button className={cn('bg-lime-300 w-36 h-14 rounded-3xl font-semibold')}>
                        Contact
                    </button>
                </div>
            </div>
        </Container>

    </nav>
  )
}

export default Nav
