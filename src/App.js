import React, { Component } from "react";
import "./App.css";
import Videos from './Components/Videos'
import Form from './Components/Form'
class App extends Component {
  
  state = {
    video:[],
  };

  getVideos =async e=> {
    e.preventDefault();

    const data = await fetch("http://192.168.42.185:5000/");
    const data1=await data.json();
this.setState({
    video:data1
})    ;
console.log(this.state.videos);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">2900+ talks to stir your curiosity</h1>
          <p className="App-intro">Find just the right one. </p>
        </header>
        <button onClick={this.getVideos}>send</button>
        <Form videos={this.state.video}/>

        <Videos videos={this.state.video}/>

      </div>
    );
  }
}

export default App;
