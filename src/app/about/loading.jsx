import Image from 'next/image';

const loading = () => {
    return (
        <div className="loading md:container mx-auto h-screen flex justify-center items-center">
            <Image
                src="/spinner.svg"
                alt="load"
                width={100}
                height={100}
                className="animate-spin"
            />
        </div>
    );
};

export default loading;
