import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ROUTES from "./routes"
import { SearchProvider } from "./context/SearchContext/searchProvider";
import { SidebarProvider } from "./context/SideBarContext/sidebarProvider";


function App() {

const routes = createBrowserRouter(ROUTES)
  return (
    <>
     <SidebarProvider>
    <SearchProvider>
    <RouterProvider router={routes}/>
    </SearchProvider>
    </SidebarProvider>
    </>
  )
}

export default App
