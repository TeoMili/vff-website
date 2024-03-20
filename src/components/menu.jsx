import React, { Component } from 'react';

class Menu extends Component {
    state = {
        count : 0
    };

    handelHome(){
        console.log('Home clicked');
    }

    render() { 
        return (
        <div>
           <button onClick={this.handleHome}> Home </button>
           <button> Proiecte </button>
           <button> LegisLand </button>
           <button> Contact </button>
        </div>
        );
    }
}
 
export default Menu;