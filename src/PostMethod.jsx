import React, { useState } from 'react'

function PostMethod() {
    const url = "http://localhost:3000/TO-DO"

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [topic, setTopic] = useState('');
    const [startDate, setStartDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [empty, setEmpty] = useState("");


    function postTODO(e){
        e.preventDefault()
        if(name === "" || phone === "" || subject === "" || topic === "" || startDate === "" || lastDate === "" ){
            setEmpty("Enter Detail")
        }
        else{
            fetch(url,{
            method : "Post",
            body:JSON.stringify({name, phone, subject, topic, startDate, lastDate})
        })
            .then(function(resp){
            return resp.json()
        })

        setEmpty("Thanku")
        }
    }

    function reset(){
        setName("")
        setPhone("")
        setSubject("")
        setTopic("")
        setStartDate("")
        setLastDate("")
        setEmpty("")
    }

  return (
    <>
    <div className='Form'>
        <h2>TO-DO</h2>
        <form>
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
            placeholder='Start Date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)} 
            />
            <br />
            <br />
            <input className='date' 
            type="date" 
            placeholder='Last Date' 
            value={lastDate}
            onChange={(e) => setLastDate(e.target.value)}
            />
            <br />
            <br />
            <button className='button' type="submit" onClick={postTODO}>Submit</button>
            <button className='button' type="reset"  onClick={reset}>Reset</button>
        </form>
    </div>
      <p style={{textAlign: "center"}}>{empty}</p>
    </>
  )
}

export default PostMethod