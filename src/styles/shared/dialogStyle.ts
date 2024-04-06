import styled from "styled-components";

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DialogWrap = styled.div`
  width: 400px;
  border: solid 1px;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5px 10px;
`

export const DialogButtonWrap = styled.div`
  display: flex;
  width: 70%;
  padding: 0 16px 16px;
  justify-content: space-between;
  margin-top: 20px;
`

export const ConfirmButton = styled.button.attrs({
  type: 'button',
})`
  border: solid 1px darkgray;
  border-radius: 4px;
  width: 90px;
  height: 40px;
  background-color: deepskyblue;
  color: white;
`

export const CancelButton = styled.button.attrs({
  type: 'button'
})`
  border: solid 1px;
  border-radius: 4px;
  width: 90px;
  height: 40px;
  background-color: lightgray;
  color: black;
`
