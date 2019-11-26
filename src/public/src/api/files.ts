import axios from "axios";
import { Right, Left } from "../types/Either";

export async function uploadFileForEvent(eventid: string, files: File[]) {
    const promises = files.map(file => axios.post(`/api/event/${eventid}/file`, { file }));
    return Promise.all(promises)
        .then(res => new Right(res))
        .catch(err => new Left(err));
}