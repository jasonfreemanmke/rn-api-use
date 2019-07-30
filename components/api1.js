import { AsyncStorage } from 'react-native';


export let getAccessToken = async () =>
{
    let token: any = await AsyncStorage.getItem('token');
    return token;
}