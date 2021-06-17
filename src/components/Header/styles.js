import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #000;
  /* background-color: #4433ee; */

  .header-wrapper {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: space-between; */
    height: 8vh;
    width: 100%;
    margin: 0 auto;
    /* background-color: #5edc1f; */
  }

  .image-logo {
    /* height: 48px; */
    /* width: 48px; */
    height: 32px;
    width: auto;
    margin: 0 16px;
    /* border: 1px solid #fff; */
    /* background: #4433ee; */
  }

  .header-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 0;
    /* background-color: #5edc; */
  }
  .header-menu-item {
    display: inline;

    margin: 0 8px;
      /* background: #ff3; */
  }

  .new-task-button {
    height: 36px;
    width: 108px;
    font-size: 14px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 4px;
    transition: background 0.2s;
    color: #fff;
    background-color: #18A0FB;
    margin-right: 8px;
    &:hover {
      background-color: ${darken(0.2, '#18A0FB')};
    }
  }

  .header-button {
    border: none;
    background: none;
  }

  .header-label-selected {
    font-weight: bold;
    color: #666;
  }

  .header-label {
    font-weight: bold;
    color: #fff;
    &:hover {
      color: ${darken(0.2, '#fff')};
    }
  }

  .header-aside {
    display: flex;
    /* justify-content: space-between; */
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    /* background: #5edc; */
  }

  .settings-div {
    margin: 0 16px;
  }

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 16px;
    cursor: pointer;
    /* background: #f00; */
  }

  .profile-strong {
    font-size: 16px;
    font-style: bold;
    margin: 8px;
    color: #fff;
  }

  .drop-down-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #f00; */
  }

  .drop-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 228px;
    border-radius: 8px;
    margin: 52px 0;
    padding: 4px;
    background-color: #000;
  }

  .drop-menu-label {
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
    color: #18A0FB;
    /* transition: color 0.2s; */
    &:hover {
      color: ${darken(0.2, '#ddd')};
    }
  }

  .drop-menu-button {
    cursor: pointer;
    border: none;
    margin: 8px 0;
    background-color: #000;
    /* background-color: #F64C75; */
  }

  .image-background-div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #ddd;
  }

  .image-user {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #F5F5F5;
  }

  @media (max-width: 1400px) {
    width: 90%;
    height: 15vh;
  }

  @media (max-width: 620px) {
    width: 98%;
    margin: 0 auto;
    /* background-color: #f5f5f5; */

    .image-logo {
      display: none;
      /* background: #5edc1f; */
    }

    .header-menu-item {
      margin: 0 6px;
    }
  }
`;
