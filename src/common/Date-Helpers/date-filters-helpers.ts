import { getStartOfMonthDate } from "@common/date-helpers";
import moment from "moment";

const convertDateTime = (times: any[]) => {
  const formattedTimes = times.map((time) =>
    moment(time).utc().format("YYYY-MM-DD")
  );
  return formattedTimes.join(",");
};

export const dateFilters = [
  {
    value: convertDateTime([moment(), moment()]),
    label: "Today",
    desc: "Today",
  },
  {
    value: convertDateTime([
      moment().subtract(1, "day"),
      moment().subtract(1, "day"),
    ]),
    label: "Yesterday",
    desc: "The previous day",
  },
  {
    value: convertDateTime([
      moment().startOf("week"),
      moment().startOf("week").add(6, "day"),
    ]),
    label: "This week",
    desc: "This current calendar week",
  },
  {
    value: convertDateTime([
      moment().subtract(1, "week").startOf("week"),
      moment().subtract(1, "week").startOf("week").add(6, "day"),
    ]),
    label: "Last week",
    desc: "The previous calendar week",
  },
  {
    value: convertDateTime([
      moment().add(1, "week").startOf("week"),
      moment().add(1, "week").startOf("week").add(6, "day"),
    ]),
    label: "Next week",
    desc: "The next calendar week",
  },
  {
    value: getStartOfMonthDate(),
    label: "This month",
    desc: "This current calendar month",
  },
  {
    value: convertDateTime([
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ]),
    label: "Last month",
    desc: "The previous month",
  },
  {
    value: convertDateTime([
      moment().add(1, "month").startOf("month"),
      moment().add(1, "month").endOf("month"),
    ]),
    label: "Next month",
    desc: "The next calendar month",
  },
  {
    value: convertDateTime([
      moment().startOf("quarter"),
      moment().endOf("quarter"),
    ]),
    label: "This quarter",
    desc: "This current quarter",
  },
  {
    value: convertDateTime([
      moment().subtract(1, "quarter").startOf("quarter"),
      moment().subtract(1, "quarter").endOf("quarter"),
    ]),
    label: "Last quarter",
    desc: "The previous full quarter",
  },
  {
    value: convertDateTime([
      moment().add(1, "quarter").startOf("quarter"),
      moment().add(1, "quarter").endOf("quarter"),
    ]),
    label: "Next quarter",
    desc: "The next full quarter",
  },
  {
    value: convertDateTime([moment().startOf("year"), moment().endOf("year")]),
    label: "This year",
    desc: "This current year",
  },
  {
    value: convertDateTime([
      moment().subtract(1, "year").startOf("year"),
      moment().subtract(1, "year").endOf("year"),
    ]),
    label: "Last year",
    desc: "The previous calendar year",
  },
  {
    value: convertDateTime([
      moment().add(1, "year").startOf("year"),
      moment().add(1, "year").endOf("year"),
    ]),
    label: "Next year",
    desc: "The next calendar year",
  },
  {
    value: convertDateTime([moment().subtract(6, "days"), moment()]),
    label: "Last 7 days",
    desc: "The previous 7 days before today",
  },
  {
    value: convertDateTime([
      moment().subtract(13, "days"),
      moment().subtract(7, "days"),
    ]),
    label: "Last 14 days",
    desc: "The previous 14 days before today",
  },
  {
    value: convertDateTime([moment().subtract(29, "days"), moment()]),
    label: "Last 30 days",
    desc: "The previous 30 days before today",
  },
  {
    value: convertDateTime([moment().subtract(59, "days"), moment()]),
    label: "Last 60 days",
    desc: "The previous 60 days before today",
  },
  {
    value: convertDateTime([moment().subtract(89, "days"), moment()]),
    label: "Last 90 days",
    desc: "The previous 90 days before today",
  },
  {
    value: convertDateTime([moment().subtract(179, "days"), moment()]),
    label: "Last 180 days",
    desc: "The previous 180 days before today",
  },
  {
    value: convertDateTime([moment().subtract(364, "days"), moment()]),
    label: "Last 365 days",
    desc: "The previous 365 days before today",
  },
  {
    value: 'custom',
    label: "Custom",
    desc: "Customize date",
  },
];

// import moment from "moment";

// const convertDateTime = (time:any) => {
//   const formattedTime = moment(time).utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
//   return formattedTime;
// };

