import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import "./App.css";

import Personagem from "./components/personagem";

class App extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
    objPersonagem: [],
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb, colorhex: color.hex });
  };

  onChangeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    this.setState({
      objPersonagem: [
        ...this.state.objPersonagem,
        { nome: this.state.nome, olhos: this.state.colorhex },
      ],
    });

    this.setState({
      nome: "",
      color: "",
    });
    console.log(this.state.objPersonagem);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <>
        <input
          type="text"
          name="nome"
          value={this.state.nome}
          onChange={(e) => this.onChangeState(e)}
        ></input>

        <div>
          <div style={styles.swatch} onClick={this.handleClick}>
            <div style={styles.color} />
          </div>
          {this.state.displayColorPicker && (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <SketchPicker
                color={this.state.color}
                onChange={this.handleChange}
              />
            </div>
          )}
        </div>
        <button onClick={this.onClick}>Salvar</button>
        <hr></hr>

        {this.state.objPersonagem.map((value, i) => {
          return (
            <div key={i}>
              <Personagem nome={value.nome} olhos={value.olhos}></Personagem>
            </div>
          );
        })}
      </>
    );
  }
}
export default App;

const popover = {
  position: "absolute",
  zIndex: "2",
};
const cover = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
};
