import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import Teaser from "./components/teaser";
import Grid from "./components/grid";
import Page from "./components/page";
import Feature from "./components/feature";

import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  },
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
