import AsyncStorage from '@react-native-async-storage/async-storage';

const server = "https://live-guard.herokuapp.com/api"
const headers = new Headers();

const loadToken = async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) headers.has("Authorization") ? null : headers.append("Authorization", `Bearer ${token}`)
}

headers.append("Content-Type", "application/json")
loadToken()

const login = async (data) => {
  loadToken()
  return await fetch(`${server}/auth/login`, { method: 'POST', headers, body: JSON.stringify(data) })
}

const signup = async (data) =>
  await fetch(`${server}/auth/register`, { method: 'POST', headers, body: JSON.stringify(data) })

const profile = async () =>
  await fetch(`${server}/account`, { method: 'GET', headers })

const editProfile = async (data) =>
  await fetch(`${server}/account`, { method: 'PUT', headers, body: JSON.stringify(data) })

const getChipsVersion = async () =>
  await fetch(`${server}/chip-versions/enable`, { method: 'GET', headers })

const getChipVersionDetails = async (id) =>
  await fetch(`${server}/chip-versions/${id}`, { method: 'GET', headers })

const linkChipToUser = async (data) =>
  await fetch(`${server}/chip-user`, { method: 'POST', headers, body: JSON.stringify(data) })

const getMyChips = async () => {
  loadToken()
  return await fetch(`${server}/chip-user`, { method: 'GET', headers })
}

const Api = {
  login,
  signup,
  profile,
  editProfile,
  getChipsVersion,
  getChipVersionDetails,
  linkChipToUser,
  getMyChips
}

export default Api