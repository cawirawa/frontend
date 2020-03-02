import React, { Component } from 'react'
import { Head } from 'react-static'
import "../css/welcome.css"
import { Link } from '../components/Router'
import { Redirect } from 'react-router-dom'


class Welcome extends Component {
  state = {
    background : [],
    redirect : false,
  }
  
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/photo/4/', {
      method: 'GET',
    }).then(resp => resp.json())
    .then(res => {
      this.setState({background: res});
      console.log(res)
    }).catch(error => console.log(error));
  }
// <Image src={this.state.background.image} fluid alt="background" style={welcomeStyle} />
        
  buttonClicked = () => {
    this.setState({redirect : true});
  }


  render() {
    const welcomeStyle = {
      // Makes the background image cover the full page.
      "backgroundImage": "url( " + this.state.background.image + ")",
      "height": "55vw",
      "backgroundPosition": "center",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "cover",
    
      // Makes title centered.
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center"
    }

    const linkStyle = {
      "textDecoration": "none",
    
      // Adds a contrast for the white text.
      "paddingLeft": "10px",
      "paddingRight": "10px",
      "paddingTop": "10px",
      "paddingBottom": "10px",
      "borderStyle": "solid",
      "width": "25%",
      "marginWidth": "auto",
      "marginTop" : "30px",
    
      "display": "inline-block"
    }

    if (this.state.redirect)
      return <Redirect to="/team" />

    return (
      <div style={welcomeStyle}>
        <Head>
          <title>UCSD Solar Car</title>
        </Head>
        <div className="text-center text-white">
          <h1
            className="display-3  font-weight-bold"
          >
            UC San Diego <br/>
            Solar Car Team
          </h1>
          <h5>
            We are Engineers for a Sustainable World
          </h5>
          <Link className="nav-link" onClick={<Redirect to={member.link} />}>{member.name}</Link>
          <button onClick={this.buttonClicked} style={linkStyle} type='submit'>
              JOIN US
          </button>
          {/* <Link to="/team" id="join-button" style={linkStyle}>
              JOIN US
          </Link> */}
        </div>
      </div>
    );
  }
}

export default Welcome;
