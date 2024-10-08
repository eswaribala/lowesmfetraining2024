export class Branch{
    get branchId() {
        return this._branchId;
    }

    set branchId(value) {
        this._branchId = value;
    }

    get branchName() {
        return this._branchName;
    }

    set branchName(value) {
        this._branchName = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }
    constructor(branchId,branchName,city) {
        this._branchId = branchId;
        this._branchName = branchName;
        this._city = city;
    }
}