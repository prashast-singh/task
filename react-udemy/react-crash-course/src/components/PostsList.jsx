import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
function PostsList(){
    return (
        <>
        <NewPost/>
        <ul className={classes.posts}>
           <Post author = "prashast" body="first body"/>
           <Post author = "singh" body="second body"/>
           <Post author = "singh" body="second body"/>
        </ul>
        </>
    );
}

export default PostsList;
