import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default class CadastroEntregador extends React.Component {

    render() {
        return (
            <ScrollView>
              <TextInput label="Nome:" />
              <TextInput label="CPF:" />
              <TextInput label="Endereso:" />
              <TextInput label="Numero:" />
              <TextInput label="Bairro:" />
              <TextInput label="Estado:" />
              <TextInput label="Cidade:" />
              <TextInput label="Data Nascimento:" />
              <TextInput label="CNH:" />
              <TextInput label="Senha:" />
              <TextInput label="Confirmar Senha:" />
              <Button mode="contained" onPress={() => this.props.navigation.navigate('AutenticarEntregador')}>
                    cadastrar
      </Button>
            </ScrollView>
        );
    }
}