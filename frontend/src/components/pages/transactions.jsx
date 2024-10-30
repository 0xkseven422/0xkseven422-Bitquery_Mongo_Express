import React from "react";
import Navbar from "../common/Navbar";
import IntervalForm from "../views/intervalForm";

function Transactions() {

    return (
      <React.Fragment>
        <div>
          <Navbar />
          <IntervalForm/>
        </div>
      </React.Fragment>
    )
}

export default Transactions;