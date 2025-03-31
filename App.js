import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import React, { useState } from 'react';
import {Timer} from './src/features/Timer';
import  {FocusHistory} from './src/features/FocusHistory'
export default function App() {
  const [currentSubect, setCurrentSubject] = useState(null);
 const [ history, setHistory]= useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubect ? (<>
        <Focus  addSubject={setCurrentSubject} />
        <FocusHistory history={history}/>
        </>
      ) : (
        <Timer
         focusSubject={currentSubect}
         onTimerEnd={(subject)=>{
           setHistory([...history,subject])
         }}
         clearSubject={()=>{setCurrentSubject(null)}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    paddingHorizontal: Platform.OS !== 'ios' ? 10 : 0,

    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});
