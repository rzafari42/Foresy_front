import axiosInstance from "./axios";
import { SignInInputs, SignUpInputs } from "../schemas/schemas";

export const googleAuth = async () => {


    const google_client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    const scope = "email profile";
    const responseType = "code";
    const prompt = "select_account";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${google_client_id}&redirect_uri=${redirectUri}/api/v1/auth/google_oauth2/callback&response_type=${responseType}&scope=${scope}&prompt=${prompt}`;

     window.location.href = authUrl;
} 

export const githubAuth = async () => {
    const github_client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI;

    const scope = "user:email";
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${github_client_id}&redirect_uri=${redirectUri}/api/v1/auth/github/callback&scope=${scope}`;
 
    window.location.href = authUrl;
}

export const SignInAPI = async (signInData : SignInInputs) => {
    return await axiosInstance.post('/api/v1/auth/login', signInData)
}


export const SignupAPI = async (signUpInputs : SignUpInputs) => {
    return await axiosInstance.post('/api/v1/signup', signUpInputs);

}

