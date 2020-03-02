import React, {  Component } from 'react'
import { Head } from 'react-static'
import { Link } from './Router'
import { Redirect } from 'react-router-dom'

//import '../js/jquery-3.3.1.slim.min.js'

class Navbar extends Component{
    state = {
        buttons:  [],
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/navbar/', {
        method: 'GET',
        }).then(resp => resp.json())
        .then(res => {
        this.setState({buttons: res});
        console.log(res);
        }).catch(error => console.log(error));
        
    }
    
    render(){
        return (
            <div>
                <Head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </Head>
                <nav className="navbar navbar-expand-lg navbar-dark" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    {this.state.buttons.map( member =>{                  
                        return (
                            <li className="nav-item" key={member.id}>

                                <Link className="nav-link" onClick={<Redirect to={member.link} />}>{member.name}</Link>
                            </li>   
                        )
                    })}

                    </ul>
                </div>
        
                </nav>
        
            </div>

            
        )
    }
};

export default Navbar;