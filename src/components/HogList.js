import React, { Component } from 'react'

import Hog from './Hog'

// hogImage = () =>{
//   this.props.hogs.map(hog => (
//     <Hog img={img} 
//   ))
// }
export class HogList extends Component {
    render() {
      const img = require(`../hog-imgs/cherub.jpg`);
        return (
          <div className="ui centered grid container">
            
            {this.props.hogs.map(hog => (
             <Hog hog={hog} img={img}/>
             
            
            ))};
            

        </div>
        )
    }
}

export default HogList
