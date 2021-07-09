require('dotenv').config()
import { Request, Response, NextFunction } from 'express'
import { google } from 'googleapis'

export default class GoogleSheetsController {
    private readonly auth

    public constructor() {
        this.auth = new google.auth.GoogleAuth({
            keyFile: 'credential.json',
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        })
    }

    public show = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const client = await this.auth.getClient()
            const googleSheets = google.sheets({ version: 'v4', auth: client })

            const request = {
                auth: this.auth,
                spreadsheetId: process.env.gs_spreadsheet_id,
                range: 'Лист1'
            }

            const metaData = await googleSheets.spreadsheets.values.get(request)

            res.json(metaData.data)
        }
        catch (error) {
            res.json({
                'Error message': error
            })
        }
    }

    public add = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, login } = req.body

            const client = await this.auth.getClient()
            const googleSheets = google.sheets({ version: 'v4', auth: client })

            const request = {
                auth: this.auth,
                spreadsheetId: process.env.gs_spreadsheet_id,
                range: 'Лист1!A:B',
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: [[name, login]]
                }
            }

            const metaData = await googleSheets.spreadsheets.values.append(request)

            res.json(metaData.data)
        }
        catch (error) {
            res.json({
                'Error message': error
            })
        }
    }
}


