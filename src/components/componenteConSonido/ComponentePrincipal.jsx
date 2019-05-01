import React from 'react';
import '../componenteConSonido/style.css';

class ComponentePrincipal extends React.Component {


    constructor() {
        super();
        this.state = {
            pads : [
                {
                sound: "C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/componenteConSonido/sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3"
                },
                {
                sound: "C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/componenteConSonido/sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3"
                },
                {
                sound: "C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/componenteConSonido/sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3"                
                },
                {
                sound: "C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/componenteConSonido/sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3"
                },
                {
                sound: "C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/componenteConSonido/sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3"                
                },
                {
                sound: "C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/componenteConSonido/sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3"                
                },
            ],
       
        }
    }

    componentDidMount() {
        window.addEventListener("load", () => {

            const sounds = document.querySelectorAll(".Sound");
            const pads = document.querySelectorAll(".Pads div");
                      
        
            pads.forEach((pad,index) => { 
             pad.addEventListener('click', function(){
                sounds[0].play();      
             }) 
            })
         
         });

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
                <audio class="Sound" src="C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/componenteConSonido/sonidos/boca-la-concha-de-tu-madre-audiotrimmer.mp3"
                
                />
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
            </body>
        );
    }


}

export default ComponentePrincipal;