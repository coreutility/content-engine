declare const index: (_p: {
    f: {
        name: (v: string) => string;
    };
}) => Promise<{
    set: (_$p: {
        data: {
            curr: {
                "id": "";
                "type": "editor";
                "data": string;
            };
        };
    }) => Promise<{
        r: string;
        style: string;
    }>;
}>;
export { index };
