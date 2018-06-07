export class User {
    private _id;
    private _name;
    private _username;


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

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }
}
