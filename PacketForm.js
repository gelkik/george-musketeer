import React, {useState} from "react";

function PacketForm({handleNewUser,setUserData}) {

  const newObj = {
    username: '',
    email: '',
    location: ''
    }
  const [formData,setFormData] = useState(newObj);

  function handleSubmit(e){
    e.preventDefault()
    handleNewUser(formData)
    fetch('http://localhost:8000/profile',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(res=>res.json())
    .then(data=>{
      setUserData(data)
      setFormData(newObj)
    })
  }

  function handleFormChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  return (
    <div>
      <h3>Create a Username:</h3>
      <form
        onSubmit={handleSubmit}
        >
          <input
            fluid label="Username" 
            placeholder="Username" 
            name="username" 
            value={formData.username}
            // onChange={(e)=>setFormData(e.target.value)}
            // onChange={(e)=>console.log(e.target.value)}
            onChange={handleFormChange}
          />
          <input
            fluid label="Email" 
            placeholder="Email" 
            name="email" 
            value={formData.email}
            onChange={handleFormChange}
          />
          <input
            fluid label="location" 
            placeholder="location" 
            name="location" 
            value={formData.location}
            onChange={handleFormChange}
          />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PacketForm;
