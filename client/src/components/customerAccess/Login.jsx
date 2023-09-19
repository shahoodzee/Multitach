import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailRequired, setEmailRequired] = useState(true)
  const [passwordRequired, setPasswordRequired] = useState(true)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('', {
        email: email,
        password: password,
      })
      const { userId, token } = res.data

      if (userId === -1) {
        alert('User does not exist')
      } else if (userId === -2) {
        alert('Incorrect Password')
      } else {
        await localStorage.setItem('token', token)
        navigate(`/home/${userId}`)
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className='login flex flex-col items-center justify-center text-white min-h-screen'>
      <h1 className='p-4 text-4xl font-bold'>Login</h1>
      <div className='w-full max-w-md'>
        <form className='bg-opacity-40 bg-gradient-to-t from-violet-900 rounded-xl border-2 border-white shadow-md px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-sm font-bold mb-2 text-white'
              htmlFor='username'
            >
              Email
              {emailRequired && (
                <span className='text-red-500 text-sm'> *</span>
              )}
            </label>
            <input
              className={`appearance-none border bg-slate-900 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id='username'
              type='text'
              placeholder='Username / Email'
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailRequired(false)
              }}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-sm font-bold mb-2 text-white'
              htmlFor='password'
            >
              Password
              {passwordRequired && (
                <span className='text-red-500 text-sm'> *</span>
              )}
            </label>
            <input
              className={`appearance-none border bg-slate-900 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id='password'
              type='password'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value)
                setPasswordRequired(false)
              }}
            />
          </div>
          <div className='flex items-center justify-center'>
            <button
              className='bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 border-2 border-white hover:border-white rounded-xl'
              type='submit'
              onClick={submit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
