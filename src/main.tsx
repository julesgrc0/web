import { StrictMode, Suspense, lazy } from "react";
import { registerSW } from "virtual:pwa-register";

import ReactDOM from "react-dom/client";
import "./styles/index.scss";

const TransitionRouter = lazy(() => import("./router"));

const updateSW = registerSW({
  onNeedRefresh() {
    localStorage.clear();
    updateSW(true);
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <TransitionRouter />
    </Suspense>
  </StrictMode>
);
