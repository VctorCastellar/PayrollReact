// You can import supported modules from npm
import { Card, Button } from 'react-native-paper';
import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';

// or any files within the Snack (well, no need to use them for today's program)
import AssetExample from './components/AssetExample';

export default function App() {

  // Variables
  const [hr, Hour] = useState('');
  const [ratehr, RateHour] = useState('');
  const [sss, SSS] = useState('');
  const [tax, Tax] = useState('');
  const [pagibig, Pagibig] = useState('');
  const [philhealth, Philhealth] = useState('');

  const [netpayresult, NetPay] = useState(null);
  const [totalDeductions, TotalDeductions] = useState('')


  const calculateNetPay = () => {
    // Convert inputs to numbers and calculate the sum
    const hour = parseFloat(hr) || 0;
    const ratehour = parseFloat(ratehr) || 0;
    const sss1 = parseFloat(sss) || 0;
    const tax1 = parseFloat(tax) || 0;
    const pagibig1 = parseFloat(pagibig) || 0;
    const philhealth1 = parseFloat(philhealth) || 0;
    const netpayresult = (hour * ratehour) - (sss1 + tax1 + pagibig1 + philhealth1); // sss, tax, pag-ibig, philhealth
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
    keyboardType="numeric"
    placeholder = "Number of hours"
    />
    <TextInput
    style={styles.input}
    value={ratehr}
    onChangeText={RateHour}
    keyboardType="numeric"
    placeholder = "Rate per hour"
    />
    
    <TextInput
    style={styles.input}
    value={sss}
    onChangeText={SSS}
    keyboardType="numeric"
    placeholder = "SSS"
    />
    <TextInput
    style={styles.input}
    value={tax}
    onChangeText={Tax}
    keyboardType="numeric"
    placeholder = "Tax"
    />
    <TextInput
    style={styles.input}
    value={pagibig}
    onChangeText={Pagibig}
    keyboardType="numeric"
    placeholder = "Pag-IBIG"
    />
    <TextInput
    style={styles.input}
    value={philhealth}
    onChangeText={Philhealth}
    keyboardType="numeric"
    placeholder = "PhilHealth"
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