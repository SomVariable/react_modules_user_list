const getUsers = async (url) => {
  return await fetch(url).then(res => {
    return res.json()
  }).catch(err => console.warn(err))
}

export default getUsers;