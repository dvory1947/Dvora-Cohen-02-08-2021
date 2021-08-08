export class DailyForecasts {

    Headline?: {
        EffectiveDate: Date
        EffectiveEpochDate: number
        Severity: number
        Text: string
        Category: string
        EndDate: Date
        EndEpochDate: number
        // "MobileLink": "http://www.accuweather.com/en/jp/suma-ku/218155/extended-weather-forecast/218155?lang=en-us",
        // "Link": "http://www.accuweather.com/en/jp/suma-ku/218155/daily-weather-forecast/218155?lang=en-us"
    }
    DailyForecasts?:
        [{
            Date?: Date
            EpochDate?: number
            Temperature?: {
                Minimum: {
                    Value: number
                    Unit: string
                    UnitType: number
                },
                Maximum: {
                    Value: number
                    Unit: string
                    UnitType: number
                }
            }
            Day?: {
                Icon: number,
                IconPhrase: string
                HasPrecipitation: boolean
                PrecipitationType: string
                PrecipitationIntensity: string
            }
            Night?: {
                Icon: number,
                IconPhrase: string
                HasPrecipitation: boolean
            }

            Sources?: string

        }]
}
