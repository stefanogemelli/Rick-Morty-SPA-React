import { connect } from "react-redux"
import Card from "../Card/Card"
import styled from "styled-components"
import { orderCards, filterFavorites } from "../../redux/actions"

function Favorites({ myFavorites, orderCards, filterFavorites }){

  const handleOrder = (e) => {
    orderCards(e.target.value)
  }

  const handleFilter = (e) => {
    filterFavorites(e.target.value)
  }
  return <>

      <Select onChange={handleOrder} >
        <Option hidden>Order</Option>
        <Option value="Ascendente">Ascendente</Option>
        <Option value="Descendente">Descendente</Option>
      </Select>
  
      <Select onChange={handleFilter} >
        <Option hidden>Filter</Option>
        <Option value="All">All</Option>
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
        <Option value="unknown">Unknown</Option>
        <Option value="Genderless">Genderless</Option>
      </Select>

      <Container>
        {myFavorites.map(e=>(
          <Card key={e.id} character={e}/>
        ))}
    </Container>

  </>
}


const mapStateToProps = (state)=>{
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderCards: orden => dispatch(orderCards(orden)),
    filterFavorites: gender => dispatch(filterFavorites(gender))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)


const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-auto-rows: 500px;
  gap: 5px;
  justify-items: center;
`
const Select = styled.select`
  color: black;
  font-size: 2rem;
`
const Option = styled.option`
  color: black;
  font-size: 2rem;

`