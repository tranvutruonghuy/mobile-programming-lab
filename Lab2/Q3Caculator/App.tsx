import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  //Function to handle number inputs
  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = operator => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handleNumberInput(1)} />
        <Button title="2" onPress={() => handleNumberInput(2)} />
        <Button title="3" onPress={() => handleNumberInput(3)} />
        <Button title="+" onPress={() => handleOperatorInput('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handleNumberInput(4)} />
        <Button title="5" onPress={() => handleNumberInput(5)} />
        <Button title="6" onPress={() => handleNumberInput(6)} />
        <Button title="-" onPress={() => handleOperatorInput('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handleNumberInput(7)} />
        <Button title="8" onPress={() => handleNumberInput(8)} />
        <Button title="9" onPress={() => handleNumberInput(9)} />
        <Button title="*" onPress={() => handleOperatorInput('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="C" onPress={handleClear} />
        <Button title="0" onPress={() => handleNumberInput(0)} />
        <Button title="=" onPress={handleEqual} />
        <Button title="/" onPress={() => handleOperatorInput('/')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    width: '80%',
    textAlign: 'right',
    borderRadius: 10,
    borderColor: '#b2ebf2',
    borderWidth: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    margin: 5,
    flex: 1,
  },
});

export default App;
