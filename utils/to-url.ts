export const toUrl = (path: string[] | React.ReactNode) => {
    if(Array.isArray(path)) {
        let route= path[0]
        route = route.replace(/\s+/g, '-').toLowerCase()
        return route
    }else return ""
}
