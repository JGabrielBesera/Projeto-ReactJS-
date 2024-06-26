import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Image } from 'expo-image'
import Button from './Button'


const HeaderUser = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.img} source={require('../assets/images/icon-pesquisar.png')} />
            <Text> João Gabriel de Faria Beserra</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        backgroundColor: '#B0A4A7',
        height: 60,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        border: 1 ,


    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 360,
        borderWidth: 1,
        marginEnd: 10
    }


})

export default HeaderUser