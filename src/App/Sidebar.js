{/*Props Sidebar*/}
function SidebarSugestoes(props){
    return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.texto}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>
  
      <div class="seguir">Seguir</div>
    </div>
    )
  }
  
export default function Sidebar(){
    return (
        <div class="sidebar">
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            Catana
          </div>
        </div>
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          <SidebarSugestoes img = "assets/img/bad.vibes.memes.svg" texto = "bad.vibes.memes"/>
          <SidebarSugestoes img = "assets/img/chibirdart.svg" texto = "chibirdart"/>
          <SidebarSugestoes img = "assets/img/razoesparaacreditar.svg" texto = "razoesparaacreditar"/>
          <SidebarSugestoes img = "assets/img/adorable_animals.svg" texto = "adorable_animals"/>
          <SidebarSugestoes img = "assets/img/smallcutecats.svg" texto = "smallcutecats"/>
        </div>
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}