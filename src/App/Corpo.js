import Sidebar from "./Sidebar";
{/*Props story*/}
function Stories (props){
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} />
      </div>
      <div class="usuario">
        {props.texto}
      </div>
  </div> 
  )
}
{/*Props post*/}
function Posts (props){
  return (
    <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.img} />
                  {props.texto}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.imgconteudo} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.imgCurtidoPor} />
                  <div class="texto">
                    Curtido por <strong>{props.textoCurtidoPor}</strong> e <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default function Corpo() {
    return (
      <div class="corpo">
        <div class="esquerda">
          <div class="stories">
            <Stories img = "assets/img/9gag.svg" texto = "9gag" />
            <Stories img = "assets/img/meowed.svg" texto = "meowed" />
            <Stories img = "assets/img/barked.svg" texto = "barked" />
            <Stories img = "assets/img/nathanwpylestrangeplanet.svg" texto = " nathanwpylestrangeplanet" />
            <Stories img = "assets/img/wawawicomics.svg" texto = "wawawicomics" />
            <Stories img = "assets/img/respondeai.svg" texto = "respondeai" />
            <Stories img = "assets/img/filomoderna.svg" texto = "gfilomodernaag" />
            <Stories img = "assets/img/memeriagourmet.svg" texto = "memeriagourmet" />
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">
            <Posts img = "assets/img/meowed.svg" texto = "meowed"
              imgconteudo = "assets/img/gato-telefone.svg" imgCurtidoPor = "assets/img/respondeai.svg"
              textoCurtidoPor = "respondeai"
            />
            <Posts img = "assets/img/barked.svg" texto = "barked"
              imgconteudo = "assets/img/dog.svg" imgCurtidoPor = "assets/img/adorable_animals.svg"
              textoCurtidoPor = "adorable_animals"
            />
            </div>
        </div>

        <Sidebar />
      </div>
    );
}