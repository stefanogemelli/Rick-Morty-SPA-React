import React from "react";
import s from "./Form.module.css"
import { validation } from "./validation";


export default class Form extends React.Component {

  constructor(props){
    super(props)
    this.state = { username: '', password: '', errors:{} }
    this.errors = {}
  }

  handleInputChange = (e) =>{ 
    if(e.target.value === ""){
      this.setState({
        ...this.state, 
        [e.target.name]: e.target.value,
        errors: {...this.state.errors, [e.target.name]:e.target.value} 
      })
    }else {
      this.setState({
      ...this.state, 
      [e.target.name]: e.target.value,
      errors:{...this.state.errors, ...validation({[e.target.name]: e.target.value})}
    })
    }    
  }  
 
  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.errors.username ==="" && this.state.errors.password ===""){
      this.props.login({[e.target[0].name]:e.target[0].value, [e.target[1].name]:e.target[1].value})
    }else{
      alert("Usuario o contraseña inválidos")
    }
  }

  render() {

    return (
      <div className={s.divForm}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.label}>User</label>
          <input
            onChange={this.handleInputChange}
            className={`${s.input} ${this.state.errors.username && this.state.username.length>0 ? s.error :s.completed}  `}   // <-- renderizado condicional 
            name="username"
            type="text"
            value={this.state.username}
          />
          <span className={`${s.span} ${this.state.errors.username ? s.visible : null }`}>Ingrese un email válido</span>


          <label className={s.label}>Password</label>
          <input
            onChange={this.handleInputChange}
            className={`${s.input} ${this.state.errors.password && this.state.password.length>0 ? s.error :s.completed}  `}
            name="password"
            type="password"
            value={this.state.password}
          />
          <span className={`${s.span} ${this.state.errors.password ? s.visible : null }`}>La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 numero y entre 6 y 10 caracteres</span>


          <button className={s.login}>Login</button>
        </form>
      </div>
    );
  }

}


