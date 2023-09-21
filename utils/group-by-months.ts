import dateFormat from "dateformat";

export const months: Months[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export type Months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type accType<T extends { releasedAt: string }> = {
  [key in Months]: T[];
};

function groupByMonth<T extends { releasedAt: string }>(articles: T[]) {
  let grouped = articles.reduce((acc: accType<T>, article) => {
    const month = dateFormat(article.releasedAt, "mmmm") as Months;
    acc[month] = [...(acc[month] || []), article];
    return acc;
  }, {} as accType<T>);
  return grouped;
}

export default groupByMonth;
