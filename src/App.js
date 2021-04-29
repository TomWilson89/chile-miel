import { Router } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { history } from "./components/commons/history";
import { persistor, store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
