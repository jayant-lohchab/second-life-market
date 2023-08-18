import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import ListingsDetailsPage from "./Pages/ListingsDetails";
import ListingsPage from "./Pages/Listings";
import UserProfilePage from "./Pages/UserProfile";
import WatchListPage from "./Pages/WatchList";
import SearchPage from "./Pages/Search";
import CategoriesPage from "./Pages/Categories";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SettingsPage from "./Pages/Settings";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import SellPage from "./Pages/Sell";
import RootPage from "./Pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "listings",
        element: <ListingsPage />,
        children: [{ path: ":itemId", element: <ListingsDetailsPage /> }],
      },
      { path: "sell", element: <SellPage /> },
      { path: ":userId", element: <UserProfilePage /> },
      { path: "watchList", element: <WatchListPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "categories", element: <CategoriesPage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
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
