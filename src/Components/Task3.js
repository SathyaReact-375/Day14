import React, { useRef, useState,useEffect } from 'react'

function Task3() {
    useEffect(() => {
        usingref.current.focus(); 
      }, []);
    
    const reflearning=useRef();
    const learning=useRef();
    const[change,setChange]=useState()
    const[In,Setin]=useState()
    const[email,setEmail]=useState()
    const[select,setSelect]=useState()
    const[text,setText]=useState()
    const[check,setCheck]=useState(false)
    const[radio,setRadio]=useState()
    const[add,setAdd]=useState([])
    const usingref=useRef()
    const firstRef = useRef(null);
  const secondRef = useRef(null);
  const contactNameRef = useRef(null);
  const contactEmailRef = useRef(null);
  const contactMessageRef = useRef(null);
  const subscriptionNameRef = useRef(null);
  const subscriptionEmailRef = useRef(null);
  const [termsAgreed, setTermsAgreed] = useState(false);


    function handler(event) {
        event.preventDefault();
        Setin(reflearning.current.value)
        setEmail(learning.current.value)
    }
    const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    
        alert(`Name: ${name}\nEmail: ${email}`);
        
  };

function get(e)
{
    e.preventDefault();
    setAdd([...add,usingref.current.value])
}
const newHandleSubmit = (e) => {
    e.preventDefault();
    const name = firstRef.current.value;
    const email = secondRef.current.value;
    if (name !== "" && email !== "") {
      alert(`Name: ${name}\nEmail: ${email}`);
    } else {
      alert("error");
    }
  };
   const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const name = contactNameRef.current.value;
    const email = contactEmailRef.current.value;
    const message = contactMessageRef.current.value;

    if (!name || !email || !message) {
      alert("All fields are required!");
    } else if (!validateEmail(email)) {
      alert("Invalid email format!");
    } else {
      alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }
  };
  const checkEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();

    const name = subscriptionNameRef.current.value;
    const email = subscriptionEmailRef.current.value;

    if (!name || !email) {
      alert("All fields are required!");
    } else if (!checkEmailFormat(email)) {
      alert("Invalid email format!");
    } else {
      alert(`Subscription Successful!\nName: ${name}\nEmail: ${email}`);
    }
  };

  const handleCheckboxChange = (e) => {
    setTermsAgreed(e.target.checked);
  };



return (
   <>
   <div style={{textAlign:"center"}}>
   <h1>Task2</h1>
    <input value={change} onChange={(e)=>setChange(e.target.value)
    }></input>
    <p>{change}</p>

      <h1>Task3</h1>
      <form >
        <input ref={reflearning} ></input>
        <input ref={learning}></input>
        <button onClick={(e)=>handler(e)}>click</button>
      </form>
      <p>{In}</p>
      <p>{email}</p>
    <h1>Task4</h1>
    <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
    <p>{text}</p>
    <h1>Task5</h1>
    <form>
      <select onChange={(e)=>setSelect(e.target.value)}>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="Tamil">Tamil</option>
</select>
    <p>{select}</p>
    </form>
    <h1>Task6</h1>
    <input type="checkbox" onClick={()=>setCheck(pre=>!pre)} ></input>
    <p>{check?"true":"false"}</p>
    <h1>Task7</h1>
   
    <input type="radio" name="option" value="one" onClick={(e)=>setRadio(e.target.value)}/>
    <input type="radio" name="option" value="two" onClick={(e)=>setRadio(e.target.value)} />
    <input type="radio" name="option" value="three" onClick={(e)=>setRadio(e.target.value)} />
    <p>{radio}</p>
    <h1>Task8</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email: <input type="email" ref={emailRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    <h1>Task9</h1>
    <input value={change} onChange={(e)=>setChange(e.target.value)
    }></input>
    <p>{change}</p>
    <h1>Task10</h1>
    <form onSubmit={newHandleSubmit}>
        <label>
          Name: <input type="text" ref={firstRef} />
        </label>
        <br />
        <label>
          Email: <input type="email" ref={secondRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

    <h1>Task11</h1>
    <input ref={usingref}></input>
    <button onClick={(e)=>{
        get(e)
    }}>add</button>
      <ul>
        {add.map((val,index)=>(
            <li key={index}>{val}</li>
        ))}
      </ul>
      <h1>Task12,13</h1>
      
<form>
  <input type="text" name="name" placeholder="Name" ref={usingref} />
  <br />
  <input type="email" name="email" placeholder="Email" />
  <br />
  <button type="reset">Reset</button>
</form>
<h1>Mini Project 3: Contact Form</h1>
      <form onSubmit={handleContactSubmit}>
        <label>
          Name: <input type="text" ref={contactNameRef} />
        </label>
        <br />
        <label>
          Email: <input type="email" ref={contactEmailRef} />
        </label>
        <br />
        <label>
          Message: <textarea ref={contactMessageRef}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>Mini Project 4: Subscription Form</h1>
      <form onSubmit={handleSubscriptionSubmit}>
        <label>
          Name: <input type="text" ref={subscriptionNameRef} />
        </label>
        <br />
        <label>
          Email: <input type="email" ref={subscriptionEmailRef} />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={termsAgreed}
          />{" "}
          I agree to the terms and conditions
        </label>
        <br />
        <button type="submit" disabled={!termsAgreed}>
          Subscribe
        </button>
      </form>
    </div>
   </>
  )
}

export default Task3