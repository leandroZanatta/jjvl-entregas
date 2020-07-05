import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';

export default class AutenticarEstabelecimento extends React.Component {

    render() {
        return (
            <View>
                <TextInput label="CNPJ:" />
                <TextInput label="Senha:" type="password" />
                <CheckBox
                    checked={true}
                    title='manter conectado'
                />
                <Button mode="contained" onPress={() => this.props.navigation.navigate('HomeEstabelecimento')}>
                    logar
      </Button>
                <Button mode="contained" onPress={() => this.props.navigation.navigate('Principal')}>
                    voltar
      </Button>
                <Button mode="contained" onPress={() => this.props.navigation.navigate('CadastroEstabelecimento')}>
                    cadastrar
      </Button>
            </View>

        );
    }
}