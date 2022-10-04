import axios from 'axios'



const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "97abb313-6a93-4c21-bc36-992e7141e14a" },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }

}


// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//   return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//      return response.data
//     })
// }