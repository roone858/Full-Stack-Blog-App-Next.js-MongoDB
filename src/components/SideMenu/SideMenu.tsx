import React from "react";
import MostPopular from "../MostPopular/MostPopular";
import SideCategories from "../SideCategories/SideCategories";
import EditorsPick from "../EditorsPick/EditorsPick";

export const SideMenu = () => {
  return (
    <div>
      <MostPopular />
      <SideCategories />
      <EditorsPick />
    </div>
  );
};
