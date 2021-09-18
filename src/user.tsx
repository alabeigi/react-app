import React from "react";
import "./user.css";
interface INtetApp {
  items: { userId: number; id: number; title: string; completed: boolean }[];
}
const Users: React.FC<INtetApp> = (props) => {
  const colors = [
    "rgba(226, 106, 106, 1)",
    "rgba(224, 130, 131, 1)",
    "rgba(241, 169, 160, 1)",
    "rgba(241, 130, 141,1)",
    "rgba(241, 169, 160, 1)",
  ];

  return (
    <div className="user-info">
      {props.items.map((item) => (
        <ul
          style={{
            backgroundColor: colors[Math.round(Math.random() * 4)],
          }}
          key={item.id.toString()}
        >
          <li key={item.id.toString()}> {item.title} </li>
        </ul>
      ))}
    </div>
  );
};
export default Users;
