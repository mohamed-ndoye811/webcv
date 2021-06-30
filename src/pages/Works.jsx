import React from "react";

//---- Component imports
import PageTitle from "../components/PageTitle";
import ComingSoon from "../pages/ComingSoon";

export default function Works(props) {
  return (
    <>
      <PageTitle title="works"></PageTitle>
      <ComingSoon startAnimations={props.startContentAnimations}></ComingSoon>
    </>
  );
}
