import mockdata from '../mockdata.json';

type LoginResult = {
    skdfjlsdf: "sdf"
};

async function login(username: string, password: string): Promise<LoginResult> {
    const res = await fetch('/api/');
    return {
        skdfjlsdf: "sdf"
    };
}

const API = {
    login,
    
};

export default API;

