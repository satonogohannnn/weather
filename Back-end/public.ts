import getRecord from "./method/getRecotds";

export default function (app: any) {
    app.configure(getRecord);
}