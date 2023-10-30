import { Client , Databases , Account } from "appwrite";

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '653fb0af508713af3190'
export const DATABASE_ID = '653fb5d9e02d7cfa00cd'
export const COLLECTION_ID_MESSAGES = '653fb6002055a4c3a18a'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;
