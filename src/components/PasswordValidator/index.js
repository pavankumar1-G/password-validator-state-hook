// Write your code here
import {useState} from 'react'

import {
  PasswordValidatorContainer,
  PasswordValidatorCard,
  PasswordValidatorHeading,
  PasswordNote,
  PasswordInputContainer,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePasswordInput = event => {
    setPassword(event.target.value)
  }

  return (
    <PasswordValidatorContainer>
      <PasswordValidatorCard>
        <PasswordValidatorHeading>Password Validator</PasswordValidatorHeading>
        <PasswordNote>
          Check how strong and secure is your password
        </PasswordNote>
        <PasswordInputContainer>
          <PasswordInput
            type="password"
            value={password}
            onChange={onChangePasswordInput}
          />
          {password.length >= 8 ? null : (
            <ErrorMessage>
              Your password must be at least 8 characters
            </ErrorMessage>
          )}
        </PasswordInputContainer>
      </PasswordValidatorCard>
    </PasswordValidatorContainer>
  )
}
export default PasswordValidator
