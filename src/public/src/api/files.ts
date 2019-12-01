import axios from "axios";
import { Right, Left } from "../types/Either";

export async function uploadFileForEvent(eventid: string, files: File[]) {
    //const formData = new FormData();
    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    // formData.append('file', files[0]);
    // const promises = [axios.post(`/api/event/${eventid}/file`, formData)];
    // console.log('single', formData);
    // const promises = files.map(file => axios.post(`/api/event/${eventid}/file`, file, {
    //     headers: { 'Content-Type': 'multipart/form-data' } 
    // }));

    const forms = files.map(x => {
        const fd = new FormData();
        // The first parameter is important!
        fd.append('file', x);
        return fd;
    });
    
    const promises = forms.map(file => axios.post(`/api/event/${eventid}/file`, file));

    return Promise.all(promises)
        .then(res => new Right(res))
        .catch(err => new Left(`failed to uploadfiles ${err}`));
}