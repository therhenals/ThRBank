export interface ThirdPartyAccountsInterface {
    user: string,
    alias: string,
    type: string,
    number: number,
    bankingEntity: string,
    currency: string,
    identification: number,
    _id: string,
    dates: {
        created: number,
        updated: number
    }
}