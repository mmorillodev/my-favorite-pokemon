import styled from 'styled-components'

export const Button = styled.a<{ disabled?: Boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.1em 0.75em;
  background-color: #ec9cd3;
  color: white;
  font-size: 18px;
  border-radius: 0.25rem;
  cursor: pointer;

  ${props =>
    props.disabled &&
    `
		background-color: gray;
		cursor: not-allowed;
	`}
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & *:nth-child(1) {
    margin-right: 5px;
  }
`

export const Input = styled.input`
  border: none;
  font-size: 18px;
  padding: 0.1em 0.75em;
  border-radius: 0.25rem;
`

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Clickable = styled.div`
  cursor: pointer;
`
