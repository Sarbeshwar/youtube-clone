import React, { Component } from 'react';
import './comments.css';

class Comments extends Component { // appending comments dynamically 
    append_list(e)
    {
        e.preventDefault();
        var a=e.target.uname.value;
        var A=e.target.comment.value;
        var list1=document.getElementById('list-to-be-added');
        var element1=document.createElement('li');
        var text1=document.createTextNode(a);
        element1.appendChild(text1)
        list1.appendChild(element1);
        document.getElementById('uname').innerHTML="";

        var element2=document.createElement('li');
        var text2=document.createTextNode(A);
        element2.appendChild(text2)
        list1.appendChild(element2);
        document.getElementById('comment').innerHTML="";

    }
    render() { 
        return (  // comments component
            <div className="comments-div">
                <h3 className="Comments-heading">Comments</h3>
                <form onSubmit={this.append_list.bind(this)}>
                <input type="text" placeholder="Your Name" className="comments-name" name="uname" id="uname" required></input>
                <input type="text" placeholder="Your Comment" className="add-comments" name="comment" id="comment" required></input>
                <button className="btn btn-primary" type="submit">Comment</button>
                </form>
                <div>
                    <ul id="list-to-be-added"></ul>
                </div>
            </div>
        );
    }
    
}
 
export default Comments;