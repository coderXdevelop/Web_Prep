const Post = ({ post }) => {
    return (
        <div className="post-card">
            <img src={post.imgUrl} alt={post.title} className="post-image" />
            <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <h3 className="post-author">By: {post.author}</h3>
            </div>
        </div>
    );
};
export default Post;