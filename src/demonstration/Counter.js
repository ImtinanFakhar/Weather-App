import React, {useState, useEffect} from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'


const Counter = () => {
  
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`our count is ${count}`)
    })

  return (
   <View style={styles.container}>
        <Text style={styles.title}>{`count: ${count}`}</Text>
        <Button title={"increment"} color={'red'} onPress={() => setCount(count + 1 )}/>
        <Button title={"decrement"} color={'green'} onPress={() => setCount(count - 1 )}/>
   </View>
  )
}
const styles = StyleSheet.create({
 container: {
     flex: 1,
     backgroundColor: 'orange',
 },
 title: {
     fontSize: 25,
     color: 'black',
     alignSelf: 'center',
     marginTop: 25,
 }
})
export default Counter
