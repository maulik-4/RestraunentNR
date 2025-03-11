import React from 'react'
import { Component } from 'react'
import UserClass from '../Components/UserClass'


class About extends Component{
  constructor(props){
    console.log('parent constructor called');
    super(props);
  }
  componentDidMount(){
    console.log('parent componentDidMount called');
  }

  render(){
    console.log("Parent render is called");
    return (
      <div>
        
        <UserClass name="Maulik" location="city" />
      </div>
    )
  }
} 





export default About