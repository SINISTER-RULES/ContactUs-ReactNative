import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    header:{
      paddingTop: 50,
      paddingBottom: 15,
      textAlign: 'center',
      fontSize: 30,
      backgroundColor: '#4630EB',
      color: 'white',
    },
    boxContainers:{
      marginTop: 30
    },
    inputContainer: {
      margin: 20
    },
    labels: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 5,
      lineHeight: 25,
      fontWeight: "bold"
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.3)",
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    multiineStyle: {
      paddingVertical: 4,
    },
    buttonStyle: {
      width: '50%',
      alignSelf: 'center',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    buttonText: {
      color: "#eee",
      fontSize: 20
    },
  })

  export default styles;