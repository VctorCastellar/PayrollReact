// You can import supported modules from npm
import { Card, Button } from 'react-native-paper';
import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  // Variables
  const [hr, Hour] = useState('');
  const [ratehr, RateHour] = useState('');
  const [sss, SSS] = useState('50');
  const [tax, Tax] = useState('100');
  const [pagibig, Pagibig] = useState('50');
  const [philhealth, Philhealth] = useState('50');

  const [netpayresult, NetPay] = useState(null);
  const [totalDeductions, TotalDeductions] = useState('')
  const calculateNetPay = () => {
    // Convert inputs to numbers and calculate the sum
    const hour = parseFloat(hr) || 0;
    const ratehour = parseFloat(ratehr) || 0;
    const sss1 = parseFloat(sss);
    const tax1 = parseFloat(tax);
    const pagibig1 = parseFloat(pagibig);
    const philhealth1 = parseFloat(philhealth);

    // Deductions and total
    const totalDeductions = (sss1 + tax1 + pagibig1 + philhealth1);
    const netpayresult = (hour * ratehour) - (totalDeductions); // sss, tax, pag-ibig, philhealth

    // shortcutted that shit so that it'll be much better
    NetPay(netpayresult);
  };



  return (
    <SafeAreaView style={styles.container}>
    <Text 
    style={styles.heading}
    >Payroll Calculator</Text>

    <TextInput
    style={styles.input} // style used for the font style, etc. See StyleSheet
    value={hr} // variable used to give value
    onChangeText={Hour} // verification
    keyboardType= "numeric"
    placeholder = "Number of hours"
    />
    <TextInput
    style={styles.input}
    value={ratehr}
    onChangeText={RateHour}
    keyboardType="numeric"
    placeholder = "Rate per hour"
    />
    
    <Button 
    title="Compute Net Pay" 
    onPress={calculateNetPay}
    style={styles.button}
    >COMPUTE</Button>

    {netpayresult !== null && (
      <Text style={styles.output}>
         --- Calculated Net Pay --- {"\n"}
        PHP {netpayresult}{"\n"}
         --- Deductions --- {"\n"}
         Total Deductions: {parseFloat(sss) + parseFloat(tax) + parseFloat(pagibig) + parseFloat(philhealth) }
      </Text>
    )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 40,
  },
  button: {
    backgroundColor:'#90EE90', // Color of the button, can't do the font color lol
    color: '#ffffff',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  output: {
    fontSize: 25,
    fontWeight: 'narrow',
    textAlign: 'center',
  }
});