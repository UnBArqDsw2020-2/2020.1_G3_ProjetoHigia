import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    container1:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    form: {
        width: "80%",
    },

    text:{
        marginBottom: 30,
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30,
    },

    text1:{
        marginBottom: 20,
        alignSelf: "center",
        color: "#7E162B",
        fontSize: 15,
    },

    inputText:{
        backgroundColor: "#FFF",
        borderColor: "#7E162B",
        fontSize: 15,
        padding: 7,
        marginBottom: 15,
        borderBottomWidth: 1.0,
    },

    btn:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#7E162B",
        alignSelf: "center",
        marginTop: 20,
        marginHorizontal: 20,
    },

    btnText:{
        textAlign:'center',
        fontWeight: "bold",
        fontSize: 15,
        color: "#FFF",
    }


});

export default styles;
