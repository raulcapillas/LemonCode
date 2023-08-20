import React from "react";
import { MyComponentPromiseUnmount } from "./promiseUnmount";
import { MyComponentUseContext, MyContextProvider } from "./useContext";

export const App = () => {
  return (
    <>
      <MyContextProvider>
        <MyComponentUseContext />
      </MyContextProvider>
      <MyComponentPromiseUnmount />
    </>
  );
};
