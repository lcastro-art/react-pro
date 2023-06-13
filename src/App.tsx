import * as React from "react";
import * as ReactDOM from "react-dom/client";
import logo from '../logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Navigation } from "./routes/Navigation";

function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
