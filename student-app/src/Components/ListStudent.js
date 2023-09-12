
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
          .get("https://upgraded-space-dollop-9w77qx6p5x7fx45-3000.app.github.dev/students/")
          .then(({ data }) => {
            setStudents(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      const dataTable = () => {
        return students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />;
        })
      }

      return (
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{dataTable()}</tbody>
          </Table>
        </div>
      );
}

export default StudentList