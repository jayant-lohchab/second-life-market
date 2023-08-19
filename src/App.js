import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import ListingsDetailsPage from "./Pages/ListingsDetails";
import ListingsPage ,{loader as listingsLoader} from "./Pages/Listings";
import UserProfilePage from "./Pages/UserProfile";
import WatchListPage from "./Pages/WatchList";
import SearchPage from "./Pages/Search";
import CategoriesPage from "./Pages/Categories";
import SettingsPage from "./Pages/Settings";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import SellPage from "./Pages/Sell";
import RootPage from "./Pages/RootPage";
import LoginAndRegister from "./components/LoginAndRegister";
// import ErrorPage from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    // errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "listings",
        element: <ListingsPage />,
        children: [{ path: ":itemId", element: <ListingsDetailsPage /> }],
        loader:listingsLoader
      },
      { path: "sell", element: <SellPage /> },
      { path: ":userId", element: <UserProfilePage /> },
      { path: "watchList", element: <WatchListPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "categories", element: <CategoriesPage /> },
      // { path: "signup", element: <Signup /> },
      { path: "login", element: <LoginAndRegister /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
