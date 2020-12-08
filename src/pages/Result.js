import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import firebase from '../database/firebaseconection';

 class PieChartWithDynamicSlices extends React.Component {

  summary = {};


  constructor(props) {
    super(props);
    this.state = {
      keys: [],
      values: [],
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    }
  }

  async componentDidMount() {
    firebase.firestore().collection('votos').get().then((votosSnapshot) => {
      if (!votosSnapshot.empty) { 
        votosSnapshot.forEach(votos => {
          let candidato = votos.data().candidato.toString();
          if (this.summary[candidato] === undefined) {
             this.summary[candidato] = 0;
          } 
          this.summary[candidato]++;
        })
      } 
      this.setState({keys: Object.keys(this.summary)});
      this.setState({values: Object.values(this.summary)});
          
    });
  }
  
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = this.state.keys;
    const values = this.state.values;
    const colors = ['#43D9AE', '#8985f2', '#fff', '#C57DF9']
    const data = keys.map((key, index) => {
        return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
          onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
        }
      })
    const deviceWidth = Dimensions.get('window').width

    return (
      <>
      
      <View style={{ justifyContent: 'center', flex: 1, backgroundColor: '#312f73' }}>
        <Text style={styles.subTitle}>Resultado Parcial</Text>
        <PieChart
          style={{ height: 350 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: 'absolute',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center',
            color: '#FFF',
            fontWeight: 'bold'
          }}>
          {`${label} \n ${value}`}
        </Text>
      </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
  subTitle: {
    color: '#8985f2',
    fontSize: 21
  }
});


export default PieChartWithDynamicSlices;