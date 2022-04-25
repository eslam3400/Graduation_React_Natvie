const server = "https://live-guard.herokuapp.com/api"
const headers = new Headers();
headers.append("Content-Type", "application/json")

exports.login = async (data) =>
  await fetch(`${server}/auth/login`, { method: 'POST', headers, body: JSON.stringify(data) })

exports.signup = async (data) =>
  await fetch(`${server}/auth/register`, { method: 'POST', headers, body: JSON.stringify(data) })

exports.profile = async (token) => {
  headers.has("Authorization") ? null : headers.append("Authorization", `Bearer ${token}`)
  return await fetch(`${server}/account`, { method: 'GET', headers })
}

exports.editProfile = async (data) =>
  await fetch(`${server}/account`, { method: 'PUT', headers, body: JSON.stringify(data) })

exports.getChipsVersion = async (token) => {
  headers.has("Authorization") ? null : headers.append("Authorization", `Bearer ${token}`)
  return await fetch(`${server}/chip-versions/enable`, { method: 'GET', headers })
}