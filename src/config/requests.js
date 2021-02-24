import { http } from "./axios"

export default {

    post:(dataUser) =>{
        return http.post("dataUser", dataUser)
    }

}
