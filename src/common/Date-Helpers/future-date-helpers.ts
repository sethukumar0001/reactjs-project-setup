import { convertDateTime } from "@common/date-helpers";
import moment from "moment";

export function getDateInFuture(relativeDays: any, unit: any) {
  let futureDate = moment().add(relativeDays, unit);

  if (unit === "weeks" || unit === "months") {
    futureDate = futureDate.startOf(unit);
  } else if (unit === "days") {
    // For weekdays, excluding weekends
    while (futureDate.isoWeekday() === 6 || futureDate.isoWeekday() === 7) {
      futureDate = futureDate.add(1, "day");
    }
  }

  const formattedDate = convertDateTime(futureDate);

  return formattedDate;
}

// Usage examples:
const today = convertDateTime(moment());
const tomorrow = getDateInFuture(1, "days");
const twoBusinessDays = getDateInFuture(2, "days");
const threeBusinessDays = getDateInFuture(3, "days");
const oneWeek = getDateInFuture(1, "weeks");
const twoWeeks = getDateInFuture(2, "weeks");
const threeWeeks = getDateInFuture(3, "weeks");
const oneMonth = getDateInFuture(1, "months");
const twoMonths = getDateInFuture(2, "months");
const threeMonths = getDateInFuture(3, "months");

export const getFutureDateFunctions = () => {
  let array = [
    { label: "Today", value: today },
    { label: "Tomorrow", value: tomorrow },
    {
      label: "in two business days",
      value: twoBusinessDays,
    },
    {
      label: "in three business days",
      value: threeBusinessDays,
    },
    {
      label: "in 1 week",
      value: oneWeek,
    },
    {
      label: "in 2 weeks",
      value: twoWeeks,
    },
    {
      label: "in 3 weeks",
      value: threeWeeks,
    },
    {
      label: "in 1 month",
      value: oneMonth,
    },
    {
      label: "in 2 months",
      value: twoMonths,
    },
    {
      label: "in 3 months",
      value: threeMonths,
    },
    {
      label: "Custom Date",
      value: null,
      key: "custom_date",
    },
  ];
  return array;
};

