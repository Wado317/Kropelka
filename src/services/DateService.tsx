import moment from "moment";

import Moment from 'moment'

export default class DateService {
  public static getCurrentTimestamp():number {
    const timestamp = Moment().valueOf()
    console.warn(timestamp);
    return timestamp
  }
}