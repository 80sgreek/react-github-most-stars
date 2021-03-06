import moment from "moment";

/**
 * Irepository
 */
export interface IRepository {
    id: number;
    full_name: string;
    description: string;
    html_url: string;
    created_at: Date;
    stargazers_count: number;
}

/**
 * Irepositories state
 */
export interface IRepositoriesState {
    readonly searchString?: string;
    readonly items?: IRepository[];
    readonly createdSince?: moment.Moment;
    readonly searching: boolean;
}

