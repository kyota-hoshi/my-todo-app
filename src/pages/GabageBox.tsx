import * as React from "react";
import { Link } from "react-router-dom"
import { PageStyle } from "../styles/shared/pageStyle";
import { Header } from "../components/Header";
import { GabageMainArea } from "../components/GabageMainArea";

export const GabageBox = () => {
  return (
    <PageStyle>
      <Header
        title="GabageBox"
        navigate={<Link to="/">TODOへ戻る</Link>}
      />
      <GabageMainArea />
    </PageStyle>
  )
}