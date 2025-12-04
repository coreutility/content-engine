const index = async () => {
    return {
        f: {
            name: (v:{
                id:string,
                name:string,
            }) => {
                return `${v.name}${v.id}`;
            }
        }
    };
};
export {index as helper};