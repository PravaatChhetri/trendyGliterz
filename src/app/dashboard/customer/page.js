"use client"
import React from 'react'

export default function Product() {
  const [users, setUsers] = React.useState([{}]);
  React.useEffect(() => {
    fetch("http://localhost:3000/api/orders")
      .then((res) => res.json())
      .then((val) => {
    
        setUsers(val.filter(
          (v, i, a) => a.findIndex(t => (t.email === v.email)) === i
        ));          
        

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
<div className='flex w-full items-center justify-start mt-5 ml-5'>
<div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Contact Number</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )
        })
      }

    </tbody>
  </table>
</div>

</div>    

    )
}
