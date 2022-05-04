import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button } from "native-base";

export default function Home() {
  return (
    <NativeBaseProvider>
        <Box>Welcome</Box>

        <View>
        
        <Button onPress={() => props.pageChange(2)}>Continue</Button>
        </View>
    </NativeBaseProvider>
  )
}