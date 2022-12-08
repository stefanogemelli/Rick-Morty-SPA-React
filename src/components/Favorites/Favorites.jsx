import { connect } from "react-redux"
import Card from "../Card/Card"
import styled from "styled-components"
import { useEffect } from "react"
import { orderCards } from "../../redux/actions"


const Container = styled.div`
  display:Flex;
`

function Favorites({ myFavorites, orderCards }){
  console.log(myFavorites)
  useEffect(()=>{
    orderCards("Ascendente")
  },[])

  return <Container>
      {myFavorites.map(e=>(
        <Card character={e}/>
      ))}
  </Container>
}


const mapStateToProps = (state)=>{
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderCards: (orden) => dispatch(orderCards(orden))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)