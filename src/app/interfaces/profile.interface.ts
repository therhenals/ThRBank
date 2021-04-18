export interface ProfileInterface {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    dates: {
        created: number;
        uptated: number;
    }
}
