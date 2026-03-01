import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes";
import { SearchProvider } from "./context/SearchContext/searchProvider";
import { SidebarProvider } from "./context/SideBarContext/sidebarProvider";
import { FavoriteProvider } from "./context/FavoriteContext/favoriteProvider";

function App() {
  const routes = createBrowserRouter(ROUTES);
  return (
    <>
      <FavoriteProvider>
        <SidebarProvider>
          <SearchProvider>
            <RouterProvider router={routes} />
          </SearchProvider>
        </SidebarProvider>
      </FavoriteProvider>
    </>
  );
}

export default App;
