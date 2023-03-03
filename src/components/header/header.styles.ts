import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  height: 80px;
  width: 100vw;
  transition: all 500ms;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 99;
  font-size: 30px;
  color: #ff0d51;
  font-family: 'Ceviche One', cursive;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1 1 70%;
  margin-left: 20px;
  div {
    border: 2px solid currentColor;
    border-radius: 10px;
    text-align: center;
    padding: 5px;
    box-shadow: 1px 1px currentColor;
    cursor: none;
    :hover {
      transform: translateY(-3px);
      box-shadow: 1px 3px currentColor;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  height: 5vh;
  justify-content: space-between;
  flex: 1 1 30%;
  transition: all 1s;
  margin-right: 10px;
  .active {
    border-bottom: 2px solid currentColor;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  cursor: pointer;
  padding: 5px 10px;
`;

export const darkLight = keyframes`
  0%{
    transform: rotateZ(0deg);
  }

  100%{
    transform: rotateZ(180deg);
  }
`;

export const Toggle = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  background: ${(p) => p.theme.colors.text};
  overflow: hidden;
  transition: all 1s;
  div {
    position: absolute;
    transition: all 1s;
    height: 200%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
