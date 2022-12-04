const userReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const passReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/


export function validation(userData) {
  const err = {}

  if (userData.username) {

    if (!userReg.test(userData.username)) {
      err.username = "Ingrese un e-mail válido"
    } else {
      err.username = ""
    }

  } else {

    if (!passReg.test(userData.password)) {
      err.password = "Utilice al menos una letra, un número y de 6 a 10 caracteres"
    } else {
      err.password = ""
    }

  }

  return err
}