import styled from 'styled-components';

export const Container = styled.div`
  .line-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
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
    align-items: center;
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

  .worker-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 4px 8px;
    /* background-color: #4433ee; */
  }

  .last-time-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 4px 8px;
    /* background-color: #4ee; */
  }

  .worker-label {
    font-size: 14px;
    font-weight: bold;
  }

  .last-time-label {
    font-size: 10px;
  }

  .last-message-div {
    width: 100%;
    border-radius: 8px;
    padding: 8px 16px;
    margin: 4px 8px;
    background-image: linear-gradient(to bottom, #3e3, #18A0FB);
  }

  .last-message-label {
    font-size: 14px;
  }
`;
