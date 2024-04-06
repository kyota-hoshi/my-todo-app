import * as React from 'react';
import { CancelButton, ConfirmButton, DialogButtonWrap, DialogWrap, OverlayStyle } from '../styles/shared/dialogStyle';

interface Props {
  descriptionComponent: React.ReactNode;
  handleCancelClick: () => void;
  handleConfirmClick: () => void;
}

export const ConfirmDialog: React.FC<Props> = ({
  descriptionComponent,
  handleCancelClick,
  handleConfirmClick,
}) => {
  return (
    <OverlayStyle>
      <DialogWrap>
        {descriptionComponent}
        <DialogButtonWrap>
          <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
          <ConfirmButton onClick={handleConfirmClick}>Confirm</ConfirmButton>
        </DialogButtonWrap>
      </DialogWrap>
    </OverlayStyle>
  );
}