import { useState } from "react"
import axios from "axios"



const SignUp = () => {
  const [userName, setuserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [usercreated, setUsercreated] = useState("")


  const HandelUserNameChange = (e) => setuserName(e.target.value)
  const HandelPasswordChange = (e) => setPassword(e.target.value)
  const HandelEmailChange = (e) => setEmail(e.target.value)

  const HandeFormSubmit = (e) => {
    e.preventDefault()


    axios.post("http://localhost:3000/users/signup", {
      username: userName,
      password,
      email
    }).then((res) => {
      setUsercreated(res.data.message)
    }).catch((e) => console.log(e))



  }




  return (



    <form onSubmit={(e) => HandeFormSubmit(e)} id="SignUp">

      <div id="input">
        <label htmlFor="username">UserName:</label>
        <input type="text" name="username" id="username" value={userName} onChange={(e) => HandelUserNameChange(e)} />
      </div>


      <div id="input">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => HandelPasswordChange(e)} />
      </div>


      <div id="input">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => HandelEmailChange(e)} />
      </div>


      <input type="submit" value="SignUp" />


      {usercreated && (usercreated)}
    </form>

  )
}

export default SignUp