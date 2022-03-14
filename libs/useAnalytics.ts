import { useEffect } from 'react'
import { useRouter } from 'next/router'


let useAnalytics = (): void => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = url => {
            window.gtag('config', process.env.GOOGLE_ANALYTICS_GA, {
                page_path: url,
            })
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

}
export default useAnalytics;