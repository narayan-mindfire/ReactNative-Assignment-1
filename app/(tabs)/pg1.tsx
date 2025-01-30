import { View, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";


export default function PageOne(){

    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <Text style = {styles.header}>Sign in</Text>
                <View style = {styles.inpBox}>
                    <TextInput
                        style = {styles.inp}
                        placeholder="Email Address"
                    />
                    <TouchableOpacity
                        style = {[styles.btn, styles.btncnt]}
                    >
                        <Text style = {styles.btntxtcnt}>Continue</Text>
                    </TouchableOpacity>
                    <Text style = {{fontSize : 12}}>Don't have an account ? <Text style = {{fontWeight: '700'}}>Create one</Text></Text>
                </View>
                <View style = {styles.inpBox}>
                    <TouchableOpacity style={[styles.btn, styles.btnopt]}>
                        <View ><Image style = {styles.logo} source={require('@/assets/images/Group.png')} resizeMode = "contain"/></View>
                        <View style = {{flex : 1, alignItems : 'center'}}><Text style = {styles.btntxtoth}>Continue With Apple</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.btn, styles.btnopt]}>
                        <Image style = {styles.logo} source = {require('@/assets/images/Google.png')} resizeMode = "contain"/>
                        <View style = {{flex : 1, alignItems : 'center'}}><Text style = {styles.btntxtoth}>Continue with Google</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.btn, styles.btnopt]}>
                        <Image style = {styles.logo} source = {require('@/assets/images/Facebook.png')} resizeMode = "contain"/>
                        <View style = {{flex : 1, alignItems: 'center'}}><Text style = {styles.btntxtoth}>Continue with Facebook</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#FFFFFF',
        display : 'flex',
        width : '100%',
        padding : 20,
        marginHorizontal : 'auto',
        height : '100%',
    },
    header : {
        marginTop : 80,
        fontSize : 32,
        fontWeight : 700,
        fontFamily : 'Circular Std',
        lineHeight : 34.5,
    },
    inpBox : {
        marginTop : 20,
        width : '100%',
        height : 201,
        marginHorizontal : 'auto',
        flexDirection : 'column'
    },
    inp : {
        height : 56,
        width : '100%',
        borderRadius : 7,
        padding : 20,
        backgroundColor : '#F4F4F4',
    },
    btn : {
        height : 49,
        flexDirection : 'row',
        borderRadius : 20,
        alignItems : 'center',
        paddingHorizontal : 25,
    },
    btncnt : {
        backgroundColor : '#8E6CEF',
        marginVertical : 10,
        alignItems : 'center',
        justifyContent : 'center',
    },
    btnopt : {
        justifyContent : 'space-evenly',
        alignItems: 'center',
        marginVertical : 5,
        backgroundColor : '#F4F4F4',
    },
    btntxtcnt : {
        color : '#FFFFFF',
        fontWeight : '500',
        fontSize : 16,
    },
    btntxtoth : {
        fontWeight : '500',
        fontSize : 16,
    },
    logo : {
        height : 20,
        width : 24.59,
    },
})