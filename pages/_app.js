import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../store";
import SiteLayout from "../components/SiteLayout";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.scss";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
