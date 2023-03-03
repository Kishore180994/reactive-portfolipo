import React, { Dispatch, MutableRefObject, useEffect } from 'react';
import { connect } from 'react-redux';
import { firstName, lastName, links, middleName } from '../../util/data';
import { setCursorHover, setRef } from '../../redux/actions';
import { Tag } from '../../styles/styles';
import { HomeContainer, Icon, Solar } from './home.styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import CustomCursor from '../custom-cursor/custom-cursor.component';

interface props {
  homeRef: MutableRefObject<null>;
  profileRef: MutableRefObject<null>;
  setHoverState: (val: boolean) => void;
  setRef: (val: string) => void;
}

const Home: React.FC<props> = ({
  homeRef,
  profileRef,
  setHoverState,
  setRef,
}) => {
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    return () => {};
  }, []);

  const mouseEnter = () => {
    setHoverState(true);
    setRef('home');
  };
  const mouseLeave = () => {
    setHoverState(false);
    setRef('');
  };
  return (
    <div ref={homeRef} style={{ position: 'relative' }}>
      <CustomCursor />
      <HomeContainer>
        <Solar>
          <div className='logo'>
            <div className='circle a'>
              <div className='c'>C</div>
              <div className='c'>K</div>
            </div>
            <div className='circle b'>
              <div className='c'>K</div>
              <div className='d'>D</div>
            </div>
          </div>
        </Solar>
        <div className='name'>
          <span className='first'>
            {firstName.split('').map((c, idx) => (
              <span key={idx}>{c}</span>
            ))}
          </span>
          <span className='middle'>
            {middleName.split('').map((c, idx) => (
              <span key={idx}>{c}</span>
            ))}
          </span>
          <span className='last'>
            {lastName.split('').map((c, idx) => (
              <span key={idx}>{c}</span>
            ))}
          </span>
        </div>
        <div className='role'>
          <Tag className='tag' colors={themeContext.colors}>
            <div className='hole'></div>
            <label>Front-End</label>
          </Tag>
          <Tag className='tag' colors={themeContext.colors}>
            <div className='hole'></div>
            <label>Full-Stack</label>
          </Tag>
          <Tag className='tag' colors={themeContext.colors}>
            <div className='hole'></div>
            <div>Software</div>
          </Tag>
        </div>
        <div className='horizontal'>
          <div className='icons'>
            <Icon
              href={links.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='icon'
              aria-label='Resume'
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}>
              <IoDocumentText />
            </Icon>
            <Icon
              href={links.github}
              target='_blank'
              rel='noopener noreferrer'
              className='icon'
              aria-label='Github'
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}>
              <FaGithub />
            </Icon>
            <Icon
              href={links.linkedIn}
              target='_blank'
              rel='noopener noreferrer'
              className='icon'
              aria-label='LinkedIn'
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}>
              <FaLinkedin />
            </Icon>
            <Icon
              href={links.codesandbox}
              className='icon'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='CodeSandBox'
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}>
              <SiCodesandbox />
            </Icon>
          </div>
        </div>
        <div className='vertical'></div>
        <div className='scroll'></div>
      </HomeContainer>
    </div>
  );
};

const mapStateToDispatch = (dispatch: Dispatch<any>) => ({
  setHoverState: (val: boolean) => dispatch(setCursorHover(val)),
  setRef: (val: string) => dispatch(setRef(val)),
});

export default connect(null, mapStateToDispatch)(Home);
