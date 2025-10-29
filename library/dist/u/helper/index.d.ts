declare const index: () => Promise<{
    f: {
        name: (v: {
            id: string;
            name: string;
        }) => string;
    };
}>;
export { index as helper };
