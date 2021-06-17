import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 50%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  border-radius: 8px;
  margin: 4px 2px 4px 4px;
  padding: 8px;
  background-color: #fff;
  /* background-color: #ee3; */

  .list-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    background: #4433ee;
  }
  .list-header-title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* margin: 8px; */
    /* background-color: #4ee; */
  }

  .list-header-strong {
    width: auto;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    overflow: hidden;
    margin: 8px;
    color: #000;
    /* background-color: #9d9eb4; */
  }

  .sub-menu-div {
    display: flex;
    flex-direction: row;
    align-items: center;width: 100%;
    margin: 8px 0 4px;
    background-color: #999;
  }

  .list-header-button-ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    width: 100%;
    padding: 0;
    /* background-color: #9d9e; */
  }
  .list-header-button-selected {
    width: 120px;
    font-size: 12px;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    padding: 4px 8px;
    margin: 0 auto;
    color: #fff;
    background-color: #000;
  }

  .list-header-button {
    width: 120px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid #000;
    border-radius: 16px;
    padding: 4px 8px;
    margin: 0 auto;
    color: #000;
    background-color: #fff;
  }

  .list-header-div {
    display: flex;
    width: 100%;
    margin: 4px 0 8px;
    background: #a0daa9;
  }

  .header-select {
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 0 8px;
    background-color: #fff;
  }

  .searchbar-div {
    width: 100%;
    margin-left: 8px;
    padding: 0;
    background: #a0d3;
  }

  .title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* padding: 4px 0; */
    margin: 4px 0;
    border-radius: 4px;
    border-bottom: 1px solid #ccc;
    /* background-color: #fff; */
    /* background-color: #b86d29; */
  }

  .title-strong {
    width: 220px;
    max-width: 220px;
    text-align: center;
    cursor: pointer;
    /* background: #ffc87c; */
  }

  .worker-strong {
    width: 330px;
    max-width: 330px;
    text-align: center;
    /* background: #ffc87c; */
  }

  .short-tag {
    width: 110px;
    text-align: center;
    /* background-color: #fff; */
  }

  .short-tag.last {
    margin-right: 4px;
  }

  .bell-tag {
    padding: auto;
    width: 48px;
    text-align: center;
    /* background-color: #ff4; */
  }

  .bell-tag.last {
    padding: auto;
    width: 48px;
    margin-right: 4px;
    /* background-color: #ff4; */
  }

  .others-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 110px;
    max-width: 110px;
    /* background-color: #4433ee; */
  }
  .others-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .others-menu-div {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 24px 0;
      /* right: 36px; */
      height: auto;
      width: auto;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      /* opacity: .8; */
    }
  .others-drop-label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px;
    margin: 8px;
    /* background-color: #4433ee; */

  }

  .others-button {
    border: none;
    background: none;
    color: #4433ee;
    /* background-color: #F00; */
  }

  .item-list {
    /* min-height: 35vh; */
    /* max-height: 45vh; */
    height: 100%;
    /* margin-bottom: 4px; */
    border-radius: 4px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc;
    }
    /* background-color: #e3e; */
  }

  @media (max-width: 1400px) {
    .list-header-strong {
      font-size: .8rem;
    }

    .task-button {
      width: 72px;
      font-size: .8rem;
      padding: 4px 0;
      /* background-color: #f00; */
    }

    .title-bar {
      height: auto;
      width: auto;
      margin: 0;
    }

    .title-strong {
      width: 80px;
      max-width: 220px;
      font-size: .8rem;
      text-align: center;
      /* margin: auto 0; */
      /* background: #ffc87c; */
    }

    .worker-strong {
      width: 80px;
      font-size: .8rem;
      /* background: #ffc87c; */
    }

    .short-tag {
      width: 72px;
      font-size: .8rem;
      text-align: center;
      /* margin: auto 0; */
      /* background-color: #fff; */
    }

    .others-label {
      width: 72px;
      font-size: .8rem;
    }

    .bell-tag {
      font-size: .8rem;
      padding: auto;
      width: 24px;
      text-align: center;
      /* margin: auto 0; */
      /* background-color: #ff4; */
    }

    .bell-tag.last {
      /* padding: auto; */
      width: 24px;
      /* margin: auto 0;
      margin-right: 12px; */
      /* background-color: #ff4; */
    }
  }

  @media (max-width: 620px) {
    .task-button {
      width: 72px;
      /* background-color: #f00; */
    }

    .list-header-strong {
      font-size: .8rem;
    }

    .list-header-button {
      font-size: .6rem;
      /* background-color: #F00; */
    }

    .title-bar {
      height: auto;
      width: auto;
      margin: 0;
    }

    .title-strong {
      width: 60px;
      font-size: .6rem;
      text-align: center;
      /* background: #ffc87c; */
    }

    .worker-strong {
      width: 60px;
      font-size: .6rem;
      /* background: #ffc87c; */
    }

    .short-tag {
      width: 48px;
      font-size: .6rem;
      text-align: center;
      /* background-color: #fff; */
    }

    .others-label {
      width: 48px;
      font-size: .6rem;
    }

    .bell-tag {
      padding: auto;
      width: 18px;
      text-align: center;
      /* background-color: #ff4; */
    }

    .bell-tag.last {
      /* padding: auto; */
      width: 18px;
      /* margin: auto 0;
      margin-right: 12px; */
      /* background-color: #ff4; */
    }
  }

`;
