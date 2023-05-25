import  { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const updateMessage = (newMessage) => {
    setShowSidebar(newMessage);
  };

  return (
    <AppContext.Provider value={{ showSidebar, updateMessage }}>
      {children}
    </AppContext.Provider>
  );
}