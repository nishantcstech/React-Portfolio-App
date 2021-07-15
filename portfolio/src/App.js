import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'

class App extends Component {
  state = { disableBio: false };
  toggleDisplayBio = () => {
    this.setState({ disableBio: !this.state.disableBio });
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     disableBio: false
  //   }
  //   //  console.log('component this', this);
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

  // }

  // toggleDisplayBio() {
  //   this.setState({ disableBio: !this.state.disableBio });
  // }
  render() {
    return (
      <div>
        <img src={profile} alt="profile" class="profile"></img>
        <h1>Hello!</h1>
        <p>My Name is Jagriti. I am a software Engineer.</p>
        <p>I am looking forward to working on meaningful projects.</p>

        {this.state.disableBio ? (<div>
          <p>I live in San Fransisco and code everyday.</p>
          <p>My favorite language is Javascript and I think ReactJs is awesome. </p>
          <p>Besides coding, I also love music and dance. </p>
          <button onClick={this.toggleDisplayBio}>Show Less</button>
        </div>) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>)
        }
        <hr/>
        <Projects/>
        <SocialProfiles/>
      </div>
    )
  }
}

export default App;
