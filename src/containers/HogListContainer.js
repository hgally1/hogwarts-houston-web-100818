import React, { Component } from 'react'

import HogSort from '../components/HogSort'
import HogList from '../components/HogList'

export class HogListContainer extends Component {

    constructor() {
        super()
        this.state = {
            hogs: []
        }
    }

    

    fetchData = () => {
      return fetch('http://localhost:3001/hogs')
      .then(resp => resp.json())
      .then(hogs => this.setState({ hogs }))
    }

    componentDidMount(){
      this.fetchData();
    }

    //allow users to filter the hogs that are greased
    filterHogs = (val) => {
      if (val === 'all') {
        this.fetchData()
      }
  
      else {
        this.fetchData()
        .then(() => {
          let filterHogs = this.state.hogs.filter(hog => hog.greased === !!val)
          this.setState({ hogs: filterHogs })
        })
      }
    }

    

    //allow users to sort the hogs based on name and weight
    ////(a[val] > b[val]) ? 1 : ((b[val] > a[val]) ? -1 : 0));
    //a[val].localeCompare(b[val])); 
    sortHogs = (val) => {
      let sortedHogs = this.state.hogs.sort((a,b) => (a[val] > b[val]) ? 1 : ((b[val] > a[val]) ? -1 : 0));
      this.setState({hogs: sortedHogs})
    }
  
      // else {
      //   this.fetchData()
      //   .then(() => {
          
      //     let sortHogs = this.state.hogs.sort((a, b) => a[val]-b);
              
      //       this.setState({ hogs: sortHogs })
          
      //   })
      // }
    //}
    // let sortHogs = this.state.hogs.sort((a, b) => {
    //   if(a[val] < b[val]) { return -1; }
    //   if(a[val] > b[val]) { return 1; }
    //   return 0;})
    //return a[val].localeCompare(b[val])

    hogImages = () => {

    }
  

    render() {
        return (
            <div>
              
              <HogSort filterHogs={this.filterHogs} sortHogs={this.sortHogs} />
              <HogList hogs={this.state.hogs}/>
            </div>
        
        )
    }
}

export default HogListContainer
