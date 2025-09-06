// This handles the logo + title.

import React from "react";

function Header() {
  return (
    <header className="flex items-center space-x-3">
      <img
        // src="https://i.ibb.co/6wR5W5p/logo.png" 
       src=" https://tse1.mm.bing.net/th/id/OIP.1YLi-pe-CMlbb3mvB57axgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="BT Logo"
        className="w-12 h-12"
      />
      {/* <h1 className="text-2xl font-bold">BT AIQA</h1> */}
<i> <h1 className="logo">BT AIQA</h1></i>
      {/* <h1 className="text-2xl font-bold font-serif">BT AIQA</h1> */}
{/* <h1 className="text-2xl font-bold font-mono">BT AIQA</h1> */}
{/* <h1 className="text-2xl font-bold font-sans">BT AIQA</h1>  */}



    </header>
  );
}

export default Header;





