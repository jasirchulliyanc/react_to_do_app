
import React, { Component } from 'react'

export default class Counter extends Component {
state={
    time:0,
    firstName:'',
    secondName:'',
    data:[
        {
            name:'jasir',
            id:'1'
        },
        {
            name:'tet',
            id:'1'
        }
        ,        {
            name:'hadf',
            id:'1'
        }
    ]
};



storeValue= event =>{
    this.setState({
        [event.target.name]:event.target.value
    });
};
onSubmit=()=>{
console.log(this.state);
};

  render() {
    return (
      <div>
        <ul>
            {this.state.data.map((value,index)=>{
return <li key={index}>{value.id}</li>
            })}
        </ul>

      <form>
      <input type="text" name="firstName" value={this.state.firstName} onChange={this.storeValue}/>
      <input type="text" name="secondName" value={this.state.secondName} onChange={this.storeValue}/>
      <button type="button" onClick={this.onSubmit}>Submit</button>

      </form>
      </div>
    )
  }
}
