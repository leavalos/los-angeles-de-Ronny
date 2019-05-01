import React from 'react';
import API from '../../ApiComponent'
import {Dropdown, Button} from "reactstrap"

class ComponenteABM extends React.Component {

    constructor() {
        super();
        this.state = {
            usuarios: [],
        } 

    }
/*
    componentDidMount(){
        API.get("/users").then(users => this.setState({usuarios: users})).catch(console.log("holis"));
    }


    renderUsuarios() {
        return(this.state.usuarios.map(usuario => <li>{usuario.name}</li>));
    }

    goNewUser() {
        this.props.history.push('/newUser');
    }

    goUser() {
        this.props.history.push('/home/'+`${this.state.usuarioSeleccionado.id}`);
    }

    deleteUser() {
        API.post('/user/'+`${this.state.usuarioSeleccionado}`+'/delete')
        .then(console.log("Pillo")).catch(console.log("No pillo"))
    }

    renderButtons() {
        return(
        <div>
            <div>
                <Button variant="primary" onClick={this.goNewUser()}> nuevo usuario </Button> 
            </div>
            <div>
                <Button variant="primary" onClick={this.deleteUser()}> baja usuario </Button>
            </div>
            <div>
                <Button variant="primary" onClick={this.goUser()}> ver usuario </Button>
            </div>
        </div>
        );
    }*/

    render() {


        return (
        <div>
            <ul>
                
               
            </ul>
            <button type="button" className="btn btn-primary" > ver usuario </button>
            <button type="button" className="btn btn-primary" > ver usuario </button>
            <button type="button" className="btn btn-primary" > ver usuario </button>
            <button type="button" className="btn btn-primary" > ver usuario </button>
        </div>
        );
    }



}

export default ComponenteABM;