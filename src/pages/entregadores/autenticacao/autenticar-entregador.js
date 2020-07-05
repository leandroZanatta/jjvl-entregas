import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default class AutenticarEntregador extends React.Component {

    render() {
        return (
            <View>
                <TextInput label="CPF:" />
                <TextInput label="Senha:" type="password" />
                <Button mode="contained" onPress={() => this.props.navigation.navigate('HomeEntregador')}>
                    logar
      </Button>
                <Button mode="contained" onPress={() => this.props.navigation.navigate('Principal')}>
                    voltar
      </Button>
                <Button mode="contained" onPress={() => this.props.navigation.navigate('CadastroEntregador')}>
                    cadastrar
      </Button>
            </View>
        );
    }
}