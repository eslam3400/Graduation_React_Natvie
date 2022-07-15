import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPadding: { paddingHorizontal: '10%' },
  fullWidth: { width: "100%" },
  marginVertical: { marginVertical: 5 },
  marginVertical2: { marginVertical: 10 },
  marginVertical3: { marginVertical: 15 },
  marginVertical4: { marginVertical: 20 },
  input: {
    height: 35,
    borderWidth: .5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  row: { flexDirection: "row" }
})

export default styles