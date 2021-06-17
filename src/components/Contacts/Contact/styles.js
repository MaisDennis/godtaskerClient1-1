import styled from 'styled-components';

export const Container = styled.div`
  .line-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    /* min-height: 66px; */
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 4px 0;
    margin: 4px 0;
    background-color: #fff;
    /* background: #d13344; */
  }

  .left-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    /* background-color: #F0FFF0; */
  }

  .center-div {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;

    /* background-color: #F0F; */
  }

  .right-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 10%;
    /* background-color: #F0FFF0; */
  }

  .image-logo {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 1px solid #000;
    /* margin: 4px 8px; */
  }

  .worker-label {
    font-weight: bold;
    text-align: left;
    margin: 4px 0;
    color: #18A0FB;
    /* background-color: #F0FF; */
  }

  .name-div {
    display: flex;
    flex-direction: row;
    margin: 4px 0;
    /* background-color: #F33; */
  }

  .short-label {
    font-weight: bold;
    text-align: left;
    margin: 0 4px 0 0;
    /* background-color: #Feee; */
  }

  .bio-label {
    font-size: 13px;
    text-align: left;
    color: #666;
    margin: 4px 0;
    /* background-color: #Fccc; */
  }

`;
