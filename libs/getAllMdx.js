
function importAll(r) {
    return (r.keys().map((fileName, index) => {
        return ({
            link: fileName.replace(/^.+\/(.+)\.\w+$/, '$1'),
            id: index,
            meta: r(fileName).meta,
            module: r(fileName)
        })
    })).slice(0, r.keys().length / 2);
}

export const posts = importAll(
    require.context("../data/blog/", false, /\.mdx$/)
);
