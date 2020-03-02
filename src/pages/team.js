import React, { Component } from 'react';
import { Head } from 'react-static';
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import Navbar from '../components/Navbar';
import '../css/bootstrap.min.css';
import './team.css';


class Team extends Component {
  state = {
    our_team: [],
    team_page: [],
    team_photo: [],
    pie_chart: [],
  }
  favicon

  componentDidMount(){
    //fetch data
    fetch('http://127.0.0.1:8000/api/our_team/', {
      method: 'GET',
    }).then(resp => resp.json())
    .then(res => {
      this.setState({our_team: res});
      console.log(res)
    }).catch(error => console.log(error));

    fetch('http://127.0.0.1:8000/api/team_page/', {
      method: 'GET',
    }).then(resp => resp.json())
    .then(res => {
      this.setState({team_page: res});
      console.log(res)
    }).catch(error => console.log(error));

    fetch('http://127.0.0.1:8000/api/photo/1/', {
      method: 'GET',
    }).then(resp => resp.json())
    .then(res => {
      this.setState({team_photo: res});
      console.log(res)
    }).catch(error => console.log(error));

    fetch('http://127.0.0.1:8000/api/photo/2/', {
      method: 'GET',
    }).then(resp => resp.json())
    .then(res => {
      this.setState({pie_chart: res});
      console.log(res)
    }).catch(error => console.log(error));

  }
  render(){
    return (
      <div className="App">
        <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Acme&display=swap"
          rel="stylesheet"s
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Jaldi&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
          <title>Team</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
        <Navbar />
        <Image src={this.state.team_photo.image} fluid alt="Team" />
        <section className="wrapper style4 container">
                <p />
                <p />
                <div className="content">
                    <section>
                      <div key={this.state.team_page.id}>  
                        {this.state.team_page.map( member => {
                        return(
                        <div key={member.id}>
                        <header>                         
                          <h1 id="first-text" className="blue">{member.header}</h1>
                        </header>
                          <p id="introduction">{member.content}</p>
                        </div>
                        )
                        })}
                      </div>                    
                    <p />
                    <p />
                    </section>
                </div>
            </section>
            <section className="wrapper style1 container special"> 
            </section>
            <Image id="piechart" src={this.state.pie_chart.image} fluid alt="Pie Chart" />
            <Container>
            <div id="page-wrapper">
                <article id="main">
                    <section className="wrapper style1 container special">
                        <div className="row">
                        
                            {this.state.our_team.map( member =>{      
                                var url = member.profile_image
                                if(!url)
                                    url = 'https://i.stack.imgur.com/l60Hf.png'
                                if(!member.bio2){
                                  return (
                                    <div key={member.id} className="col-md-4 col-12-narrower lead">  
                                    <section>
                                    <header>
                                      <div>
                                      <div key={member.id}>
                                          <img className="profile-image" src={url}/>
                                          <h4 className="section-name blue">{member.full_name}</h4>
                                          <p className="profile-header" >{member.profile_header}</p>
                                          <p className="profile-description text-muted">{member.bio}</p>
                                      </div></div> 
                                      </header>
                                    </section>
                                    </div>
                                )} else {
                                  return (
                                    <div className="col-md-4 col-12-narrower lead">  
                                    <section>
                                    <header>
                                      <div>
                                      <div key={member.id}>
                                          <img className="profile-image" src={url}/>
                                          <h4 className="section-name blue">{member.full_name}</h4>
                                          <p className="profile-header" >{member.profile_header}</p>
                                          <p className="profile-description text-muted">{member.bio}</p>
                                          <p />
                                          <p className="profile-description text-muted">{member.bio2}</p>
                                      </div></div> 
                                      </header>
                                    </section>
                                    </div>
                                   )}
                            })}
                        </div>
                    </section>
                </article>
            </div>
        </Container>
          
      </div>
    );
  }
  
}

export default Team;
