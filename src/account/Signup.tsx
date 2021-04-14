import React, {FunctionComponent, useCallback} from 'react';
import {atom, useRecoilState} from 'recoil';
import Button from '@material-ui/core/Button';

import './Signup.css';

const emailState = atom({
    key: 'emailState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

const passwordState = atom({
    key: 'passwordState',
    default: '',
});

const firstNameState = atom({
    key: 'firstNameState',
    default: '',
});

const lastNameState = atom({
    key: 'lastNameState',
    default: '',
});

/**
 * Used as props for text input
 */
interface TextProps {
    text: string,
    setText: (text: string) => void,
    fieldName: string,
}

/**
 * General Text Input
 */
const EnterText: FunctionComponent<TextProps> = (props: TextProps) => {
    const {text, setText, fieldName} = props;

    const changeState = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }, [setText]);

    return (
        <div className="enterText">
            <div>{fieldName}:</div>
            <input 
                type='text' 
                placeholder={fieldName} 
                value={text}
                className="enterTextInput" 
                onChange={changeState}/>
        </div>
    )
}

/**
 * Area to enter the first name
 */
const FirstName: FunctionComponent = () => {
    const [firstName, setFirstName] = useRecoilState(firstNameState);

    return (
        <EnterText text={firstName} setText={setFirstName} fieldName={"First Name"} />
    )
}

/**
 * Area to enter the last name
 */
const LastName: FunctionComponent = () => {
    const [lastName, setLastName] = useRecoilState(lastNameState);

    return (
        <EnterText text={lastName} setText={setLastName} fieldName={"Last Name"} />
    )
}

/**
 * Area to enter the email
 */
const Email: FunctionComponent = () => {
    const [email, setEmail] = useRecoilState(emailState);

    return (
        <EnterText text={email} setText={setEmail} fieldName={"Email"} />
    )
}

/**
 * Area to enter the password
 */
const Password: FunctionComponent = () => {
    const [password, setPassword] = useRecoilState(passwordState);

    return (
        <EnterText text={password} setText={setPassword} fieldName={"Password"} />
    )
}
  

/**
 * Sign Up Page
 */
const SignUp: FunctionComponent = () => {
    return (
        <div id="signUpBox">
            <FirstName />
            <LastName />
            <Email />
            <Password />
            <div className="signupButton">
                <Button variant="contained" color="primary">
                    Sign Up
                </Button>
            </div>
        </div>
    )
}

export default SignUp;