import { createBrowserRouter } from "react-router-dom";

import Friends from "./pages/Friends";
import Lobby from "./pages/Lobby";
import RoomDetail from "./pages/RoomDetail";
import RoomList from "./pages/RoomList";
import SeeMore from "./pages/SeeMore";

export default createBrowserRouter([
  { path: "/", element: <Lobby /> }, // lobby
  { path: "/friends", element: <Friends /> }, // freinds
  { path: "/rooms", element: <RoomList /> }, // room list
  { path: "/rooms/:roomId", element: <RoomDetail /> }, // room detail
  { path: "/more", element: <SeeMore /> }, // see more
]);
