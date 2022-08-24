import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Links ({ setIsLoggedIn }) {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        setIsLoggedIn(sessionStorage.getItem("loggedIn"))
    }, []);

    return (
        <>
            <div id="links">
                <h1>// Links</h1>
                    <h2>Equipment</h2>
                        <a href="https://www.rei.com/c/climbing-shoes" target="_blank">Shoes</a><br/>
                        <a href="https://www.rei.com/c/chalk-and-chalk-bags" target="_blank">Chalk Bags</a><br/>
                        <a href="https://www.rei.com/c/training-boards" target="_blank">Training Boards</a>
                    <h2>YouTube Channels</h2>
                        <a href="https://www.youtube.com/c/EricKarlssonBouldering" target="_blank">Eric Karlsson Bouldering</a><br/>
                        <a href="https://www.youtube.com/c/magmidt88" target="_blank">Magnus Mibtbø</a><br/>
                        <a href="https://www.youtube.com/c/BoulderingBobat" target="_blank">Bouldering Bobat</a><br/>
                <div>
                    <h2>Hours of Operations</h2>
                        <h3>Weekdays: 8-10pm</h3>
                        <h3>Weekends: 8-11pm</h3>
                </div>
                <div className='calendar'>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                    <p className='text-left'>
                        <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}    
                    </p>
                </div>
            </div>
        </>
    )
}

export default Links