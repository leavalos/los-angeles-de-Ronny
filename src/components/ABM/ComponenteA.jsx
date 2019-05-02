import React from 'react';
import API from '../../ApiComponent'


class ComponenteA extends React.Component {

    constructor() {
        super();
        this.state = {
            
                name: '',
                surname: '',
                email: '',
                dni: 0
            
        } 

    }

    crearUsuario(){
        API.put('/user/new',this.state)
    }

    setNombre(event){
        this.setState({name: event.target.value})
        console.log(this.props);
        
    }

    setApellido(event){
        this.setState({surname: event.target.value})
        console.log(this.props);
        
    }

    setEmail(event){
        this.setState({email: event.target.value})
        console.log(this.props);
        
    }

    setDni(event){
        this.setState({dni: event.target.value})
        console.log(this.props);
        
    }
    
    render() {


        return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pone nombre"onChange={event => this.setNombre(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Apellido</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Pone Apellido"onChange={event => this.setApellido(event)}/>
                 </div>
                 <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pone Mail"onChange={event => this.setEmail(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Dni</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Pone Dni"onChange={event => this.setDni(event)}/>
                 </div>
                 <button type="submit" class="btn btn-primary" onClick={this.crearUsuario()} >Submit</button>
            </form>
        </div>
        );
    }



}

export default ComponenteA;