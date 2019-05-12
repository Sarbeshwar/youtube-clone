import React, { Component } from 'react';
import './like.css';
class Like extends Component {
     like() // method to change the color of the button onclick of button
{
var a=document.getElementById('btn-like');
a.style.backgroundColor="blue";
a.style.color="grey";
}

    render() { // like button component
        return ( 
            <div>
                <button className="like-btn" id="btn-like" onClick={this.like}><b>LIKE</b></button>
            </div>
         );
    }
}
 
export default Like;