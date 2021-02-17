import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
};

Meta.defaultProps = {
  title: "Cookies for Charity",
};

export default Meta;
