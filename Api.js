import AsyncStorage from '@react-native-async-storage/async-storage';

const server = "https://live-guard.herokuapp.com/api"
const headers = new Headers();

const loadToken = async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) headers.has("Authorization") ? null : headers.append("Authorization", `Bearer ${token}`)
}

headers.append("Content-Type", "application/json")
loadToken()

exports.login = async (data) => {
  loadToken()
  return await fetch(`${server}/auth/login`, { method: 'POST', headers, body: JSON.stringify(data) })
}

exports.signup = async (data) =>
  await fetch(`${server}/auth/register`, { method: 'POST', headers, body: JSON.stringify(data) })

exports.profile = async () =>
  await fetch(`${server}/account`, { method: 'GET', headers })

exports.editProfile = async (data) =>
  await fetch(`${server}/account`, { method: 'PUT', headers, body: JSON.stringify(data) })

exports.getChipsVersion = async () =>
  await fetch(`${server}/chip-versions/enable`, { method: 'GET', headers })

exports.getChipVersionDetails = async (id) =>
  await fetch(`${server}/chip-versions/${id}`, { method: 'GET', headers })