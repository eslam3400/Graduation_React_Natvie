const server = "https://live-guard.herokuapp.com/api"
const headers = new Headers();
headers.append("Content-Type", "application/json")

exports.login = async (data) =>
  await fetch(`${server}/auth/login`, { method: 'POST', headers, body: JSON.stringify(data) })

exports.signup = async (data) =>
  await fetch(`${server}/auth/register`, { method: 'POST', headers, body: JSON.stringify(data) })