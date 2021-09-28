import axios from 'axios'
import useSWR from 'swr'
import { useAuth } from '../contexts/auth'
export const apiUrl = 'http://127.0.0.1:8000/api/v1/pet/';

export default function useResource() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {
       
        try {
            const response = await axios.get(url);
            console.log('this is respond',response)
            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createResource(info) {
        console.log('hellooo from create');
        
        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id+'/';
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateResource(resource,id) {
        // STRETCH
        // Add ability for user to update an existing resource
        try {
            const url = apiUrl + id+'/';
            await axios.put(url,resource, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
        
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
        // logout();
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

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/