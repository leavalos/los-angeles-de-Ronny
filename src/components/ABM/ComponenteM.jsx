import React from 'react';
import API from '../../ApiComponent'
import '../ABM/style.css'


class ComponenteM extends React.Component {

    constructor() {
        super();
        this.state = {
                id: 2,
                name: "Tobias",
                surname: "El",
                email: "mascapo.com",
                dni: 12345678
        }
    }

    componentDidMount() {
        API.get(`/user/${this.props.match.params.id}/ver`)
        .then(user => this.setState({user})).catch(console.log("holis"));
    }
    userName(){
        const text = this.state.name
        return text;
    }

    setNombre(event){
        this.setState({name: event.target.value})
    }

    renderDer() {
        return(
            <div style={{justifyContent: 'center'}}>
                <div class="card">
                    <div class="card-body" style={{height: "100vh"}}>
                    <form>
                        <div class="form-group" style={{display: 'flex'}}>
                            <label for="exampleInputEmail1">Nombre</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.name} onChange={event => this.setNombre(event)}/>
                        </div>
                        <div class="form-group" style={{display: 'flex'}}>
                            <label for="exampleInputPassword1">Apellido</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder={this.state.surname} onChange={event => this.setApellido(event)}/>
                        </div>
                        <div class="form-group" style={{display: 'flex'}}>
                            <label for="exampleInputEmail1">Email</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.email}onChange={event => this.setEmail(event)}/>
                        </div>
                        <div class="form-group" style={{display: 'flex'}}>
                            <label for="exampleInputPassword1">Dni</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" placeholder={this.state.dni}onChange={event => this.setDni(event)}/>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }

    renderIzq() {
        return(
            <div style={{height: "100vh", backgroundColor: '#141313',}}>
                <div style={{alignContent: "center"}}>
                    <img  src  ="https://fotos.perfil.com/2018/11/17/840/0/chuck-norris-11172018-394376.jpg" alt="user img" className="rounded-circle" width="70" height="70"  />
                    <ul class="list-group" style={{ backgroundColor: '#584f4f',}}>
                        <li class="list-group-item">info</li>
                        <li class="list-group-item">otra info</li>
                        <li class="list-group-item">MAS INFO</li>
                        <li class="list-group-item">PARA QUE TANTA INFO</li>
                        <li class="list-group-item">SHIT MUCHA INFO YA</li>
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        return (
            <body class="colorBody">
                <div class="container">
                <div class="row">
                <div class="col col-lg-2">
                    {this.renderIzq()
                    }
                    </div>
                    <div class="col" style={{height: "100vh"}}>
                    {this.renderDer()}
                    </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default ComponenteM;