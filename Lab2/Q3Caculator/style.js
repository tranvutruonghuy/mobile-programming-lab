import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const [displayValue, setDisplayValue] = useState('0');
const [operator, setOperator] = useState(null);
const [firstValue, setFirstValue] = useState('');


//Function to handle number inputs
const handleNumberInput = (num) => {

    if(displayValue === '0'){
        setDisplayValue(num.toString());
    }else {
        setDisplayValue(displayValue + num);
    }
};

// Function to handle operator inputs
const handleOperatorInput = (operator)=>{
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
};

// Function to handle equal button press

const handleEqual = () =>{
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if(operator === '+'){
        setDisplayValue((num1+num2).toString());
    }else if (operator === '-'){
        setDisplayValue((num1-num2).toString());
    }else if (operator ==='*'){
        setDisplayValue((num1*num2).toString());
    }else if (operator ==='/'){
        setDisplayValue((num1/num2).toString());
    }
    setOperator(null);
    setFirstValue('');
};

// Function to handle clear button press
const handleClear = () =>{
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
};