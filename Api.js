import AsyncStorage from '@react-native-async-storage/async-storage';

const server = "https://live-guard.herokuapp.com/api"
const headers = new Headers();

const loadToken = async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) headers.has("Authorization") ? null : headers.append("Authorization", `Bearer ${token}`)
}

headers.append("Content-Type", "application/json")

const login = async (data) =>
  await fetch(`${server}/auth/login`, { method: 'POST', headers, body: JSON.stringify(data) })

const signup = async (data) =>
  await fetch(`${server}/auth/register`, { method: 'POST', headers, body: JSON.stringify(data) })

const forgetPassword = async (data) =>
  await fetch(`${server}/auth/forgot-password`, { method: 'POST', headers, body: JSON.stringify(data) })

const profile = async () => {
  loadToken()
  return await fetch(`${server}/account`, { method: 'GET', headers })
}

const editProfile = async (data) =>
  await fetch(`${server}/account`, { method: 'PUT', headers, body: JSON.stringify(data) })

const getChipsVersion = async () =>
  await fetch(`${server}/chip-versions/enable`, { method: 'GET', headers })

const getChipVersionDetails = async (id) =>
  await fetch(`${server}/chip-versions/${id}`, { method: 'GET', headers })

const getChipVersionReviews = async (id) =>
  await fetch(`${server}/reviews/${id}`, { method: 'GET', headers })

const addChipVersionReview = async (data) =>
  await fetch(`${server}/reviews`, { method: 'POST', headers, body: JSON.stringify(data) })

const getChipVersionQuestion = async (id) =>
  await fetch(`${server}/questions/${id}`, { method: 'GET', headers })

const addChipVersionQuestion = async (data) =>
  await fetch(`${server}/questions`, { method: 'POST', headers, body: JSON.stringify(data) })

const linkChipToUser = async (data) =>
  await fetch(`${server}/chip-user`, { method: 'POST', headers, body: JSON.stringify(data) })

const getMyChips = async () => {
  loadToken()
  return await fetch(`${server}/chip-user`, { method: 'GET', headers })
}

const getChipSetting = async (id) =>
  await fetch(`${server}/chip-user/${id}`, { method: 'GET', headers })

const updateChipSettings = async (data) => {
  const newHeaders = { ...headers }
  delete newHeaders.map["content-type"]
  return await fetch(`${server}/chip-user/info`, { method: 'PUT', headers: newHeaders, body: data })
}

const getChipUsers = async (id) =>
  await fetch(`${server}/chip-user/chip/${id}`, { method: 'GET', headers })

const addUserToChip = async (data) =>
  await fetch(`${server}/chip-user/add-new-user`, { method: 'POST', headers, body: JSON.stringify(data) })

const Api = {
  login,
  signup,
  forgetPassword,
  profile,
  editProfile,
  getChipsVersion,
  getChipVersionDetails,
  getChipVersionReviews,
  addChipVersionReview,
  getChipVersionQuestion,
  addChipVersionQuestion,
  linkChipToUser,
  getMyChips,
  getChipSetting,
  updateChipSettings,
  getChipUsers,
  addUserToChip
}

export default Api