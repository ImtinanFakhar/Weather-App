import React from 'react'
import { View, Text, StyleSheet,ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main

  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message,
    image
  } = styles

  return (
    <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}
      >
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  temperature: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'white'
  },
  hiLow: {
    color: 'white',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43,
    color: 'white'

  },
  message: {
    fontSize: 25,
    color: 'white'
  },image: {
    flex: 1
  }
})
export default CurrentWeather