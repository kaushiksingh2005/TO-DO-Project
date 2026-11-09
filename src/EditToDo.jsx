import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

function EditToDo() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [topic, setTopic] = useState('');
    const [startDate, setStartDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()
    const url = "http://localhost:3000/TO-DO/"+id;

    useEffect(() => {
        getdata()
    },[])

    //Get Method for Updating
    async function getdata(){
        let resp = await fetch(url)
        resp = await resp.json()
        setName(resp.name);
        setPhone(resp.phone)
        setSubject(resp.subject)
        setTopic(resp.topic)
        setStartDate(resp.startDate)
        setLastDate(resp.lastDate)
    }

    //Put Method
    function putData(){
        navigate("/")
        fetch(url,{
            method:"PUT",
            body:JSON.stringify({name, phone, subject, topic, startDate, lastDate})
        })
        .then(function(resp){
            return resp.json()
        })
    }

  return (
    <>
    <div className='Form'>
        <h1>Update TO-DO</h1>
        <form action="">
            <input className='input'  
            type="text" 
            placeholder='Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            />
            <br />
            <br />
            <input className='input'  
            type="number" 
            placeholder='Phone-No' 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            />

            <br />
            <br />
            <input className='input'  
            type="text" 
            placeholder='Subject' 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            />
            <br />
            <br />
            <input className='input'  
            type="text" 
            placeholder='Topic' 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)} 
            />
            <br />
            <br />
            <input className='date'  
            type="date" 
            placeholder='Start-Date' 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            />
            <br />
            <br />
            <input className='date'  
            type="date" 
            placeholder='Last-Date' 
            value={lastDate} 
            onChange={(e) => setLastDate(e.target.value)} 
            />
            <br />
            <br />
            <button className='button' type="submit" onClick={putData}>Update</button>
        </form>
    </div>
    </>
  )
}

export default EditToDo