import React from 'react'


const LoginForm = (props) => {
  return (
    <form>
      <div>
        <input placeholder={'login'}/>
      </div>
      <div>
        <input placeholder={'password'}/>
      </div>
      <div>
        <input type={'checkbox'}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const Login = (props) => {
  return <div>
    <h1>Login</h1>
    <LoginForm />
  </div>
}

export default Login