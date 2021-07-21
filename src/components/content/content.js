import React from "react";
import './content.css';
import Img from "./../../img/image.svg";

const Content=()=>{
    return(
        <div className='content'>
                 <div className='contentBox'> 
            <div className='title'>
                <h2>Лучший вкус, это вкус долголетнего вина</h2>
            </div>
                    <div className="text"> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat enim tortor in hac id imperdiet adipiscing. 
                            Pellentesque nisi, mi sit non sit sed fermentum. 
                            Felis adipiscing morbi sodales ac. M
                            auris dictumst risus pulvinar blandit elit. 
                            Vestibulum quam ultrices nascetur et viverra suscipit.
                            Proin vitae aliquet leo aliquam amet rutrum. 
                            Lectus auctor purus ultrices enim ultrices. 
                            Augue fringilla tellus tortor orci ultrices sed.
                            Viverra cras sapien, pellentesque viverra malesuada. 
                            Tellus dolor, eget vitae dignissim molestie eget sit duis. V
                            itae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. P
                            ellentesque scelerisque nunc, orci aliquam quis.</p>
                    </div>
                        <div className="svg">
                            <img src={Img} alt="pic1" />
                        </div>
                       
        </div>
        </div>
       
         
    )
    
};

export default Content;