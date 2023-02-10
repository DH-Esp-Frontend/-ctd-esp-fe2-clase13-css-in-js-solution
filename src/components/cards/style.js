const Styles = () => ({
  flex: "cards__section--container",
  cardSize: "section__article",
  imageSize: "article__img--size",
  padding: "articule__div--padding",
  font: "div__h3-font",
  switchColor:(name)=>{
    if(name.includes("Morty" ))return "article__div--morty";
    if(name.includes("Rick" ))return "article__div--rick";
    
  }
});

export default Styles;
