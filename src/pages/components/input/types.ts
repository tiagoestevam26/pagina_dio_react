import React from "react"

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon?:  React.ReactNode;
    errorMessage?: any;
    control: any;
    name: string;
}