import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value; // Use form.elements to access by name
    console.log(form)
    const email = form.elements.email.value;
    const user ={name, email}
    // console.log(user);
    fetch("http://localhost:5000/users",{
      method:"POST" ,
      headers:{
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(user)
    })
    .then((response)=> response.json())
    .then(data => {
      // console.log(data)
      // const newUser = [...user, data]
      setuser(data)
      // console.log(data)
      form.reset();
    })
  };
  return (
    <>
      <h1>User manage system</h1>
      <p>numbers of user:{user.length}</p>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="name" /> 
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      <div>
        {user.map((user) => (
          <h1 key={user.id}>
            {user.id}.{user.name}.{user.email}
          </h1>
        ))}
      </div>
    </>
  );
}

export default App;
