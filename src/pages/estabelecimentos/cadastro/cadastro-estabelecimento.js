import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';


export default class CadastroEstabelecimento extends React.Component {

    render() {
        return (
            <ScrollView>
                <TextInput label="Nome Fantasia:" />
                <TextInput label="CPNJ:" />
                <TextInput label="Endereso:" />
                <TextInput label="Numero:" />
                <TextInput label="Bairro:" />
                <TextInput label="Estado:" />
                <TextInput label="Cidade:" />
                <TextInput label="Senha:" />
                <TextInput label="Confirmar Senha:" />
                <Button mode="contained" onPress={() => this.props.navigation.navigate('AutenticarEstabelecimento')}>

Cadastrar
                </Button>


            </ScrollView>
        );
    }
}