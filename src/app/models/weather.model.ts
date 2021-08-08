export class Weather{
    LocalObservationDateTime?: Date
    EpochTime?: number
    WeatherText?: string
    WeatherIcon?: number
    HasPrecipitation?: boolean
     PrecipitationType?: object
    LocalSource?: {
      Id: number,
      Name: string,
      WeatherCode: string
    }
    IsDayTime?: boolean
    Temperature?: {
      Metric: {
        Value: number,
        Unit: string,
        UnitType: number
      },
      Imperial: {
        Value: number,
        Unit: string,
        UnitType: number
      }
    }
}