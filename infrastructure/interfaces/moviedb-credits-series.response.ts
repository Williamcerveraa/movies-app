export interface MovieDBCreditsSeriesResponse {
    cast: MovieDBSerieCast[];
    crew: MovieDBSerieCast[];
    id:   number;
}

export interface MovieDBSerieCast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}