// export const dateFilters = [
//   {
//     value: convertDateTime(moment().startOf('week')),
//     label: "This week",
//     desc: "This current calendar week",
//   },
//   // {
//   //   value: convertDateTime(moment().startOf('week')),
//   //   label: "This week so far",
//   //   desc: "This current calendar week up to now",
//   // },
//   {
//     value: convertDateTime(moment().subtract(1, "week").startOf('week')),
//     label: "Last week",
//     desc: "The previous calendar week",
//   },
//   {
//     value: convertDateTime(moment().add(1, "week").startOf('week')),
//     label: "Next week",
//     desc: "The next calendar week",
//   },
//   {
//     value: convertDateTime(moment().startOf('month')),
//     label: "This month",
//     desc: "This current calendar month",
//   },
//   // {
//   //   value: convertDateTime(moment().startOf('month')),
//   //   label: "This month so far",
//   //   desc: "This current calendar month up to now",
//   // },
//   {
//     value: convertDateTime(moment().subtract(1, "month").startOf('month')),
//     label: "Last month",
//     desc: "The previous month",
//   },
//   {
//     value: convertDateTime(moment().add(1, "month").startOf('month')),
//     label: "Next month",
//     desc: "The next calendar month",
//   },
//   {
//     value: convertDateTime(moment().startOf('quarter')),
//     label: "This quarter",
//     desc: "This current quarter",
//   },
//   // {
//   //   value: convertDateTime(moment().startOf('quarter')),
//   //   label: "This fiscal quarter",
//   //   desc: "This current fiscal quarter",
//   // },
//   // {
//   //   value: convertDateTime(moment().startOf('quarter')),
//   //   label: "This quarter so far",
//   //   desc: "This quarter up to now",
//   // },
//   // {
//   //   value: convertDateTime(moment().startOf('quarter')),
//   //   label: "This fiscal quarter so far",
//   //   desc: "This current fiscal quarter up to now",
//   // },
//   {
//     value: convertDateTime(moment().subtract(1, "quarter").startOf('quarter')),
//     label: "Last quarter",
//     desc: "The previous full quarter",
//   },
//   // {
//   //   value: convertDateTime(moment().subtract(1, "quarter").startOf('quarter')),
//   //   label: "Last fiscal quarter",
//   //   desc: "The previous full fiscal quarter",
//   // },
//   {
//     value: convertDateTime(moment().add(1, "quarter").startOf('quarter')),
//     label: "Next quarter",
//     desc: "The next full quarter",
//   },
//   // {
//   //   value: convertDateTime(moment().add(1, "quarter").startOf('quarter')),
//   //   label: "Next fiscal quarter",
//   //   desc: "The next full fiscal quarter",
//   // },
//   {
//     value: convertDateTime(moment().startOf('year')),
//     label: "This year",
//     desc: "This current year",
//   },
//   // {
//   //   value: convertDateTime(moment().startOf('year')),
//   //   label: "This fiscal year",
//   //   desc: "The current fiscal year",
//   // },
//   // {
//   //   value: convertDateTime(moment().startOf('year')),
//   //   label: "This year so far",
//   //   desc: "The current calendar year up to now",
//   // },
//   // {
//   //   value: convertDateTime(moment().startOf('year')),
//   //   label: "This fiscal year so far",
//   //   desc: "The current fiscal year up to now",
//   // },
//   {
//     value: convertDateTime(moment().subtract(1, "year").startOf('year')),
//     label: "Last year",
//     desc: "The previous calendar year",
//   },
//   // {
//   //   value: convertDateTime(moment().subtract(1, "year").startOf('year')),
//   //   label: "Last fiscal year",
//   //   desc: "The previous fiscal year",
//   // },
//   {
//     value: convertDateTime(moment().add(1, "year").startOf('year')),
//     label: "Next year",
//     desc: "The next calendar year",
//   },
//   // {
//   //   value: convertDateTime(moment().add(1, "year").startOf('year')),
//   //   label: "Next fiscal year",
//   //   desc: "The next fiscal year",
//   // },
//   {
//     value: convertDateTime(moment().subtract(7, "days")),
//     label: "Last 7 days",
//     desc: "The previous 7 days before today",
//   },
//   {
//     value: convertDateTime(moment().subtract(14, "days")),
//     label: "Last 14 days",
//     desc: "The previous 14 days before today",
//   },
//   {
//     value: convertDateTime(moment().subtract(30, "days")),
//     label: "Last 30 days",
//     desc: "The previous 30 days before today",
//   },
//   {
//     value: convertDateTime(moment().subtract(60, "days")),
//     label: "Last 60 days",
//     desc: "The previous 60 days before today",
//   },
//   {
//     value: convertDateTime(moment().subtract(90, "days")),
//     label: "Last 90 days",
//     desc: "The previous 90 days before today",
//   },
//   {
//     value: convertDateTime(moment().subtract(180, "days")),
//     label: "Last 180 days",
//     desc: "The previous 180 days before today",
//   },
//   {
//     value: convertDateTime(moment().subtract(365, "days")),
//     label: "Last 365 days",
//     desc: "The previous 365 days before today",
//   },
// ];

// You can use this updated dateFilters array in your application to handle various date filter options.
