import { Company } from "../types/Company";
import axios from "axios";
import { Right, Left, Either } from "../types/Either";

export async function createCompany(company: Company): Promise<Either<string, Company>> {
    const { data } = await axios.post('/api/company', { ...company });
    return data.error ? new Left(data.message) : new Right(data.company);
}

export async function getCompanyById(id: string) {
    const { data } = await axios.get(`/api/company/${id}`);
    return data.error ? new Left(data.message) : new Right(data.company);
}



