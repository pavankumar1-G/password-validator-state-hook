// Style your elements here
import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  min-height: 100vh;
  background-color: #24263c;
`
export const PasswordValidatorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #383a4e;
  padding: 20px;
  width: 300px;
  height: 200px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #434451;
  @media screen and (min-width: 768px) {
    width: 600px;
    height: 400px;
    justify-content: center;
  }
`
export const PasswordValidatorHeading = styled.h1`
  font-size: 25px;
  color: #ffffff;
  font-family: Roboto;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`
export const PasswordNote = styled.p`
  color: #f8fafc;
  font-size: 10px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const PasswordInputContainer = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`
export const PasswordInput = styled.input`
  height: 30px;
  width: 200px;
  border: none;
  outline: none;
  padding-left: 10px;
  background-color: #edeeff;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 45px;
    padding-left: 20px;
  }
`
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 8px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
