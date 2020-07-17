import React from "react";

class Personagem extends React.Component {
  state = {
    olhos: "blue",
  };

  Del = (e) => {
    this.props.clickDeleteImg();
  };

  /*
  fotoDescricao = e => {
    this.props.changeDescricao(e);
  };
*/
  componentDidMount = () => {
    console.log(this.props.olhos);
    console.log(this.state.olhos);
  };
  render() {
    return (
      <div>
        Personagem :
        <span style={{ color: this.props.olhos }}> {this.props.nome} </span>
      </div>
    );
  }
}

export default Personagem;
