import React, { Component } from 'react'

import Hog from './Hog'

// hogImage = () =>{
//   this.props.hogs.map(hog => (
//     <Hog img={img} 
//   ))
// }
export class HogList extends Component {
  
  getImage = (input) => {
    let name = input.split(' ').join('_').toLowerCase()
    return require(`../hog-imgs/${name}.jpg`)
  }



  render() {



    return (
        <div className="ui centered grid container">

            {this.props.hogs.map(hog => (
                <Hog hog={hog} getImage={this.getImage}/>

            ))};


        </div>
    )
  }
}

export default HogList

