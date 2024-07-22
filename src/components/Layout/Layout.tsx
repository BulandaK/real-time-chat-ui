import "./Layout.css";
import chat1 from "../../assets/chat1.png";
import chat2 from "../../assets/chat2.png";
import { useEffect, useState } from "react";

function Layout() {
  const [imgTable, setImgTable] = useState<JSX.Element[]>();
  useEffect(() => {
    const pomTable = [];
    for (let i = 1; i <= 5; i++) {
      let wichImage;
      i % 2 == 0 ? (wichImage = chat1) : (wichImage = chat2);
      pomTable.push(
        <img src={wichImage} alt="" style={{ left: `${i * 15}%` }} />
      );
      setImgTable(pomTable);
    }
  }, []);

  return (
    <div className="layout-container" >
      <h1>Real Time Chat </h1>
      <div className="layout-img">{imgTable}</div>
      <div className="layout-description">
        The "Real Time Chat" application is a cutting-edge communication
        platform designed to facilitate instant messaging and seamless
        interactions among users. It offers a robust and user-friendly interface
        that enables individuals to connect, share, and collaborate in
        real-time, making it an ideal tool for both personal and professional
        use.
      </div>
    </div>
  );
}

export default Layout;
