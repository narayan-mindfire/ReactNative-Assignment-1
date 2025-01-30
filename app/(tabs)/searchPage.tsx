import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native"

export default function SearchPage(){

    return(
        <View style = {styles.container}>
            <View style = {styles.top}>
                <TouchableOpacity>
                    <View style={styles.bbtn}>
                        <Image 
                            source={require('@/assets/icons/arrowleft2.png')}
                        />
                    </View>
                </TouchableOpacity>
                <TextInput
                    style = {styles.inp}
                    clearButtonMode="always"
                    placeholder="Search"
                />
            </View>
            <Text style = {styles.heading}>Shop by Categories</Text>
            <View style = {styles.catBox}>
                <View style = {styles.catCard}>
                    <Image
                        style = {styles.caticon}
                        resizeMode = 'contain'
                        source={require('@/assets/images/hoodie.png')}
                        />
                    <Text style = {styles.cattxt}>Hoodies</Text>
                </View>
                <View style = {styles.catCard}>
                    <Image
                        style = {styles.caticon}
                        resizeMode = 'contain'
                        source={require('@/assets/images/Accessories.png')}
                        />
                        <Text style = {styles.cattxt}>Accessories</Text>
                </View>
                <View style = {styles.catCard}>
                    <Image
                        style = {styles.caticon}
                        resizeMode = 'contain'
                        source={require('@/assets/images/Shorts.png')}
                        />
                        <Text style = {styles.cattxt}>Shorts</Text>
                </View>
                <View style = {styles.catCard}>
                    <Image
                        style = {styles.caticon}
                        resizeMode = 'contain'
                        source={require('@/assets/images/Shoes.png')}
                        />
                        <Text style = {styles.cattxt}>Shoes</Text>
                </View>
                <View style = {styles.catCard}>
                    <Image
                        style = {styles.caticon}
                        resizeMode = 'contain'
                        source={require('@/assets/images/Bags.png')}
                    />
                    <Text style = {styles.cattxt}>Bags</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 24,
    },
    top : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 66,
        gap : 9,
    },
    bbtn: {
        backgroundColor: '#F4F4F4',
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems : 'center',
        justifyContent : 'center',
    },
    inp : {
        padding : 10,
        backgroundColor : '#F4F4F4',
        width : 293,
        height : 40,
        borderRadius : 100,
    },
    heading : {
        fontWeight : '700',
        height : 29,
        fontSize : 24,
        marginTop : 34,
    },
    catBox : {
        marginHorizontal : 'auto',
        marginTop : 14,
        height : 342, 
        width : '100%',
        flexDirection : 'column',
        justifyContent : 'space-between',
    },
    catCard : {
        backgroundColor : '#F4F4F4',
        padding : 12,
        height : 64,
        width : '100%',
        borderRadius : 8,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },
    caticon : {
        height : 40,
        width : 40,
    },
    cattxt : {
        fontWeight : '400',
        fontSize : 16,
        lineHeight : 20.24,
        marginLeft : 16,
    }
})