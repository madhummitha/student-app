import React from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {FormGroup, FormControl, Button} from "react-bootstrap";

const StudentForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email").required("Required"),
        rollno: Yup.number().positive().integer().required(),
    })
console.log(props);

return (
    <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
                <FormGroup>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
                </FormGroup>
                <FormGroup>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
                </FormGroup>
                <FormGroup>
                    <Field name="rollno" type="text" className="form-control" />
                    <ErrorMessage name="rollno" className="d-block invalid-feedback" component="span" />
                </FormGroup>
                <Button variant="danger" size="lg" block type="submit">{props.children}</Button>
            </Form>
        </Formik>
    </div>
)
}
export default StudentForm;