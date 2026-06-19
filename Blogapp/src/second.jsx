import Post from "./first.jsx"; 
import Python from './assets/python.jpg';
import Js from './assets/js.jpg';
import Rect from './assets/react.jpg';
import Css from './assets/css.jpg';
import Node from './assets/node.jpg';

const Posts = () => {
    const blogPosts = [
        {
            title: "JAVASCRIPT",
            body: `JavaScript is the world most popular lightweight, interpreted compiled programming 
language. It is also known as scripting language for web pages. It is well-known for 
the development of web pages, many non-browser environments also use it. JavaScript can 
be used for Client-side developments as well as Server-side developments`,
            author: "Nishant Singh",
            imgUrl: Js
        },
        {
            title: "REACT",
            body: `React is a popular open-source JavaScript library for building user interfaces, 
especially single-page applications. It allows developers to create reusable UI components 
and manage application state efficiently. React’s virtual DOM improves performance by 
minimizing direct manipulation of the real DOM.`,
            author: "Nishant Singh",
            imgUrl: Rect
        },
        {
            title: "NODE.JS",
            body: `Node.js is a runtime environment that allows JavaScript to be used for server-side 
development. Built on Chrome’s V8 engine, it enables fast and scalable network applications. 
Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient.`,
            author: "Nishant Singh",
            imgUrl:Node
        },
        {
            title: "PYTHON",
            body: `Python is a high-level, interpreted programming language known for its simplicity 
and readability. It supports multiple programming paradigms and has a vast ecosystem of 
libraries for web development, data science, machine learning, and automation.`,
            author: "Nishant Singh",
            imgUrl: Python
        },
        {
            title: "CSS",
            body: `CSS (Cascading Style Sheets) is used to style and design web pages. It controls 
the layout, colors, fonts, and overall presentation of HTML elements. CSS enables responsive 
designs and enhances user experience across different devices.`,
            author: "Nishant Singh",
            imgUrl:Css
        }
    ];
return (
    <div>
        <h1>My Blog Posts</h1>
        <div className="posts-container">
            {blogPosts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    </div>
);
};

export default Posts;