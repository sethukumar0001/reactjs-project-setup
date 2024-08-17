// https://stackoverflow.com/questions/32540667/moment-js-utc-to-local-time
import { getValue } from "@utils/lodash";
import moment from "moment-timezone";
import "moment-timezone";

let user = getValue(localStorage, `user`, "")
  ? JSON.parse(getValue(localStorage, `user`, {}))
  : {};
let timezone = getValue(user, `user_timezone`, "")
  ? getValue(user, `user_timezone`, "")
  : "Asia/Kolkata";

export const todayDate = (date: any) => {
  if (date) {
    return new Date(moment(date).format("YYYY-MM-DD"));
  }
};

export const getDiffInDates = (date: any, days: any) => {
  if (date && days >= 0) {
    var d = date;
    d.setDate(d.getDate() - days);
    return d;
  }
};

export const getAdditionInDates = (date: any, days: any) => {
  if (date && days) {
    var d = date;
    d.setDate(d.getDate() + days);
    return d;
  }
};

export const convertDate = (date: any) => {
  if (date) {
    return moment(date).format("YYYY-MM-DD");
  } else {
    return null;
  }
};
export const convertDateAsString = (date: any) => {
  if (date) {
    return moment(date).format("DD MMM YYYY");
  } else {
    return null;
  }
};

export const convertCurrentDate = (date: any) => {
  if (date) {
    return moment(date).tz(timezone).format("DD MMM YYYY");
  } else {
    return "";
  }
};

export const convertCurrentDateWithTime = (date: any) => {
  if (date) {
    return moment(date).tz(timezone).format("DD MMM YYYY, hh:mm a");
  } else {
    return null;
  }
};

export const convertCurrentDateToTime = (date: any) => {
  if (date) {
    return moment(date).tz(timezone).format("hh:mm a");
  } else {
    return null;
  }
};

export const currentDate = () => {
  return Date.now();
};

export const NewDate = (date: any) => {
  if (date) {
    return new Date(date);
  } else {
    return null;
  }
};

export const convertDateTime = (time: any) => {
  const formattedTime = moment(time).utc().toISOString();
  return formattedTime;
};

export const formatDateToHoursAgo = (dateString: any) => {
  const currentDate = moment();
  const providedDate = moment(dateString);

  const daysAgo = currentDate.diff(providedDate, "days");
  const remainingHours = currentDate.diff(providedDate, "hours") % 24;
  const remainingMinutes = currentDate.diff(providedDate, "minutes") % 60;

  let formattedString = "";

  if (daysAgo > 0) {
    formattedString += `${daysAgo} ${daysAgo === 1 ? "day" : "days"}`;
    if (remainingHours > 0 || remainingMinutes > 0) formattedString += " ";
  }

  if (remainingHours > 0) {
    formattedString += `${remainingHours} ${
      remainingHours === 1 ? "hour" : "hours"
    }`;
    if (remainingMinutes > 0) formattedString += " ";
  }

  if (remainingMinutes > 0) {
    formattedString += `${remainingMinutes} ${
      remainingMinutes === 1 ? "minute" : "minutes"
    }`;
  }

  if (formattedString.length === 0) {
    return "Less than a minute ago";
  } else {
    return `${formattedString} ago`;
  }
};
export const getThirdDayFromDate = () => {
  const thirdDay = moment().clone().add(2, "days");
  return thirdDay.toDate();
};
export function getDateTime15MinutesBefore(date: any) {
  let convertedDate = date.clone().subtract(15, "minutes").toDate();
  return convertDateTime(convertedDate);
}
export function getDateTime30MinutesBefore(date: any) {
  let convertedDate = date.clone().subtract(30, "minutes").toDate();
  return convertDateTime(convertedDate);
}

export function getDateTime1HourBefore(date: any) {
  let convertedDate = date.clone().subtract(1, "hours").toDate();
  return convertDateTime(convertedDate);
}

export function getDate1DayBefore(date: any) {
  let convertedDate = date.clone().subtract(1, "days").toDate();
  return convertDateTime(convertedDate);
}

export function getDate1WeekBefore(date: any) {
  let convertedDate = date.clone().subtract(1, "weeks").toDate();
  return convertDateTime(convertedDate);
}

//date picker

export function getTodayDate() {
  const today = moment();
  const formattedStartDate = today.format("YYYY-MM-DD");
  return `${formattedStartDate},${formattedStartDate}`;
}

export function getLastWeekDate() {
  const lastWeek = moment().subtract(1, "weeks");
  const formattedStartDate = lastWeek.format("YYYY-MM-DD");
  const formattedEndDate = moment().format("YYYY-MM-DD");
  return `${formattedStartDate},${formattedEndDate}`;
}

export function getStartOfMonthDate() {
  const startOfMonth = moment().startOf("month");
  const endOfMonth = moment().endOf("month");
  const formattedStartDate = startOfMonth.format("YYYY-MM-DD");
  const formattedEndDate = endOfMonth.format("YYYY-MM-DD");
  return `${formattedStartDate},${formattedEndDate}`;
}

export function getStartOfYearDate() {
  const startOfYear = moment().startOf("year");
  const endOfMonth = moment().endOf("year");
  const formattedStartDate = startOfYear.format("YYYY-MM-DD");
  const formattedEndDate = endOfMonth.format("YYYY-MM-DD");
  return `${formattedStartDate},${formattedEndDate}`;
}

export const getDateFunctions = () => {
  let array = [
    { label: "Today", value: getTodayDate(), old: "Previous Value" },
    { label: "Last week", value: getLastWeekDate(), old: "Previous Value" },
    {
      label: "This month",
      value: getStartOfMonthDate(),
      old: "Last Month",
    },
    {
      label: "This Year",
      value: getStartOfYearDate(),
      old: "Last Year",
    },
  ];
  return array;
};

export const formatDateRange = (date: string) => {
  let dates = date.split(",");
  return `${convertDateAsString(dates[0])} - ${convertDateAsString(dates[1])}`;
};
export function addHour(time: any, hour: any) {
  return moment(time, "hh A").tz(timezone).add(hour, "hour").format("hh A");
}
export function formatTime(date: any) {
  return moment(date).tz(timezone).format("hh A");
}

// export function addHour(time: string, hour: number): string {
//   // Parse the UTC time with moment-timezone
//   const utcTime = moment.tz(time, "hh A", "UTC");
//   // Add the specified number of hours
//   const newTime = utcTime.add(hour, "hour");
//   // Convert to Asia/Kolkata timezone and format
//   if (timezone) {
//     return newTime.tz(timezone).format("hh A");
//   } else {
//     return newTime.local().format("hh A");
//   }
// }

// export function formatTime(date: string): string {
//   // Parse the UTC time with moment-timezone (assuming date is also in UTC)
//   const utcTime = moment.tz(date, moment.ISO_8601, "UTC");
//   // Convert to Asia/Kolkata timezone and format
//   if (timezone) {
//     return utcTime.tz(timezone).format("hh A");
//   } else {
//     return utcTime.local().format("hh A");
//   }
// }

export const formatDatetoDay = (date: any) => {
  const parsedDate = moment(date);

  if (parsedDate.isSame(moment(), "day")) {
    // return "Today";
    return convertCurrentDateToTime(date);
  }

  if (parsedDate.isSame(moment().subtract(1, "day"), "day")) {
    return "Yesterday";
  }

  if (parsedDate.isSame(moment(), "week")) {
    return parsedDate.format("dddd"); // Returns the day of the week, e.g., "Monday"
  }

  return parsedDate.format("DD/MM/YYYY"); // Returns the date in the format YYYY-MM-DD
};
