import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button/Button';

type Props = {
  isOpenMenu: boolean;
  handleScroll: () => void;
  hideMenu: () => void;
};

export const MobileMenu = React.memo(
  ({ isOpenMenu, handleScroll, hideMenu }: Props) => {
    const navigate = useNavigate();
    return (
      <div className={`menu ${isOpenMenu ? 'active' : ''}`}>
        <nav>
          <ul>
            <Li>
              <NavLink
                onClick={hideMenu}
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/games'
              >
                <Button
                  width='163px'
                  text='Все игры'
                  onClick={() => {
                    hideMenu();
                    navigate('/games');
                  }}
                />
              </NavLink>
            </Li>
            <Li>
              <NavLink
                onClick={hideMenu}
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/about-us'
              >
                О нас
              </NavLink>
            </Li>
          </ul>
        </nav>
        <Button
          onClick={handleScroll}
          width='212px'
          text='Связаться с нами'
        />
      </div>
    );
  }
);

const Li = styled.li`
  color: #0b0d22;
  list-style-type: none;

  & a.active {
    border-bottom: 2px solid #ffa000;
  }
`;
