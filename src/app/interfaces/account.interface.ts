export interface AccountInterface {
    user: string;
    balance: number;
    type: string;
    number: number;
    dates: {
        created: number;
        updated: number;
    };
}