import axios from 'axios'


const url = "http://localhost:8000/api/notes/";

export const getNotes = async () => {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        throw error
    }
}