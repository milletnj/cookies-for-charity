import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import "antd/dist/antd.css";
import { useStore } from "../store";
import { getAllProducts } from "../actions";
import SiteLayout from "../components/SiteLayout";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  store.dispatch(getAllProducts());

  return (
    <Provider store={store}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Provider>
  );
}

export default MyApp;
