import { useState } from "react"
import axios from "axios"



const SignIn = () => {


  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const [usercreated, setUsercreated] = useState("")
  const [error, setError] = useState("")


  const HandelPasswordChange = (e) => setPassword(e.target.value)
  const HandelEmailChange = (e) => setEmail(e.target.value)

  const HandeFormSubmit = (e) => {
    e.preventDefault()


    axios.post('http://localhost:3000/users/login', {
      email,
      password
    }).then(res => {

      setUsercreated("Sign in succefully")

      localStorage.setItem('token', res.data.token)




    })
      .catch(e => {
        setUsercreated("")
        setError(e.response.data.message)
      })


  }
  return (

    <form onSubmit={(e) => HandeFormSubmit(e)} id="SignUp">


      <div id="input">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => HandelEmailChange(e)} />
      </div>


      <div id="input">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => HandelPasswordChange(e)} />
      </div>





      <input type="submit" value="Login" />


      {error && (error)}

      {usercreated && usercreated}

    </form>

  )
}

export default SignIn