import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2c577295-76a6-4359-90ab-7b313675fa27"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    usersProfile(id) {
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data
            })
    },
    currentUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    currentUserData(userId){
        return instance.get(`profile/`+userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
            .then(response => {
                console.log(response);
                return response.data
            })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },

    logout() {
        return instance.delete(`auth/login`)
    },

    savePhoto(photo){
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

