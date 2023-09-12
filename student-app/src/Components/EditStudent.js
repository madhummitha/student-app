import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = (props) => {
    const [formValues, setFormValues] = useState({name: '', email: '', rollno: '' 
    });

    const onSubmit = (studentObject) => {
        axios.put(`https://upgraded-space-dollop-9w77qx6p5x7fx45-3000.app.github.dev/update-student/${props.match.params.id}`,
      studentObject)
      .then((res) => {
        if (res.status === 200) {
            alert("Student updated successfully");
            props.history.push("/student-list");
        }
        else 
            Promise.reject();
      })
      .catch((err) => alert("Something went wrong"))
    }

    useEffect(() => {
        axios.get(`https://upgraded-space-dollop-9w77qx6p5x7fx45-3000.app.github.dev/update-student/${props.match.params.id}`)
            .then((res) => {
                const {name, email, rollno} = res.data;
                setFormValues({name, email, rollno});
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <StudentForm
          initialValues={formValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          Update Student
        </StudentForm>
      );
}

export default EditStudent;