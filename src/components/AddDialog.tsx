import * as React from "react";
import styled from "styled-components";
import { Overlay } from "./Overlay";

export const AddDialog = ({
  addCardText,
  setAddCardText,
  onCancelClick,
  onConfirmClick,
}) => {
  return (
    <Overlay>
      <AddDialogWrap>
        <AddMessage>TODOを記入してください</AddMessage>
        <AddInput
          value={addCardText}
          onChange={ev => setAddCardText(ev.currentTarget.value)}
        />
        <AddDialogButtonWrap>
          <AddCancelButton onClick={onCancelClick}>Cancel</AddCancelButton>
          <AddConfirmButton onClick={onConfirmClick}>Confirm</AddConfirmButton>
        </AddDialogButtonWrap>
      </AddDialogWrap>
    </Overlay>
  )
}

const AddDialogWrap = styled.div`
  width: 400px;
  border: solid 1px;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5px 10px;
`

const AddMessage = styled.div`
  text-align: center;
  align-items: center;

`

const AddInput = styled.input.attrs({
  type: 'text'
})`
  border: solid 1px;
  width: 300px;
  height: 30px;
  margin-top: 10px;
`

const AddDialogButtonWrap = styled.div`
  display: flex;
  width: 70%;
  padding: 0 16px 16px;
  justify-content: space-between;
  margin-top: 20px;
`

const AddConfirmButton = styled.button.attrs({
  type: 'button',
})`
  border: solid 1px darkgray;
  border-radius: 4px;
  width: 90px;
  height: 40px;
  background-color: deepskyblue;
  color: white;
`

const AddCancelButton = styled.button.attrs({
  type: 'button'
})`
  border: solid 1px;
  border-radius: 4px;
  width: 90px;
  height: 40px;
  background-color: lightgray;
  color: black;
`
