import { atom } from "recoil";

export const themeState = atom({
  key: "themeState", 
  default: "dark", 
});

export const collapsedState = atom({
  key: "collapsedState", 
  default: false, 
});

export const viewState = atom({
  key: "viewState", 
  default: "home", 
});
