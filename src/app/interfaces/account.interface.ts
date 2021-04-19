export interface AccountInterface {
    alias: string;
    user: string;
    balance: number;
    type: string;
    number: number;
    dates: {
        created: number;
        updated: number;
    };
}