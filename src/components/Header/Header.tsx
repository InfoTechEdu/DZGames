import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navigate = useNavigate();

  const hideMenu = () => setIsOpenMenu(false);

  const handleScroll = useCallback(() => {
    const contactBlock = document.getElementById('contact-main');

    if (contactBlock) {
      contactBlock?.scrollIntoView({ behavior: 'smooth' });
      if (isOpenMenu) {
        hideMenu()
      }
      return;
    } else {
      navigate('/');

      setTimeout(() => {
        const contactBlock = document.getElementById('contact-main');
        contactBlock?.scrollIntoView({ behavior: 'smooth' });
        if (isOpenMenu) {
          hideMenu()
        }
      }, 300);
    }
  }, [isOpenMenu, navigate])

  return (
    <HeaderStyle>
      <Container>
        <Wrapper>
          <Logo>
            <NavLink to='/'>DZGames</NavLink>
          </Logo>
          <Line></Line>
          <Nav>
            <Li>
              <Button
                width='163px'
                text='Все игры'
                onClick={() => navigate('/games')}
              />
            </Li>
            <Li>
              <NavLink to='/about-us'>О нас</NavLink>
            </Li>
            <Li>
              <NavLink to='/'>Лидеры</NavLink>
            </Li>
          </Nav>
        </Wrapper>
        <ButtonWrapper onClick={handleScroll}>
          <Button width='100%' text='Связаться с нами' />
        </ButtonWrapper>
        <div
          className={`menu-btn ${isOpenMenu ? 'active' : ''}`}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>
      <MobileMenu
        hideMenu={hideMenu}
        handleScroll={handleScroll}
        isOpenMenu={isOpenMenu}
      />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header({
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '40px',

  position: 'absolute',
  zIndex: '200',
  marginLeft: '-20px',
  paddingLeft: '20px',
  paddingRight: '20px',

  '@media(max-width: 820px)': {
    position: 'fixed',
    height: '52px',
    paddingLeft: '0',
    paddingRight: '0',
  },
});

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1224px',
  zIndex: 500,
  backgroundColor: '#ffffff',
  height: '100%',

  '@media(max-width: 820px)': {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
});

export const Logo = styled.div({
  color: '#000000',
  fontWeight: '700',
  fontSize: '32px',
  fontFamily: 'Jost',
});

const Line = styled.div({
  borderRight: '2px solid #000000',
  height: '24px',
  '@media(max-width: 820px)': {
    display: 'none',
  },
});

const Nav = styled.ul({
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '0',
  gap: '24px',

  '@media(max-width: 820px)': {
    display: 'none',
  },
});

const Li = styled.li`
  color: #0b0d22;
  list-style-type: none;

  & a.active {
    border-bottom: 2px solid #ffa000;
  }
`;

const ButtonWrapper = styled.div({
  width: 212,
  '@media(max-width: 820px)': {
    display: 'none',
  },
});
