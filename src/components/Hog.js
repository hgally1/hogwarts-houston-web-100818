import React, { Component } from 'react';
//import hogImgs from './hog-imgs/'


export class Hog extends Component {
    render() {
        // let source = this.props.imageIsRelative ?
        //          'hog-imgs/' + this.props.hog.image :
        //          '/hog-imgs/' + this.props.hog.image;
        //const pigImage = require('hog-imgs/augustus_gloop.jpg');
        //let img = require(`../hog-imgs/${this.props.hog.name}.jpg`);
        // let hogImage = this.props.hog.name;
        // let imgSource = require('../hog-imgs/' + hogImage);
        //src={`${hogImgs}${this.props.hog.name}.jpg`}
        return (
            <div className="pigTile">
                <div className="ui cards">
                    <div className="card">
                        <div className="ui move right reveal">
                            <div className="visible content">
                                <div className="image">
                                    <img src={this.props.getImage(this.props.hog.name)} alt={this.props.hog.name}></img>   
                                </div>
                                <div className="header">
                                    {this.props.hog.name}
                                </div>                
                            </div>
                            <div className="hidden content">
                                <div className="description">
                                    <p>Specialty: {this.props.hog.specialty}</p>
                                    <p>{this.props.hog.greased === true ? "Greased" : "Not Greased"}</p>
                                    <p>Weight: {this.props.hog.weight} lbs</p>
                                    <p>Highest medal achieved: {this.props.hog['highest medal achieved']}</p>
                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hog
