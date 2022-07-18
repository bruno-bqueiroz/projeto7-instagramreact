const arrayObjetos = [
  {
  img : "assets/img/bad.vibes.memes.svg",
  texto : "bad.vibes.memes"
   },
  {
  img : "assets/img/chibirdart.svg",
  texto : "chibirdart"
   },
  {
  img : "assets/img/razoesparaacreditar.svg",
  texto : "razoesparaacreditar"
   },
  {
  img : "assets/img/adorable_animals.svg",
  texto : "adorable_animals"
   },
  {
  img : "assets/img/smallcutecats.svg",
  texto : "smallcutecats"
  }
];


{/*Sidebar */}
function SidebarSugestoes(props){
  return (
  props.sugestoes.map((objeto) => (
  <div class="sugestao">
    <div class="usuario">
      <img src={objeto.img} />
      <div class="texto">
        <div class="nome">
         {objeto.texto}
        </div>
        <div class="razao">Segue você</div>
      </div>
    </div>
    <div class="seguir">Seguir</div>
  </div>
  )))
}

// retirar todos os sidebar e deixar apenas 1 com o map

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
        
        <SidebarSugestoes sugestoes = {arrayObjetos}/>
        
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