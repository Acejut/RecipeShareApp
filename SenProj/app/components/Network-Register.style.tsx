import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    content:
    {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "rgb(114, 185, 186)",
    },

    entry:
    {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "80%"
    },

    button:
    {
        width: "80%",
        alignSelf: "center",
        marginTop: "2%",
        marginBottom: "2%",
    },

    fields:{
        width: "90%",
        alignSelf: "center",
    },

    errorText:
    {
        fontSize: 15,
        alignSelf: "center",
    }
})

export default styles;