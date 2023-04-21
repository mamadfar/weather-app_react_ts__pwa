import React, {FC, InputHTMLAttributes} from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input:FC<IInputProps> = ({...restProps}) => {
    return (
        <input {...restProps}/>
    );
};

export default Input;
