import moment from "moment";

export interface IRepository {
    id: number;
    full_name: string;
    description: string;
    html_url: string;
    created_at: Date;
    stargazers_count: number;

}

export interface IRepositoriesState {
    readonly items?: IRepository[];
    readonly updatedAt?: moment.Moment;
}

