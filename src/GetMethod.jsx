import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

function GetMethod() {

  const [show, setShow] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    getTODO();
  }, []);

  //Get Method
  function getTODO() {
    const url = "http://localhost:3000/TO-DO";
    fetch(url)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setShow(data);
      });
  }

  //Delete Method
  function userdelete(id){
    const url = `http://localhost:3000/TO-DO/${id}`;
    fetch(url,{
      method : 'delete'
    })
    .then(function(res){
      return getTODO()
    })
    
  }

  
  //Upadte Data
  function updatetodo(id){
    Navigate("/edit/"+id)
  }

  return (
    <>
      <div>
  <table className="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone-No</th>
        <th>Subject</th>
        <th>Topic</th>
        <th>Start-Date</th>
        <th>Last-Date</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {show.map((datas) => (
        <tr key={datas.id}>
          <td>{datas.name}</td>
          <td>{datas.phone}</td>
          <td>{datas.subject}</td>
          <td>{datas.topic}</td>
          <td>{datas.startDate}</td>
          <td>{datas.lastDate}</td>

          <td className="action">
            <button className="delete-btn" onClick={() => userdelete(datas.id)}>Delete</button>
            <button className="edit-btn" onClick={() => updatetodo(datas.id)}>Edit</button>
          </td>
        </tr>
      ))}                   
    </tbody>
  </table>
</div>
    </>
  );
}

export default GetMethod;
