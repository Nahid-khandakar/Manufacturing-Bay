import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PartsCard from './PartsCard';

const AvailableParts = () => {



    const { data: parts, isLoading } = useQuery('parts', () =>
        fetch("http://localhost:5000/parts").then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='py-10 uppercase'>
            <h2 className='text-2xl text-center text-primary font-bold'>Available Parts</h2>

            <div className="flex justify-center mx-auto mt-2">
                <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                <span className="inline-block w-7 h-1 mx-1 bg-primary rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-primary rounded-full"></span>
            </div>

            <div className='grid md:grid-cols-1 xl:grid-cols-3'>
                {
                    parts.slice(-6).map(part => <PartsCard
                        key={part._id}
                        part={part}

                    >

                    </PartsCard>)
                }
            </div>


        </div>
    );
};

export default AvailableParts;