import classes from './NewPost.module.css';

function NewPost(){
return(
    <form action="" className={classes.form}>
        <p>
            <label htmlFor="body" className={classes.label}>Text</label>
            <textarea  id="body" required rows={3} className={classes.textarea}></textarea>
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' required />
        </p>

    </form>
);
}

export default NewPost;