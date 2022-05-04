import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { NativeBaseProvider, Box, Button, Input } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Page2(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };


  return (
    <NativeBaseProvider>
    <View>
      <Text>Enter your Birthday</Text>

      <Button onPress={() => props.pageChange(3)}>Go Next</Button>
      <Button onPress={() => props.pageChange(1)}>Go Back</Button>

      <Text>Enter your birthday</Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      
    </View>
    </NativeBaseProvider>
  )
}