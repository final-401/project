import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = 'http://127.0.0.1:8000/api/v1/cart/item/';
import { useAuth } from '../contexts/auth'

export default function useResourceAddCart() {
    
    const { tokens, logout } = useAuth()
    
    const { data, error, mutate } = useSWR([apiUrl], fetchResource);
    
    async function fetchResource(url) {
        const acctoken = localStorage.getItem("access");
        if (!acctoken) {
            return;
        }

        try {
            console.log("12345678 here");
            const response = await axios.get(url, config());

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createResource(info) {

        try {
            const response = await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
            return response.data
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateResource(resource) {
        // STRETCH
        // Add ability for user to update an existing resource
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config() {
        let acctoken = localStorage.getItem("access");
        return {
            headers: {
                'Authorization': 'Bearer ' + acctoken
            }
        }
    }

    function handleError(error) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        updateResource,
    }
}