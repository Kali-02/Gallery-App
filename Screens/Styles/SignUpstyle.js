import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "rgba(139, 214, 247,0.5)",
        flex: 1
    },
    View1: {
        alignItems: "center",
        marginTop: "30%",
        backgroundColor: "rgba(255 , 255, 255,0.6)",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
        height: "8%",
        justifyContent: "center",
        flexDirection: "row",
        borderRightColor: "black",
        borderRightWidth: 2,
        borderLeftColor: "black",
        borderLeftWidth: 2,

    },
    Text1: {
        color: "#121b22",
        fontSize: 25,
        fontWeight: "800",
        paddingLeft: 10
    },
    textInput: {
        backgroundColor: "rgba(255 , 255, 255,0.6)",
        alignSelf: "center",
        width: "80%",
        padding:12,
        borderRadius: 10,
        borderRightColor: "black",
        borderRightWidth: 2,
        borderLeftColor: "black",
        borderLeftWidth: 2
    },
    View2: {
        marginTop: "10%",
    },
    Text2: {
        fontSize: 20,
        marginLeft: "10%",
        bottom: "3%",
        color: "#121b22"
    },
    View3: {
        marginTop: "3%"
    },
    button: {
        backgroundColor: "#016a8c",
        width: "50%",
        alignSelf: "center",
        marginTop: "10%",
        borderRadius: 10,
        borderRightColor: "black",
        borderRightWidth: 2,
        borderLeftColor: "black",
        borderLeftWidth: 2
    },
    buttonTitle: {
        color: "white"
    },
    height:{height:"100%"},
    text3:{ alignSelf: "center", marginTop: "3%", fontSize: 15, textDecorationLine: "underline", textDecorationStyle: "solid", fontWeight: "600" }


})
export default styles