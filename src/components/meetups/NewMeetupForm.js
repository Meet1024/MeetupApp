import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        // console.log(event)
        const enteredTtile = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupdata = {
            title: enteredTtile,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
            date: new Date()

        };

        props.onAddMeetup(meetupdata)
        // console.log(meetupdata)
    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler} >
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='addess'>Address</label>
                <input type='text' required id='address' ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button type='submit'>Add Meetup</button>
            </div>

        </form>
    </Card>
    );
}
export default NewMeetupForm