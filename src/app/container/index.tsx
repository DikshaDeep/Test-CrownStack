import React from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";

//  components
import Button from "../component/Button";
import InputBox from "../component/InputBox";
import Card from "../component/Card";
//  action
import ActionCreator from "../action/actionCreator";
import {IProps} from "../reducer/list";

const HomeContainer = styled.div`
  padding: 10px;
  text-align: center;
  background-color: transparent;
`
const SearchContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;
`
const Container = styled.div`
  margin: 0px;
`
interface RootState {
  list: IProps;
}

function CheckContainer () {
  
  const dispatch = useDispatch();
  const [term, setTerm] = React.useState("");

  const {list} = useSelector((state: RootState) => state);

  const handleChange = (e: any) => {
    setTerm(e.target.value)
  }

  const submit = () => {
    dispatch(ActionCreator.listRequest(term));
    setTerm('')
  }

  const handleDelete = (id: number) => {
    dispatch(ActionCreator.removeList(id))
  }

  console.log('test home');
  return (
    <HomeContainer id="test-home">
      <SearchContainer>
        <Container>
          <InputBox placeholder="Enter your list" type="text" value={term} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)}/>
        </Container>
        <Container>
          <Button onClick={() => submit()}>Add To List</Button>
        </Container>
        
      </SearchContainer>
        <Container>
          {list.error ?
          <p>{list.errorMessage}</p> :
          <div>
          {list.list && list.list.length > 0 ? list?.list.map((result: string, i: number) => (
            <Card 
            key={i}
            seq={i+1}
            name={result}
            handleDelete={handleDelete}
          />)) : <div>Nothing To Do</div>}
          </div>}
        </Container>
    </HomeContainer>
  )
}

export default CheckContainer;
