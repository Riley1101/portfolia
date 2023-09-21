export interface WakaTimeData<T> {
  data: T[];
}

export interface Day {
  actual_seconds: number;
  goal_seconds: number;
  goal_seconds_text: string;
  range: {
    date: string;
    end: string;
    start: string;
    text: string;
    timezone: string;
  };
  range_status: string;
  range_status_reason: string;
  range_status_reason_short: string;
}

export interface CodingActivity {
  title: string;
  chartData: Day[];
}
