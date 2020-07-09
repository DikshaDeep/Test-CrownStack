import React from 'react'
import styled from 'styled-components'

const SearchBox = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.3em;
  margin: 0.5rem 0rem;
  min-width: 11rem;
  background: #fff;
  color: grey;
  border: 1px solid teal;
  &:focus {
  }
  ${({ id }) => id = ""}
`
export interface IProps {
  placeholder: string | undefined;
  type: string | undefined;
  value?: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void | undefined;
}

export default function SearchInput (props: IProps) {
  const { placeholder, type, value, onChange } = props
  console.log('input home');
  return (
    <React.Fragment>
      <SearchBox 
        id='input-list'
        placeholder={placeholder} 
        type={type} 
        value={value} 
        onChange={() => onChange} 
      />
    </React.Fragment>
  )
}
