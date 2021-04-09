import axios from "axios";

/**
 * storeNewProject()
 *
 * @param {object} data
 */
export const storeNewProject = async (data) => {

  return await axios.post('/api/projects',{data})
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        return error;
    })
};