export class Chit{
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get chitId() {
        return this._chitId;
    }

    set chitId(value) {
        this._chitId = value;
    }

    get chitValue() {
        return this._chitValue;
    }

    set chitValue(value) {
        this._chitValue = value;
    }

    get nextAuctionDate() {
        return this._nextAuctionDate;
    }

    set nextAuctionDate(value) {
        this._nextAuctionDate = value;
    }

    get dueAmount() {
        return this._dueAmount;
    }

    set dueAmount(value) {
        this._dueAmount = value;
    }
    constructor(id,chitId,chitValue,nextAuctionDate,dueAmount) {
        this._id=id;
        this._chitId = chitId;
        this._chitValue = chitValue;
        this._nextAuctionDate = nextAuctionDate;
        this._dueAmount = dueAmount;
    }

}