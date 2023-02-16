import React from "react";

// const getList = async () => {
//     const response = await fetch("http://localhost:8004/poems");
//     const data = await response.json();
//     console.log(data);
//     setPoems(data);
//   };

//   const markAsRead = async (poem) => {
//     poem.is_read = !poem.is_read;
//     const response = await fetch("http://localhost:8004/poems/" + poem.id, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//           title: poem.title,
//           content: poem.content,
//           is_read: poem.is_read,  
//           author: poem.author,
        
//       }),
//     });
//     const data = await response.json();
//     console.log(data);

//     getList();
//   }
//   return (
//     <div className="poems-container">
//       {
//         poems.map(poem => <Poem key={poem.id} poem={poem} markAsRead={markAsRead}/>)
//       }
//     </div>








import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("db.json")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          setResponse("Login successful!");
        } else {
          setResponse("Invalid username or password.");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <p>{response}</p>
    </form>
  );
}

export default LoginForm;