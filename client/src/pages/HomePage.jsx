
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const [posts, setPosts] = useState([])
  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const authToken = localStorage.getItem("token")

    // request posts from backend
    axios.get("http://localhost:3000", { headers: { Authorization: authToken } }).then((response) => {




      setRedirect(false)
      setPosts(response.data.posts)



    }).catch(() => {
      setRedirect(true)
    })



  }, [])

  if (redirect) {
    return navigate('/login')
  }

  if (posts.length > 0) {
    return posts.map((post, idx) => {
      return (
        <div key={idx}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      )
    })
  }


}

export default HomePage