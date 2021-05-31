import { BrowserRouter } from "react-router-dom";

import APP_ROUTES from "./app-routes";
import styles from "./App.module.scss";

import RouteRenderer from "./shared/components/RouteRenderer";

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <RouteRenderer routes={APP_ROUTES} />
      </BrowserRouter>
    </div>
  );
}

export default App;
