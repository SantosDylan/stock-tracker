export interface InsiderSentimentData {
    symbol: string;
    year: number;
    month: number;
    change: number;
    mspr: number;
}

export interface InsiderSentiment {
    data: InsiderSentimentData[];
    symbol: string;
}