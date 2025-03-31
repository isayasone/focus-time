import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import  {RoundedButton} from '../components/RoundedButton'
import  {spacing}  from '../utils/sizes'


export const Focus = ({addSubject}) => {
  const [subject, setSubject] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
          label="What would you like to foucs on?"
          onChangeText={setSubject}
        />
        <View  style={styles.button}> 
        <RoundedButton  title='+'  size={50}   onPress={()=>addSubject(subject)}  />
         </View>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection:'row'
  },
  textInput:{
  flex:1,
  marginRight:spacing.sm
  },
  button:{
    justifyContent:'center'
  }

});
