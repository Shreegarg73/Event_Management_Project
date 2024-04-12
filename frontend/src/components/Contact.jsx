import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");

    const handleSendMessage=async(e)=>{
        e.preventDefault();
        await axios.post("https://rich-lime-clam-tie.cyclic.app/api/v1/message/send",{
            name,
            email,
            subject,
            message
        },{ withCredentials: true,headers:{"Content-Type":"application.json"}}
    ).then(res=>{
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }).catch(error=>{
        toast.error(error.response.data.message);
    })
    };

    return(
        <>
            <div className="contact container">
                <div className="banner">
                    <div className="item">
                        <h4>Address</h4>
                        <p>Anywhere, Anytime</p>
                    </div>
                    <div className="item">
                        <h4>CALL US</h4>
                        <p>Call us @+91-9779661020</p>
                    </div>
                    <div className="item">
                        <h4>Mail Us</h4>
                        <p>rahulaeron@gmail.com</p>
                    </div>
                </div>
                <div className="banner">
                    <div className="item">
                        <iframe 
                        src="https://www.google.co.in/maps/place/Artisan+Studio+by+A/@31.2915869,75.6235411,17z/data=!3m1!4b1!4m6!3m5!1s0x391a599439938c4d:0xdfb9d149b2be5ee8!8m2!3d31.2915869!4d75.626116!16s%2Fg%2F11swt95w05?entry=ttu"
                        style={{border:0,width:"100%",height:"450px"}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-reference-when-downgrade"/>
                        </div>
                    <div className="item">
                        <form onSubmit={handleSendMessage}>
                            <h2>CONTACT</h2>
                            <div>
                                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;