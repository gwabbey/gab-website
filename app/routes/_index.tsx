import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "gab"},
        {name: "description", content: "musician and developer"},
    ];
};

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            <h1>gab</h1>
        </div>
    );
}
