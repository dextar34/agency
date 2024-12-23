import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Container from './layer/Container';
import Pic from './layer/Pic';
import List from './layer/List';
import cn from '../lib/cn';
import logo from "/public/logo.png"

const items = ['Home', 'Services', 'About'];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <Container className={'my-12  md:mx-auto'}>
        <div
          className={cn(
            'main flex justify-between mx-4',
            'md:flex-row md:items-center md:gap-x-20 '
          )}
        >
          <div className="logo flex items-center gap-2">
            <Pic className={'w-24'}  src={logo}/>
          </div>
          <div
            className={cn(
              'flex flex-col items-center gap-2 ',
              'md:flex-row md:items-center md:justify-between md:gap-x-10 md:w-full'
            )}
          >
            <div className="menu md:hidden">
              {/* Mobile Menu Button */}
              <button
                className="text-white text-2xl"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <FaBars />
              </button>
              {/* Dropdown Menu */}
              {menuOpen && (
                <div
                  className={cn(
                    'absolute top-20 right-4 bg-gray-800 p-4 rounded-lg shadow-md z-10'
                  )}
                >
                  <List
                    items={items}
                    className="flex flex-col gap-y-4 text-gray-300 text-lg"
                    inputs="hover:underline transition-all duration-100"
                  />
                </div>
              )}
            </div>
            <div
              className={cn(
                'menu  hidden ',
                'md:gap-x-14 md:flex md:flex-row md:w-full md:justify-center'
              )}
            >
              {/* Desktop Menu */}
              <List
                items={items}
                className="flex flex-col md:flex-row gap-6 text-gray-300 text-xl"
                inputs="hover:underline transition-all duration-100"
              />
            </div>
            <div className="contactBtn hidden md:block">
              <button
                className={cn(
                  'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-36 h-14 rounded-3xl font-semibold',
                  'hover:bg-gradient-to-r hover:from-transparent hover:to-transparent border-2 border-purple-500',
                  'hover:border-2 hover:border-purple-500 hover:text-white transition-all duration-100'
                )}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
