// PageStateContext.js
import React, { createContext, useContext, useState } from 'react';

const PageStateContext = createContext();

export function usePageState() {
  return useContext(PageStateContext);
}

export function PageStateProvider({ children }) {
  const [apiVal, setApiVal] = useState(0);

  return (
    <PageStateContext.Provider value={{ apiVal, setApiVal }}>
      {children}
    </PageStateContext.Provider>
  );
}
