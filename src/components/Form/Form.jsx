import React from "react";
import s from "./Form.module.css"
import styled from "styled-components";
import * as c from "../../variables"
import { validation } from "./validation";


export default class Form extends React.Component {

  constructor(props){
    super(props)
    this.state = { username: '', password: '', errors:{} }
    // this.errors = {}
  }

   handleInputChange = (e) =>{ 
      this.setState({
      ...this.state, 
      [e.target.name]: e.target.value,
      errors: validation({...this.state.errors,[e.target.name]: e.target.value})
    })
  }  

  handleSubmit = (e) =>{
    e.preventDefault()
    if(!Object.keys(this.state.errors).length){
      this.props.login({[e.target[0].name]:e.target[0].value, [e.target[1].name]:e.target[1].value})
    }else{
      alert("Usuario o contraseña inválidos")
    }
  }

  render() {

    return (
      <div className={s.divForm}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <div className={s.logo} ></div>
          <label className={s.label}>User</label>
          <input
            onChange={this.handleInputChange}
            className={`${s.input} ${this.state.errors.username && this.state.username.length>0 ? s.error :s.completed}  `}   // <-- renderizado condicional 
            name="username"
            type="text"
            value={this.state.username}
            autoComplete="none"
          />
          <span className={`${s.span} ${this.state.errors.username ? s.visible : null }`}>Ingrese un email válido</span>


          <label className={s.label}>Password</label>
          <input
            onChange={this.handleInputChange}
            className={`${s.input} ${this.state.errors.password && this.state.password.length>0 ? s.error :s.completed}  `}
            name="password"
            type="password"
            value={this.state.password}
            autoComplete="none"

          />
          <span className={`${s.span} ${this.state.errors.password ? s.visible : null }`}>La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 numero y entre 6 y 10 caracteres</span>


          <Button >Login</Button>
        </form>
      </div>
    );
  }

}

const Button = styled.button`
  background-color: #00000062;
  width: 70%;
  align-self:center;
  font-size: 2rem;
  padding: .3rem .7rem;
  font-weight: 300;
  color: ${c.VERDE2};
  -webkit-text-stroke: .7px ${c.TURQUEZA};
  text-decoration: 1.7px underline;
  box-shadow: -1px -1px 2px 1px ${c.TURQUEZA}, 
    -2px -2px 5px 1px ${c.VERDE2};

&:hover{
  color: ${c.VERDE1};
  -webkit-text-strok: .7px #000000;
  text-decoration-color: ${c.VERDE2};
  box-shadow: 0px 0px 2px 1px ${c.TURQUEZA}, 
  0px 0px 5px 1px ${c.VERDE2};
}
`

