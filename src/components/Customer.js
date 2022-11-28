import React from "react";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Customer(props) {
  return (
    <TableRow>
      <TableCell align="center">
        <img src={props.image} alt="profile" />
      </TableCell>
      <TableCell align="center">
        {props.name}({props.id})
      </TableCell>
      <TableCell align="center">{props.birthday}</TableCell>
      <TableCell align="center">{props.jender}</TableCell>
      <TableCell align="center">{props.job}</TableCell>
    </TableRow>
  );
}

export default Customer;
