import {redirect} from "@remix-run/router";

export const loader = async () => {
    return redirect("/");
}