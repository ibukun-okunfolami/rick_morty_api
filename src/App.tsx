import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";

const App = (props: any): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
};

export default App;
