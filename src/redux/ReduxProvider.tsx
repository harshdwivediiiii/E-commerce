"use client";
import React from "react";
import { Provider } from "react-redux";

import { persistStore } from "redux-persist";
import { store } from "./store";

persistStore(store);

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;