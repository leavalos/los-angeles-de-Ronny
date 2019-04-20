import React from 'react';
import '../componente con sonido/style.css';

class ComponentePrincipal extends React.Component {


    constructor() {
        super();
        this.state = {
            pads : [
                {
                sound: './sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3'
                },
                {
                sound: './sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3'
                },
                {
                sound: './sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3'
                },
                {
                sound: './sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3'
                },
                {
                sound: './sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3'
                },
                {
                sound: './sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3'
                },
            ],
        }
    }

    title(){
        return (
            <header>
                <h1> 
                    La mejor APP del mundo 
                </h1>
                <p>
                    aca esta las descricion de la mejor APP del mundo
                </p>
            </header>
        );
    }

    body() {
        return (
            <div> 
               {//ACA tiene que suceder la animacion Besos
               } 
            </div>
        );
    }



    pad(index, sound) {
        return (
            <div class={`Pad${index}`}> 
                <audio class="Sound" src={sound}/>
            </div>
        );
    }

    pads() {
        return (
            <div class="Pads">
                {this.state.pads.map((pad,index) => this.pad(index, pad.sound))}
            </div>
        );
    }

    render() {
        return(
            <body>
                <div class="App">
                    {this.title()}
                    {this.body()}
                    {this.pads()}
                </div>
                <script src="./index.js"/>
            </body>
        );
    }


}

export default ComponentePrincipal;