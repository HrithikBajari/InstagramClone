import React from "react";
import SideSection from "../common/SideSection";
import Main from "./Main";
import Suggestion from "./Suggestion";
const Home =() =>{
    return (
        <div style={{display:'flex',justifyContent:"space-between"}}>
            <div>
            <SideSection/>
            </div>
            <div>
           <Main/>

            </div>
          <div>
            <Suggestion/>
          </div>
        </div>
    )
}
export default Home