import * as React from "react";
import {
  OverlayStyle,
  DialogWrap,
  DialogButtonWrap,
  CancelButton,
  ConfirmButton,
} from "../styles/shared/dialogStyle";
import { AddMessage, AddInput } from "../styles/components/addDialogStyle";

interface Props {
  addCardText: string
  setAddCardText: (value: string) => void
  onCancelClick: () => void
  onConfirmClick: () => void
}

export const AddDialog: React.FC<Props> = ({
  addCardText,
  setAddCardText,
  onCancelClick,
  onConfirmClick,
}) => {
  return (
    <OverlayStyle>
      <DialogWrap>
        <AddMessage>TODOを記入してください</AddMessage>
        <AddInput
          value={addCardText}
          onChange={ev => setAddCardText(ev.currentTarget.value)}
        />
        <DialogButtonWrap>
          <CancelButton onClick={onCancelClick}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirmClick}>Confirm</ConfirmButton>
        </DialogButtonWrap>
      </DialogWrap>
    </OverlayStyle>
  )
}
