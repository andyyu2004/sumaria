import { Company } from "../types/Company";
import axios from "axios";
// unused: Left
import { Right, Either } from "../types/Either";
import { apiErrorHandler } from "./util";

export async function createCompany(company: Company): Promise<Either<string, Company>> {
    return axios.post('/api/company', { ...company })
        .then<any>(({ data }) => new Right(data.company))
        .catch(apiErrorHandler);
}

export async function getCompanyById(id: string): Promise<Either<string, Company>> {
    return axios.get(`/api/company/${id}`)
        .then<any>(({ data }) => new Right(data.company))
        .catch(apiErrorHandler);
}



