import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import ListCamisetas from './screens/ListCamisetas';
import ListBones from './screens/ListBones';
import Splash from './screens/Splash';
import ListBolsas from './screens/ListBolsas';
import EditarProduto from './screens/EditarProduto';
import CadastrarProduto from './screens/CadastrarProdutos';
import Login from './screens/Login';
import CadastrarUser from './screens/CadastrarUser';
import Favoritos from './screens/Favoritos';
import Perfil from './screens/Perfil';
import EditarUser from './screens/EditarUser';
import { Feather } from '@expo/vector-icons'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CadastrarUser"
        component={CadastrarUser}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ListCamisetas"
        component={ListCamisetas}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="ListBones"
        component={ListBones}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="ListBolsas"
        component={ListBolsas}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="EditarProduto"
        component={EditarProduto}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CadastrarProduto"
        component={CadastrarProduto}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>

  )
}

function PerfilNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="CadastrarUser"
        component={CadastrarUser}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EditarUser"
        component={EditarUser}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>

  )
}

const App = () => {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTitleStyle: { color: "#FFF" },
        tabBarShowLabel: false
      }}>
        <Tab.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Feather name="home" color={{ color: "#000" }} size={25} />
            )
          }}
        />
        <Tab.Screen name="MainDois"
          component={PerfilNavigator} options={{
            headerShown: false,
            tabBarIcon: () => (
              <Feather name="user" size={24} color="black" />
            )
          }} />
        <Tab.Screen name="MainTres" component={Favoritos} options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="heart" size={24} color="black" />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#aaaaaa',

  }

});


export default App