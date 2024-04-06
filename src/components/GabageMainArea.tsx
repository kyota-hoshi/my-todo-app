import * as React from "react";
import { MainArea } from "./MainArea";
import { TodoCard } from "./TodoCard";
import { ConfirmDialog } from "./ConfirmDialog";
import { useCards } from "../hooks/useCards";
import { DialogDescription, TargetCardContent } from "../styles/components/confirmDialogStyle";

const { useState } = React;

export const GabageMainArea = () => {
  const {
    todoCardList, 
    deleteCardPermanently,
    undoSoftDeleteCard,
  } = useCards();

  const [clickDelete, setClickDelete] = useState(false);
  const [undoClick, setUndoClick] = useState(false);
  const [targetCardId, setTargetCardId] = useState('');

  const handleCancelClick = () => {
    setClickDelete(false);
    setUndoClick(false);
    setTargetCardId('');
  };

  const handleConfirmClick = () => {
    if (clickDelete) {
      deleteCardPermanently(targetCardId);
    } else if (undoClick) {
      undoSoftDeleteCard(targetCardId);
    }
    handleCancelClick();
  };

  const GabageCardListComponent = (): React.ReactNode => {
    return (
      <>
        {todoCardList.filter(card => card.deletedAt).map(card => (
            <TodoCard
              key={card.id}
              operateIcon='↩︎'
              todoCard={card}
              handleDeleteCard={() => {
                setClickDelete(true);
                setTargetCardId(card.id);
              }}
              handleOperateCard={() => {
                setUndoClick(true)
                setTargetCardId(card.id);
              }}
            />
          )
        )}
      </>
    )
  }

  const DescriptionComponent = (): React.ReactNode => {
    return (
      <>
        <DialogDescription>
          {`以下のカードをゴミ箱から${clickDelete ? '削除しますか？' : '元に戻しますか？'}`}
        </DialogDescription>
        <TargetCardContent>
          {todoCardList.find(card => card.id === targetCardId)?.content}
        </TargetCardContent>
      </>
    )
  }

  return (
    <>
      <MainArea
        todoCardListComponent={<GabageCardListComponent />}
      />
      {(clickDelete || undoClick) && (
        <ConfirmDialog
          descriptionComponent={<DescriptionComponent />}
          handleCancelClick={handleCancelClick}
          handleConfirmClick={handleConfirmClick}
        />
      )}
    </>
  );
};