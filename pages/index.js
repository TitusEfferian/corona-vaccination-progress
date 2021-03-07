import dynamic from 'next/dynamic';

const LazyHome = dynamic(() => import('../RouteComponents/Home'), {
    ssr: true,
})

const Home = () => {
    return (
        <LazyHome />
    )
}

export default Home;
