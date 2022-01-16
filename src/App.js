import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Personal from './components/Personal/Personal';
import Project from './components/Project/Project';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      route: 'home'
    }
  }

onRouteChange = (route) => {
  this.setState({route: route});
}

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
        ? <Home />
        : " "
        }   
        { this.state.route === 'about' 
        ? <About />
        : " "
        }    
        { this.state.route === 'personal' 
        ? <Personal />
        : " "
        }       
        { this.state.route === 'contact' 
        ? <Contact />
        : " "
        }  
        { this.state.route === 'project' 
        ? <Project />
        : " "
        }  
        
        
      </div>
    );
  }
}

export default App;
