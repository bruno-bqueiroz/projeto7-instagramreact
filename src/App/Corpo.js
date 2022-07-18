import React from "react";
import Sidebar from "./Sidebar";

const arrayStories = [
    {  
    img : "assets/img/9gag.svg", 
    texto : "9gag"
  },
    {
    img : "assets/img/meowed.svg",
    texto : "meowed"
  },
    {
    img : "assets/img/barked.svg",
    texto : "barked"
  },
    {
    img : "assets/img/nathanwpylestrangeplanet.svg",
    texto : " nathanwpylestrangeplanet"
  },
    {
    img : "assets/img/wawawicomics.svg",
    texto : "wawawicomics"
  },
    {
    img : "assets/img/respondeai.svg",
    texto : "respondeai"
  },
  {
    img : "assets/img/filomoderna.svg",
    texto : "gfilomodernaag"
  },{
    img : "assets/img/memeriagourmet.svg",
    texto : "memeriagourmet"    
  }
];


function Stories (props){
  return (
    props.stories.map((objeto)=>(
    <div class="story">
      <div class="imagem">
        <img src={objeto.img} />
      </div>
      <div class="usuario">
        {objeto.texto}
      </div>
  </div> 
  )))
}

const arrayPost = [
  {   
  img : "assets/img/meowed.svg",
  texto : "meowed",
  imgconteudo : "assets/img/gato-telefone.svg",
  imgCurtidoPor : "assets/img/respondeai.svg",
  textoCurtidoPor : "respondeai"
  },
    {     
  img : "assets/img/barked.svg",
  texto : "barked",
  imgconteudo : "assets/img/dog.svg",
  imgCurtidoPor : "assets/img/adorable_animals.svg",
  textoCurtidoPor : "adorable_animals"
  }       
];


function coracao (){
   
}

function Posts (props){
  const [botao, setBotao] = React.useState("heart-outline");
  const [corBotao, setCorBotao] = React.useState("deslike");

  return (
    props.posts.map((objeto)=>(
    <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={objeto.img} />
                  {objeto.texto}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={objeto.imgconteudo} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ul class = {corBotao}>
                    <ion-icon name={botao} onClick={() => {
                    setBotao("heart");
                    setCorBotao("like");
                    }}> 
                    </ion-icon>
                    <ion-icon name="chatbubble-outline"> </ion-icon>
                    <ion-icon name="paper-plane-outline"> </ion-icon>
                    </ul>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={objeto.imgCurtidoPor} />
                  <div class="texto">
                    Curtido por <strong>{objeto.textoCurtidoPor}</strong> e <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
      </div>
  )))
} 



export default function Corpo() {
    return (
      <div class="corpo">
        <div class="esquerda">
          <div class="stories">

            <Stories stories = {arrayStories} /> 

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">

            <Posts posts = {arrayPost}/>
            
          </div>
        </div>

        <Sidebar />
      </div>
    );
}