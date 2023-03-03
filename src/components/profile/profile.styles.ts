import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .skills {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .grid {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-flow: dense;
      /* grid-gap: 10px; */
      text-align: center;
      .skill {
        padding: 20px 0px;
        /* border-radius: 10px; */
        /* box-shadow: inset 0px 0px 10px 1px white; */
        font-size: 0.8rem;
        cursor: pointer;
      }
    }
    .empty {
      background: white;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .about-me {
    flex-basis: 50%;
    position: relative;
    overflow: hidden;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    justify-content: space-between;
    line-height: 28px;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    .information {
      flex: 1 1 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .card {
        position: relative;
        flex-direction: row;
        justify-content: space-evenly;
        blockquote {
          quotes: '“' '”' '‘' '’';
          font-family: Georgia, serif;
          font-size: 18px;
          font-style: italic;
          width: 500px;
          margin: 0.25em 0;
          padding: 0.35em 40px;
          line-height: 1.45;
          position: relative;
        }
        blockquote::before {
          content: open-quote;
          display: block;
          padding-left: 10px;
          font-size: 80px;
          position: absolute;
          left: -20px;
          top: -20px;
          color: #7a7a7a;
        }
        blockquote::after {
          content: close-quote;
          display: block;
          padding-left: 10px;
          font-size: 80px;
          position: absolute;
          right: 50px;
          bottom: -70px;
          color: #7a7a7a;
        }
      }
    }
  }
`;
