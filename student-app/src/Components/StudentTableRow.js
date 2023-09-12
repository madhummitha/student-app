
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
    const {_id, name, email, rollno} = props.obj;

    const DeleteStudent = () => {
        axios
          .delete(
    `https://upgraded-space-dollop-9w77qx6p5x7fx45-3000.app.github.dev/delete-student/${_id}`)
          .then((res) => {
            if (res.status === 200) {
              alert("Student successfully deleted");
              props.onDelete(_id);
            } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
      };

      return (
        <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <Link className="edit-link" 
          to={`/edit-student/${_id}`}>
          Edit
        </Link>
        <Button onClick={DeleteStudent} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
      )
    }

export default StudentTableRow;