import { google } from 'googleapis'

/// TODO
export default class GoogleSheets {
    public auth = new google.auth.GoogleAuth({
        keyFile: 'credential.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    })

    public sheets = async () => {
       try {
           return null
       }
       catch (e) {
           return null
       }
    }
}