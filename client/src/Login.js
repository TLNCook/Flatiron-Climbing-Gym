import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Login ({ setLoggedInClimberId, setIsLoggedIn }) {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()

  const { name, password } = formData

  function handleSubmit (e) {
    e.preventDefault()
    const climber = {
      name,
      password
    }

    fetch('/login', {
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
          res.json().then(json => setErrors(json.errors))
        }
      })

  }

  const navigateToSignUp = () => {
    navigate('/signup')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [ name ]: value })
  }

  return (
    <>
      <div id='login'>
        <form widths='equal' onSubmit={ handleSubmit }>
          <h3 id='logincolor'> // FLATIRON Climbing Gym </h3>
          <div className='logininput'>
            <input
              className='input'
              type='text'
              name='name'
              placeholder='Name'
              value={ formData.name }
              onChange={ handleChange }
            />
          </div>
          <div className='logininput'>
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Password'
              value={ formData.password }
              onChange={ handleChange }
            />
          </div>
          <div>
            <Button id='submit_login' variant="secondary" className="ui button" type='submit'>Login</Button>
          </div>
          <div>
            <Button id='submit_signup' variant="secondary" onClick={ navigateToSignUp } className="ui button" type='submit'>Signup Here!</Button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Login;