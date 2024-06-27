import Post from "./Post.jsx";
import classes from "./PostList.module.css";

function PostList(props) {
    return (
        <ul className={classes.posts}>
            <Post author={"h1un"} body={"안녕하슈"}/>
            <Post author={"h1un"} body={"안녕하슈"}/>
        </ul>
    )
}

export default PostList
