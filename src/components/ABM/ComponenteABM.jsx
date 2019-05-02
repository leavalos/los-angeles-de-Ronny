import React from 'react';
import API from '../../ApiComponent'
import '../ABM/style.css'


class ComponenteABM extends React.Component {

    constructor() {
        super();
        this.state = {
            usuarios: [{
                "name": "Fede",
                "surname": "El",
                "email": "mascapo.com",
                "dni": 12345678
            }],
        } 

    }

    componentDidMount(){
        API.get("/users").then(users => this.setState({usuarios: users})).catch(console.log("holis"));
    }


    renderUsuarios() {
        return(this.state.usuarios.map(usuario => <li>{usuario.name}</li>));
    }

    goNewUser() {
       // this.props.history.push('/newUser');
    }

    goUser() {
        //this.props.history.push('/home/'+`${this.state.usuarioSeleccionado.id}`);
    }

    deleteUser() {
        API.post('/user/'+`${this.state.usuarioSeleccionado}`+'/delete')
        .then(console.log("Pillo")).catch(console.log("No pillo"))
    }

    renderButtons() {
        return(
        <div class="Button-flex">
     
            <button type="button" className="btn btn-primary" onClick={this.newUser()}> agregar usuario </button> 
        
            <button type="button" className="btn btn-primary" onClick={this.deleteUser()}> eliminar usuario </button>
    
            <button type="button" className="btn btn-primary" onClick={this.goUser()}> ver usuario </button>
        </div>
        );
    }

    render() {


        return (
        <div>
            {this.renderUsuarios()}
            {this.renderButtons()}    
        </div>
        );
    }



}

export default ComponenteABM;