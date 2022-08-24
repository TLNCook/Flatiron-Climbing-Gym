import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp ({ setIsLoggedIn, setLoggedInClimberId }) {
  const [validated, setValidated] = useState(false);

  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const climber = {
      'name': form.formBasicName.value,
      'email': form.formBasicEmail.value,
      'password': form.formBasicPassword.value,
      'passwordConfirmation': form.formBasicPasswordConfirmation.value,
    }
    let errorsArray;

    fetch('/climbers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(climber)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(climber => {
          setIsLoggedIn(true)
          sessionStorage.setItem("loggedIn", true)
          sessionStorage.setItem("loggedInClimberId", climber.id)
          setLoggedInClimberId(climber.id)
          navigate(`/climbers/${climber.id}`)
        })
      } else {
        res.json().then(json => {
          errorsArray = json.errors 
          setErrors(errorsArray)
        })
      }
    })
  }
  function backToLogin () {
    navigate("/login")
  }

  return (
    <div id="signup" >
      <h1 className="title">
        // FLATIRON Climbing Gym
      </h1>
      <div className="login">
        <div id="signupdiscription">
          Welcome to your new favorite place to Boulder!
        </div>
        <div className="signUpForm">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Climber</Form.Label>
              <Form.Control type="text" placeholder="Climber Name" isInvalid={errors.includes('Name has already been taken')} required/> 
              <Form.Control.Feedback type="invalid">
                {errors.includes('Name has already been taken') ? 'Name has already been taken' : 'Name required'}
              </Form.Control.Feedback>
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" 
              isInvalid={errors.includes('Email has already been taken')} 
              required/>
              <Form.Control.Feedback type="invalid">
                {errors.includes('Email has already been taken') ? 'Email has already been taken' : 'Email required'}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
              <Form.Control.Feedback type="invalid">
                {errors.includes('Password has already been taken') ? 'Password has already been taken' : 'Password required'}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" required/>
              <Form.Control.Feedback type="invalid">
                {errors.includes('Email has already been taken') ? 'Email has already been taken' : 'Email required'}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button><br/>
            <Button id="goBack" variant="secondary" onClick={backToLogin}>
              Back to login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;