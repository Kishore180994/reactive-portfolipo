import React, {
  Dispatch,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MdDarkMode } from 'react-icons/md';
import { GiUbisoftSun } from 'react-icons/gi';
import { connect } from 'react-redux';
import { toggleMode } from '../../redux/actions';
import {
  HeaderContainer,
  Item,
  ItemContainer,
  LogoContainer,
  Toggle,
} from './header.styles';

interface props {
  homeRef: MutableRefObject<null>;
  profileRef: MutableRefObject<null>;
  workRef: MutableRefObject<null>;
  toggleTheme: () => void;
}

const Header: React.FC<props> = ({
  homeRef,
  profileRef,
  workRef,
  toggleTheme,
}) => {
  const [scrollPos, setSCrollPos] = useState(0);
  const [homeCN, sethomeCN] = useState('item');
  const [profileCN, setProfileCN] = useState('item');
  const [workCN, setWorkCN] = useState('item');

  const toggleRef: React.LegacyRef<any> = useRef();

  const scrollRef = useRef(() => {});
  useEffect(() => {
    window.addEventListener('scroll', scrollRef.current);
    return () => {
      window.removeEventListener('scroll', scrollRef.current);
    };
  }, []);

  useEffect(() => {
    if (scrollPos < 33) {
      sethomeCN('item active');
      setProfileCN('item');
      setWorkCN('item');
    } else if (scrollPos > 33 && scrollPos < 66) {
      sethomeCN('item');
      setProfileCN('item active');
      setWorkCN('item');
    } else {
      sethomeCN('item');
      setProfileCN('item');
      setWorkCN('item active');
    }
  }, [scrollPos]);

  scrollRef.current = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setSCrollPos(scrolled * 100);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <div>K</div>
      </LogoContainer>
      <ItemContainer>
        <Item
          className={homeCN}
          aria-label='Home'
          onClick={() => {
            let h_ref: any = homeRef.current;
            h_ref.scrollIntoView({ behavior: 'smooth' });
          }}>
          <div className='icon' aria-label='Home'>
            Home
          </div>
        </Item>
        <Item
          className={profileCN}
          aria-label='Profile'
          onClick={() => {
            let h_ref: any = profileRef.current;
            h_ref.scrollIntoView({ behavior: 'smooth' });
          }}>
          <div className='icon' aria-label='Profile'>
            Profile
          </div>
        </Item>
        <Item
          className={workCN}
          aria-label='Work'
          onClick={() => {
            let h_ref: any = workRef.current;
            h_ref.scrollIntoView({ behavior: 'smooth' });
          }}>
          <div className='icon' aria-label='Work'>
            Work
          </div>
        </Item>
        <Item>
          <Toggle
            onClick={() => {
              toggleTheme();
              let refCur: HTMLDivElement = toggleRef.current;
              if (refCur.style.transform === '')
                refCur.style.transform = 'rotateZ(180deg)';
              else refCur.style.transform = '';
            }}>
            <div ref={toggleRef}>
              <GiUbisoftSun />
              <MdDarkMode
                style={{ transform: 'rotateY(180deg) rotateX(180deg)' }}
              />
            </div>
          </Toggle>
        </Item>
      </ItemContainer>
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  toggleTheme: () => dispatch(toggleMode()),
});

export default connect(null, mapDispatchToProps)(Header);
