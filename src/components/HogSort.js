import React, { Component } from 'react'

export class HogSort extends Component {

    //handleFilter
    handleGreasedFilter = (e) => {
        this.props.filterHogs(e.target.value)
    }
    
      //handleSort
    handleSort = (e) => {
        
        this.props.sortHogs(e.target.value)
    }


    render() {
        return (
            <div className="filterWrapper">
                {/*filter: drop down menu to choose 'all' 'greased' or 'ungreased' */}
                {/*sort: drop down mentu, choices= 'name' or 'weight' */}
                <form>
                    <select onChange={this.handleGreasedFilter}>
                        <option value='all'>All Hogs</option>
                        <option value='true'>Greased</option>
                        <option value=''>Not Greased</option>
                    </select>
                    <select onChange={this.handleSort}>
                        {/* <option value='all'>All Hogs</option> */}
                        <option>Sort by:</option>
                        <option value='name'>sort by name (A-Z)</option>
                        <option value='weight'>sort by weight (ascending)</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default HogSort
