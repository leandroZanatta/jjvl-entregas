import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button mode="contained" onPress={() => navigation.navigate('Entregadores')}>
                Entregador
        </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Estabelecimentos')}>
                Estabelecimento
        </Button>
        </View>
    );
}

export default HomeScreen;