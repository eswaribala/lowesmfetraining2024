//ENUM
export const Status=Object.freeze({
        1: "PRIZED",
         2: "NONPRIZED",
         3: "AUCTIONED"
})

export class MyTicket{
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

    get dueAmount() {
        return this._dueAmount;
    }

    set dueAmount(value) {
        this._dueAmount = value;
    }

    get auctionDate() {
        return this._auctionDate;
    }

    set auctionDate(value) {
        this._auctionDate = value;
    }
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    constructor(id,name,status,chitId,chitValue,dueAmount,auctionDate) {
        this._id = id;
        this._name = name;
        this._status = status;
        this._chitId = chitId;
        this._chitValue = chitValue;
        this._dueAmount = dueAmount;
        this._auctionDate = auctionDate;

    }
}