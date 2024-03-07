import { StyleSheet } from "react-native"



const Mainpagestyles = StyleSheet.create({
  View1: { height: "100%" },
  View2: {
    height: "8%",
    backgroundColor: "#1a282e",
    borderBottomColor: "#1a282e",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 5,
  },
  View3: { backgroundColor: "#1a282e", alignItems: "center", justifyContent: "center" },
  View4: { flexDirection: "row", marginLeft: "60%", justifyContent: 'space-between', padding: 5 },
  Text1: {
    fontSize: 20,
    color: "#a4dcf5",
    padding: 5,
    alignSelf: "center",
  },
  Text2: { color: "#a4dcf5", padding: 10 },
  Icon1: {
    alignSelf: "center",
    marginLeft: "2%"
  },
  Icon2: {
    marginLeft: "50%",
    alignSelf: "center"
  },
  overlayText: {
    color: "#a4dcf5",
    padding: 5
  },
  changeIcon: {
    color: "#a4dcf5",
    position: "absolute",
    marginLeft: "71%",
    fontSize: 18,
    top: 10,
    fontWeight: "500"
  },
  changeIcon1: {
    color: "#a4dcf5",
    position: "absolute",
    marginLeft: "73%",
    fontSize: 18,
    top: 10,
    fontWeight: "500"
  },
  colors: { color: "#a4dcf5", fontSize: 15, fontWeight: "300" },
  colors1: {
    color: "#a4dcf5",
    fontWeight: "bold",
    fontSize: 15

  },
  overlay1: {
    backgroundColor: "#1a282e",
    bottom: "36%",
    marginLeft: "57%",
    borderColor: "#a4dcf5",
    borderWidth: 1
  },
  overlay2: {
    backgroundColor: "#1a282e",
    width: "80%",
    borderColor: "#a4dcf5",
    borderWidth: 1,
    height: "10%",
    justifyContent:"center",
    alignItems:"center",
    marginRight:"8%"
  },
  overlay5: {
    backgroundColor: "#1a282e",
    width: "80%",
    borderColor: "#a4dcf5",
    borderWidth: 1,
    height: "15%",
    justifyContent:"center",
    alignItems:"center",
    marginRight:"8%"
  },
  Overlay3: { backgroundColor: "#1a282e", bottom: "42%", marginLeft: "63%", borderColor: "#a4dcf5", borderWidth: 1 },
  Overlay4: { backgroundColor: "#1a282e", borderColor: "#a4dcf5", borderWidth: 1, width: "75%" },
  textInput1: { backgroundColor: "#1a282e", width: "80%", alignSelf: "center", padding: 10, borderColor: "#a4dcf5", borderWidth: 1, color: "#a4dcf5" },
  transparent: { backgroundColor: "transparent" },
  row: { flexDirection: "row" },
  row1: { flexDirection: "row",marginTop:"24%" },
  tabStyle: { backgroundColor: "#1a282e", borderWidth: 1, elevation: 50, },
  overlayText:{ color: "#a4dcf5", padding: 10 },
  Text3:{padding:10,color: "#a4dcf5",},
  Text4:{paddingLeft:'55%',color:'#fc6f03'},
  Text5:{paddingLeft:50,color:'#73fc03'}
})
export default Mainpagestyles