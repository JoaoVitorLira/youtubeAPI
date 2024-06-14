import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bem_Vindo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={styles.BemVindo}>
                    Seja bem vindo(a)!
                </Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>
                    Assista o que quiser!
                </Text>
                <Text style={styles.text}>
                    Escolha a sua plataforma: Youtube ou Vimeo
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('rotaInterna')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
            
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#343434',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    BemVindo: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 12,
        color: "white",
        textAlign: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    }
});