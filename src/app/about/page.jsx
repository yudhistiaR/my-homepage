import Image from 'next/image';

const About = () => {
    return (
        <>
            <section className="w-screen absolute top-0 right-0 -z-0 mt-1">
                <Image
                    className="object-cover w-screen h-72 md:h-96 "
                    src="/stup.jpg"
                    width={1200}
                    height={160}
                    alt="stup"
                />
                <div className="absolute top-0 right-0 w-screen h-72 md:h-96 bg-slate-950 opacity-70"></div>
                <div className="antialiased absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center flex flex-col justify-center">
                    <div className="font-thin text-lg">WELCOME TO</div>
                    <div className="text-2xl md:text-5xl">My Homepage</div>
                </div>
            </section>
            <section className="relative">
                <h1>Makan nasi iwak karing</h1>
            </section>
        </>
    );
};

export default About;
