import { convertDateTime } from "@common/date-helpers";
import moment from "moment";

export function getDateInPast(relativeDays: any, unit: any) {
  let pastDate = moment().subtract(relativeDays, unit);
  if (unit === "weeks" || unit === "months" || unit === "years") {
    pastDate = pastDate.startOf(unit);
  } else if (unit === "days") {
    // For weekdays, excluding weekends
    while (pastDate.isoWeekday() === 6 || pastDate.isoWeekday() === 7) {
      pastDate = pastDate.subtract(1, "day");
    }
  }
  const formattedDate = convertDateTime(pastDate);
  return formattedDate;
}

// Usage examples for past dates:
const yesterday = getDateInPast(1, "days");
const lastTwoBusinessDays = getDateInPast(2, "days");
const lastThreeBusinessDays = getDateInPast(3, "days");
const lastWeek = getDateInPast(1, "weeks");
const lastTwoWeeks = getDateInPast(2, "weeks");
const lastThreeWeeks = getDateInPast(3, "weeks");
const lastOneMonth = getDateInPast(1, "months");
const lastTwoMonths = getDateInPast(2, "months");
const lastThreeMonths = getDateInPast(3, "months");
const lastSixMonths = getDateInPast(6, "months");
const lastOneYear = getDateInPast(1, "years");

export const getFutureDateFunctions = () => {
  let array = [
    { label: "Yesterday", value: yesterday },
    { label: "Last 2 Business Days", value: lastTwoBusinessDays },
    {
      label: "Last 3 business days",
      value: lastThreeBusinessDays,
    },
    {
      label: "Last 1 week",
      value: lastWeek,
    },
    {
      label: "in 2 week",
      value: lastTwoWeeks,
    },
    {
      label: "in 3 weeks",
      value: lastThreeWeeks,
    },
    {
      label: "Last 1 month",
      value: lastOneMonth,
    },
    {
      label: "Last 2 months",
      value: lastTwoMonths,
    },
    {
      label: "Last 3 months",
      value: lastThreeMonths,
    },
    {
      label: "Last 6 months",
      value: lastSixMonths,
    },
    {
      label: "Last 1 Year",
      value: lastOneYear,
    },
    {
      label: "Custom Date",
      value: null,
      key: "custom_date",
    },
  ];
  return array;
};
