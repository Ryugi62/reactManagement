import React from "react";
import "./App.css";

import Customer from "./components/Customer";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "961222",
    jender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "이순신",
    birthday: "961222",
    jender: "남자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "강감찬",
    birthday: "961222",
    jender: "남자",
    job: "대학생",
  },
];

function App() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">사진</TableCell>
            <TableCell align="center">이름(아이디)</TableCell>
            <TableCell align="center">생년월일</TableCell>
            <TableCell align="center">성별</TableCell>
            <TableCell align="center">직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                jender={c.jender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
