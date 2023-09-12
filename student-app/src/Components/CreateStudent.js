import React, {useState, useEffect} from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const CreateStudent = () => {
    const [formValues, setFormValues] = useState({name: '', email: '', rollno: ''})
    const onSubmit = (studentObject) => {
        axios.post('https://upgraded-space-dollop-9w77qx6p5x7fx45-3000.app.github.dev/create-student', studentObject)
            .then(res => {
                if (res.status === 200)
                    alert('Student created successfully')
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }
    return (
        <StudentForm initialValue={formValues} onSubmit={onSubmit} enableReinitialize>
            Create Student
        </StudentForm>
    )
}

export default CreateStudent