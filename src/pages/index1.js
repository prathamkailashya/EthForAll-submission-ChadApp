import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import { Filter, Friend } from "./index";

const ChadApp = () => {
  return (
    <div>
      <Filter />
      <Friend />
    </div>
  );
};

export default ChadApp;
