import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })
  const { email, password, name } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Create an Account!</p>
        </header>
        <main>
          <form>
            <input
              type='text'
              className='nameInput'
              placeholder='Name'
              id='name'
              value={name}
              onChange={onChange}
            />
            <input
              type='email'
              className='emailInput'
              placeholder='Email'
              id='email'
              value={email}
              onChange={onChange}
            />
            <div className='passwordInputDiv'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='passwordInput'
                id='password'
                placeholder='Password'
                value={password}
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                alt='Show Password'
                className='showPassword'
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>
            <div className='signInBar'>
              <p className='signInText'>Sign Up</p>
              <button className='signInButton'>
                <ArrowRightIcon fill='#fff' width='34px' height='34px' />
              </button>
            </div>
          </form>
          {/* Google auth */}
          <Link to='/sign-in' className='registerLink'>
            Already have an account? Sign In
          </Link>
        </main>
      </div>
    </>
  )
}
