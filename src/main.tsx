import { StrictMode } from "react";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import { worker } from "./mock/browser.ts";
import store from "./store";
import theme from "./themes/index.ts";

worker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode>
  <CssBaseline>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </CssBaseline>
  // </StrictMode>
);
