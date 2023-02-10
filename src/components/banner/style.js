

const Styles = () => ({
  buttonBase: "div__button--bg-base",
  flex: "banner__div--container",
  textAlign: "p-align",
  generalFontSize: "general-fontsize",
  containerBg: (toogle) => (toogle ? "banner-cyan" : "banner-brown"),
  font: (toogle) => (toogle ? "div__h1--fantasy" : "div__h1--cursive"),
});

export default Styles;