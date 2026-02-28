import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ROUTES from "./routes"
import { SearchProvider } from "./context/SearchContext/searchProvider";


function App() {

const routes = createBrowserRouter(ROUTES)
  return (
    <>
    <SearchProvider>
    <RouterProvider router={routes}/>
    </SearchProvider>
    </>
  )
}

export default App
