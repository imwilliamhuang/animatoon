import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from '../style.js';

export default function Comanda({navigation}) {
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Saudações,</Text>
                    <Text style={styles.title}>William!</Text>
                </View>
                <MaterialIcons name="exit-to-app" size={24} color="black" />
            </View>

            <View>
                <TextInput style={styles.input} placeholder="ex: hora de aventura" />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produtos')}>
                    <Text style={styles.buttonText}>confirmar</Text>
                </TouchableOpacity>
            </View>

            <Text>Digite o desenho desejado para entrar em um mundo mágico 👾</Text>

        </View>
    )
}