import * as Keychain from 'react-native-keychain';

export const saveToken = async (token) => await Keychain.setGenericPassword('token', token);

export const getToken = async () => {
	const credentials = await Keychain.getGenericPassword();
	
	return credentials ? credentials.password : null;
};

export const clearToken = async () => await Keychain.resetGenericPassword();