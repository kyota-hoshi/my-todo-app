import * as React from "react";
import { MainAreaWrap, TodoCardList } from "../styles/components/mainAreaStyle";

interface Props {
  todoCardListComponent: React.ReactNode;
}

export const MainArea: React.FC<Props> = ({
  todoCardListComponent,
}) => {

  return(
    <MainAreaWrap>
      <TodoCardList>
        {todoCardListComponent}
      </TodoCardList>
    </MainAreaWrap>
  )
}
