import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 50%;
  padding: 8px;
  margin: 4px 2px 4px 4px;
  background-color: #fff;
  /* background-color: #ee3; */

  .block-large-boss {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #009966;
    padding: 8px 0;
    /* background-color: #f5f5f5; */
    /* background-color: #4ee; */
  }

  .block-large-worker {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #334466;
    padding: 8px 0;
    /* background-color: #f5f5f5; */
    /* background-color: #4ee; */
  }

  .block-small-boss {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: auto;
    width: 85px;
    /* width: auto; */
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #009966;
    margin: 0;
    padding: 8px 0;
    /* background-color: #f5f5f5; */
    /* background-color: #ee2; */
  }

  .block-small-worker {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: auto;
    /* width: 100%; */
    width: 85px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #334466;
    margin: 0;
    padding: 8px 0;
    /* background-color: #f5f5f5; */
    /* background-color: #ee2; */
  }

  .block-segment {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 8px auto;
    /* padding: 8px; */

    /* background-color: #f5f5f5; */
    /* background-color: #ee3; */
  }

  .content-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    margin: 0 0 16px;
    /* background-color: #f5f5f5; */
    /* background-color: #f5f; */
  }

  .hrLine-boss {
    width: 60px;
    border: 1px solid #009966;
    margin: 0;
  }

  .hrLine-worker {
    width: 60px;
    border: 1px solid #334466;
    margin: 0;
  }

  .label {
    font-weight: bold;
    font-size: 14px;
    margin: 0 4px;
    color: #000;
    /* background-color: #4433ee; */
  }

  .label-bold-boss {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 0 10%;
    color: #009966;
    /* background-color: #4433ee; */
  }

  .label-bold-boss2 {
    width: 24px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 0 22px;
    color: #009966;
    /* background-color: #999; */
  }

  .label-bold-worker {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 0 10%;
    color: #334466;
    /* background-color: #4433ee; */
  }

  .label-bold-worker2 {
    width: 24px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 0 22px;
    color: #334466;
    /* background-color: #999; */
  }

  .label-bold-red {
    width: 24px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 0 22px;
    color: #F64C75;
    /* background-color: #999; */
  }

  .label-normal-boss {
    text-align: center;
    font-size: 13px;
    margin: 2px 0;
    color: #009966;
    /* background-color: #4ee; */
  }

  .label-normal-worker {
    text-align: center;
    font-size: 13px;
    margin: 2px 0;
    color: #334466;
    /* background-color: #4ee; */
  }

  .label-small-boss {
    text-align: center;
    font-size: 12px;
    width: 60px;
    /* margin: 1px 12px; */
    margin: 0 4px;
    color: #009966;
    /* background-color: #4ee; */
  }

  .label-small-boss2 {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    width: 60px;
    /* margin: 1px 12px; */
    margin: 0 4px;
    color: #009966;
    /* background-color: #4ee; */
  }

  .label-small-worker {
    text-align: center;
    font-size: 12px;
    width: 60px;
    /* margin: 1px 12px; */
    margin: 0 4px;
    color: #334466;
    /* background-color: #4ee; */
  }

  .label-small-worker2 {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    width: 60px;
    /* margin: 1px 12px; */
    margin: 0 4px;
    color: #334466;
    /* background-color: #4ee; */
  }


  .label-small-red {
    text-align: center;
    font-size: 12px;
    width: 60px;
    /* margin: 1px 12px; */
    margin: 0 4px;
    color: #F64C75;
    /* background-color: #4ee; */
  }

  .label-view {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    width: 100%;
    margin: 0 0 8px;
    /* background-color: #999; */
  }

  .status-circle-boss {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    /* border-width: 0.5px; */
    /* border-color: #000; */
    margin: 0;
    background-color: #009966;
  }

  .status-circle-worker {
    height: 8px;
    width: 8px;
    border-radius: 8px;
    /* border-width: 0.5px; */
    /* border-color: #000; */
    margin: 0;
    background-color: #334466;
  }

  .status-circle-red {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    /* border-width: 0.5px; */
    /* border-color: #000; */
    margin: 0;
    background-color: #F64C75;
  }

  .status-view {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    margin: 0 0 8px;
    /* background-color: #f5f5f5; */
    /* background-color: #f00; */
  }




`;
