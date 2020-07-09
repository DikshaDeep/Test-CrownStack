import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 3px;
  background: white;
  margin: 10px 0px;
  padding: 5px 10px;
  display: flex;
  color: #fff;
  opacity: 1;
  background-image: linear-gradient(to right, teal, grey);
  border: 1px solid grey;
  box-shadow: inset 1px 1px 1px 1px;
`
const Seq = styled.div`
  margin: 20px 20px 20px 10px;
  display: flex;
  align-items: center;
`
const ContentContainer = styled.div`
  width: 70%; 
  display: table-column;
  padding: 0px 20px;
  margin: 0px 20px;
`
const DeleteContent = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: space-between;
  &:hover {
    opacity: 0.7;
  }
`
export interface IProps {
  handleDelete: ((seq: number) => void | undefined);
  seq: number;
  name: string | ""
}

export default function Card (props: IProps) {
  const {name, seq, handleDelete} = props;
  
  return (
    <CardContainer data-testid="list-data">
      <Seq>{seq}</Seq>
      <ContentContainer>
        <p>{name}</p>
      </ContentContainer>
      <DeleteContent>
        <div style={{cursor: 'pointer'}} onClick={() => {handleDelete(seq)}}>Delete</div>
      </DeleteContent>
    </CardContainer>
  )

}
