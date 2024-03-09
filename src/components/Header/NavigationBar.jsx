import React from "react";
import Searchbar from "./Searchbar";
import Logo from "../../Images/Logo_transparent.png";
import { onLoad } from "../Animation";

function NavigationBar() {
  return (
	<>

	  <div id="header" className="flex justify-center items-center w-full h-20 relative bg-red-600" onLoad={onLoad}>
      
      {/*---------------------------- Logo box ------------------------------*/}
      <div className="absolute left-8" id="logo">
        <img src={Logo} alt="Logo" className="h-16 bg-white rounded-full px-4"/>    
      </div>

      {/*------------------------ Search Box ---------------------------------- */}
      <Searchbar />

    </div>
	</>
  );
}

export default NavigationBar;
