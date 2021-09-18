import React from "react";
import "./post.css";
interface INtetApp {
  items: { name: string; city: string }[];
}
const Posts: React.FC<INtetApp> = (props) => {
  return (
    <div className="posts-info">
      {props.items.map((item) => (
        <ul
          key={Math.random().toString()}
          style={{ backgroundColor: "rgba(224, 106, 199, 0.7)" }}
        >
          <li key={Math.random().toString()}> {item.city} </li>
          <li key={Math.random().toString()}>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};
export default Posts;
