import { createContext, useState, ReactNode } from "react";

interface ISidebarContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
}

const SidebarContext = createContext<ISidebarContext>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};



export default SidebarContext;