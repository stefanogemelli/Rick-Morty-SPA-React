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
       errors: validation({
         username: this.state.username,
         password: this.state.password,
         [e.target.name]: e.target.value
        })
      })
  }  

  handleSubmit = (e) =>{
    console.log("asdf");
    e.preventDefault()
    if(!Object.keys(this.state.errors).length){

      console.log("despues de login");
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
          <span>User: hola@gmail.com</span>
          <span>User: Hola123</span>
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
  background-color: #101010;
  border: none;
  align-self: center;
  width: 65%;
  font-size: 2rem;
  padding: .4rem .8rem;
  font-weight: 300;
  color: ${c.VERDE2};
  -webkit-text-stroke: .7px ${c.TURQUEZA};
  text-decoration: 1.7px underline;
  box-shadow: 0px 1px 2px 1px ${c.TURQUEZA}, 
              0px 2px 5px 1px ${c.VERDE2};
  transition: .1s;
  &:hover{
    transform: scale(1.01);
    -webkit-text-strok: .7px #000000;
    text-shadow: 0px 0px 1px ${c.TURQUEZA},1px 1px 2px ${c.VERDE2};
    box-shadow: 0px 1px 2px 2px ${c.TURQUEZA}, 
                0px 2px 5px 3px ${c.VERDE2};
  }
  &:active{
    transform: scale(.97);
    box-shadow: 0px 1px 2px 1px ${c.TURQUEZA}, 
                0px 2px 4px 2px ${c.VERDE2},
                0px 1px 2px 1px ${c.TURQUEZA} inset, 
                0px 1px 5px 2px ${c.VERDE2} inset;
  -webkit-text-strok: none; 
  text-shadow:none;
  }
`

