import { useState, useEffect } from "react";
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
//import MeetupItem from "../components/meetups/MeetupItem";


function AllMeetupPage() {
    const [isLoading, setisLoading] = useState(true)
    const [loadedMeetups, setloadedMeetups] = useState([])


    useEffect(() => {
        setisLoading(true)
        fetch('https://react-app-18668-default-rtdb.firebaseio.com/meetups.json')
            .then(response => {
                return response.json();

            }).then(data => {
                const meetups = []
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup)

                }
                setisLoading(false);
                setloadedMeetups(meetups);
            })
    }, [])



    if (isLoading) {
        return <section>
            <p>....Loadin</p>
        </section>
    }

    return (
        <section>
            <h1>AllMeetup Pages</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupPage;