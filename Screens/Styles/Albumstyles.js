import { StyleSheet } from "react-native"

const Albumstyles = StyleSheet.create({
    View1: {
        marginTop: "0%"
    },
    container: {
        backgroundColor: "#1a282e",
        justifyContent: 'center'
    },
    container1: {
        backgroundColor: "#1a282e",
        flex:1
    },
    View5:{flex:1},
    albumContainer: {
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#EEE',

    },
    albumContainer1: {
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'grey',

    },
    albumTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    albumPhotos: {
        height: "90%",
    },
    photo: {
        width: 120,
        height: 120,
        margin: 5
    },
    height: {
        height: "100%"
    },
    TextInput1:{
        backgroundColor:"white"
    },
    text:{
        color:"white",
        fontSize:20,
        padding:5,
        marginLeft:5

    },
    text1:{
        color:"white",
        fontSize:20,
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        padding:10
    },
    row1:{
        flexDirection:"row",
        alignItems:"center",
        
    },
    View2:{
        padding:30,
        borderBottomColor:"#a4dcf5",
        borderBottomWidth:0.3
    },
    text2:{
        color:"white",
        width:"50%",
        fontSize:16
    },
    Icon2:{
        marginLeft:"60%",
        color:'white',
        elevation:10,
        backgroundColor:"grey",
        width:"12%",
        borderRadius:30,
        padding:2,
    },
    Icon3:{
        marginLeft:"61%",
        color:'green',
        elevation:10,
        backgroundColor:"#a4dcf5",
        width:"11%",
        borderRadius:30,
        padding:2
        
    },
    Icon4:{
        bottom:40,
        position:"absolute",
        marginLeft:"85%"
    }
})
export default Albumstyles