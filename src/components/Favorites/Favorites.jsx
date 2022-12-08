import { connect } from "react-redux"
import Card from "../Card/Card"
import styled from "styled-components"


const Container = styled.div`
  display:Flex;
`

function Favorites({myFavorites}){
  console.log(myFavorites)

  return <Container>
      {myFavorites.map(e=>(
        <Card info={e}/>
      ))}
  </Container>
}


const mapStateToProps = (state)=>{
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps,null)(Favorites)