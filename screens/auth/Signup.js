import React from 'react'
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Api from '../../Api'
import Loading from '../../components/Loading';

const genderRadioButtons = [{
  id: '1',
  label: 'Male',
  value: 'Male',
  selected: true
}, {
  id: '2',
  label: 'Female',
  value: 'Female'
}]

function Signup() {
  const [email, setEmail] = React.useState(``)
  const [name, setName] = React.useState(``)
  const [password, setPassword] = React.useState(``)
  const [phone, setPhone] = React.useState(null)
  const [genderRadio, setGenderRadio] = React.useState(genderRadioButtons)
  const [gender, setGender] = React.useState(`Male`)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false)
  const [date_of_birth, setDOB] = React.useState(``)
  const [loading, setLoading] = React.useState(false)

  const signup = async () => {
    setLoading(true)
    const response = await Api.signup({ email, name, password, phone, gender, date_of_birth })
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
      alert(`Nice To Have U On Board ^^ \n Please Check Ur Email For Verification`)
    }
    else {
      setLoading(false)
      if (data.errors) alert(data.errors[0])
      else alert(data.message)
    }
  }

  function genderSelect(radioButtonsArray) {
    setGenderRadio(radioButtonsArray)
    setGender(radioButtonsArray[0].selected ? `Male` : `Female`);
  }

  const handleConfirm = (date) => {
    setDOB(date.toLocaleDateString())
    setDatePickerVisibility(false);
  };

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <Text style={style.header}>Signup</Text>
      <View style={style.form}>
        <TextInput style={style.input} onChangeText={setEmail} autoCapitalize='none' autoComplete='email' placeholder="Email" />
        <TextInput style={style.input} onChangeText={setName} autoCapitalize='words' autoComplete='name' placeholder="Name" />
        <TextInput style={style.input} onChangeText={setPassword} autoCapitalize='none' autoComplete='password' secureTextEntry={true} placeholder="Password" />
        <TextInput style={style.input} onChangeText={setPhone} autoComplete='tel' keyboardType="numeric" placeholder="Phone" />
        <RadioGroup radioButtons={genderRadio} onPress={genderSelect} layout="row" />
        <Pressable onPress={() => setDatePickerVisibility(true)}>
          <View style={style.dob}>
            <Text style={{ color: "blue" }}>Select Date Of Birth</Text>
            <Text>{date_of_birth}</Text>
          </View>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />
        <View style={{ marginTop: 20 }}>
          <Button onPress={signup} color="green" title="Signup" />
        </View>
        <View style={style.register}>
          <Text>Have Account Already?</Text>
          <Text style={{ color: "blue" }}>Login</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
  form: {
    marginTop: 20,
    width: '80%'
  },
  input: {
    height: 35,
    borderWidth: .5,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  dob: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  register: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  }
})

export default Signup