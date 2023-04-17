import { StyleSheet, Text, TextInput, View } from 'react-native';
import Btn from './components/btn.js';
import { Entypo, Feather, FontAwesome5 } from 'react-native-vector-icons'
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState('')
  
  const getData=(data)=>{
    setResult(result.concat(data));
  };
  
  const clearHandler=()=>{
    setResult('')
  }
   const onCalculate=()=>{
    setResult(eval(result).toString())
   }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#fff',alignItems:'flex-end',justifyContent:'flex-end'}}>
        <TextInput style={{ margin: 20,fontSize:35,fontWeight:'500'}}
        placeholder='0'
        value={result}
          />
      </View>

      {/* btn Section*/}
      <View style={{ flex: 2 }}>
        <View style={styles.btnWrapper}>
          <Btn text={'C'} onPress={clearHandler}/>
          <Btn text={'%'} onPress={getData} />
          <Btn text={<Feather name='arrow-left' size={25} />} />
          <Btn text={'/'} onPress={getData} />
        </View>
        <View style={styles.btnWrapper}>
          <Btn text={7} onPress={getData}/>
          <Btn text={8} onPress={getData}/>
          <Btn text={9} onPress={getData}/>
          <Btn text={'x'} onPress={getData}/>
        </View>
        <View style={styles.btnWrapper}>
          <Btn text={4} onPress={getData}/>
          <Btn text={5} onPress={getData}/>
          <Btn text={6} onPress={getData}/>
          <Btn text={'-'} onPress={getData}/>
        </View>
        <View style={styles.btnWrapper}>
          <Btn text={1} onPress={getData}/>
          <Btn text={2} onPress={getData}/>
          <Btn text={3} onPress={getData}/>
          <Btn text={'+'} onPress={getData}/>
        </View>
        <View style={styles.btnWrapper}>
          <Btn text={'00'} onPress={getData}/>
          <Btn text={0} onPress={getData}/>
          <Btn text={'.'} onPress={getData}/>
          <Btn text={'='} onPress={onCalculate}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20
  }

});
