import { useContext } from "react";
import SidebarContext from "./sidebarProvider";


const useSidebarContext = () => useContext(SidebarContext);

export default useSidebarContext;
