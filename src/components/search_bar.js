import React from 'react';

class SearchBar extends React.Component{ // initially assigning proprty term as null.
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this); // binding this 
    }

    onInputChange(event) {// method to change the value of term on change in search bar and also changing the styling of like button 
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
        var A=document.getElementById('btn-like');
            A.style.backgroundColor="white";
            document.getElementById('list-to-be-added').innerHTML="";
    }

    render(){
        return (//search bar component
            <div className="search-bar">
                <input                
                    value={this.state.term}
                    onChange={this.onInputChange} 
                />               
            </div>
        );        
    }

}

export default SearchBar;