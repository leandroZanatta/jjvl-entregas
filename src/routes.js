
import React from 'react';
import Principal from './pages/principal/principal';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AutenticarEstabelecimento from './pages/estabelecimentos/autenticacao/autenticar-estabelecimento';
import AutenticarEntregador from './pages/entregadores/autenticacao/autenticar-entregador';
import CadastroEntregador from './pages/entregadores/cadastro/cadastro-entregador';
import CadastroEstabelecimento from './pages/estabelecimentos/cadastro/cadastro-estabelecimento';
import HomeEntregador from './pages/entregadores/menu/home';
import { Button } from 'react-native-paper';
import HomeEstabelecimento from './pages/estabelecimentos/menu/home';
import Produtos from './pages/estabelecimentos/produtos/produtos';
import CadastroProduto from './pages/estabelecimentos/produtos/cadastro-produto';
import Clientes from './pages/estabelecimentos/clientes/clientes';
import CadastroCliente from './pages/estabelecimentos/clientes/cadastro-cliente';
import Pedido from './pages/estabelecimentos/pedido/pedido';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator()

function DrawerEntregadores() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeEntregador} />
        </Drawer.Navigator>
    );
}
function StackProdutos() {
    return (
        <Stack.Navigator initialRouteName="ListarProdutos">
            <Stack.Screen name="ListarProdutos" component={Produtos} />
            <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
        </Stack.Navigator>
    );
}
function StackClientes() {
    return (
        <Stack.Navigator initialRouteName="ListarClientes">
            <Stack.Screen name="ListarClientes" component={Clientes} />
            <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        </Stack.Navigator>
    );
}
function StackPedido() {
    return (
        <Stack.Navigator initialRouteName="ListarPedidos">
            <Stack.Screen name="ListarPedidos" component={HomeEstabelecimento} />
            <Stack.Screen name="Pedido" component={Pedido} />
        </Stack.Navigator>
    );
}
function DrawerEstabelecimentos() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={StackPedido} />
            <Stack.Screen name="Produtos" component={StackProdutos} />
            <Stack.Screen name="Clientes" component={StackClientes} />
        </Drawer.Navigator>
    );
}

function StackEntregadores({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="AutenticarEntregador" >
            <Stack.Screen name="AutenticarEntregador" component={AutenticarEntregador} options={{ headerShown: false }} />
            <Stack.Screen name="CadastroEntregador" component={CadastroEntregador} />
            <Stack.Screen name="HomeEntregador" component={DrawerEntregadores} options={{
                headerRight: () => (
                    <Button onPress={() => navigation.navigate('Principal')} color="#CCC">
                        Sair
                    </Button>
                ),
                headerLeft: () => (
                    <Button icon="menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
                ),
            }} />
        </Stack.Navigator>

    );
}

function StackEstabelecimentos({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="AutenticarEstabelecimento" >
            <Stack.Screen name="AutenticarEstabelecimento" component={AutenticarEstabelecimento} options={{ headerShown: false }} />
            <Stack.Screen name="CadastroEstabelecimento" component={CadastroEstabelecimento} />
            <Stack.Screen name="HomeEstabelecimento" component={DrawerEstabelecimentos} options={{
                headerRight: () => (
                    <Button onPress={() => navigation.navigate('Principal')} color="#CCC">
                        Sair
                    </Button>
                ),
                headerLeft: () => (
                    <Button icon="menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
                ),
            }} />
        </Stack.Navigator>

    );
}

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Principal">
                <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
                <Stack.Screen name="Entregadores" component={StackEntregadores} options={{ headerShown: false }} />
                <Stack.Screen name="Estabelecimentos" component={StackEstabelecimentos} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
