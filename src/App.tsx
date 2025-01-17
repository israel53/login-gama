import { useFormik } from 'formik';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import * as Yup from 'yup';
import './App.css'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
      password: Yup.string()
      .required("Password is required")
      .min(6, "Password is not valid")
      .max(12, "Password is not valid"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="email" style={{marginTop: 15}}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && !!formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
        </Form.Group>
        <Form.Group controlId="password" style={{marginTop: 15}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.password && formik.touched.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
        </Form.Group>
        <Button  type="submit" style={{marginTop: 15}}>
          Login
        </Button>
        {formik.errors.email && formik.touched.email 
          && ( <Alert style={{marginTop: 15}} variant="danger">{formik.errors.email}</Alert> )}
           {formik.errors.password && formik.touched.password 
          && ( <Alert style={{marginTop: 15}} variant="danger">{formik.errors.password}</Alert> )}
      </Form>
      </Card.Body>
    </Card>
  );
}

export default App
