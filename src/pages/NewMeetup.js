import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeeetupPage() {

    const navigate = useNavigate();
    function addMeetHandler(meetupdata) {
        fetch('https://react-app-18668-default-rtdb.firebaseio.com/meetups.json',
            {

                method: 'POST',
                body: JSON.stringify(meetupdata),
                headers: {
                    'Content-Type': 'appliction/json'
                }

            }
        ).then(() => {
            navigate('/')
        });

    }
    return (
        <section>
            <h1>
                Add New Meetup
            </h1>
            <NewMeetupForm onAddMeetup={addMeetHandler} />
        </section>
    );
}

export default NewMeeetupPage;