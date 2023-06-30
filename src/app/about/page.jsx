import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
    return (
        <>
            <div className="relative w-full top-0 right-0 z-30 h-full md:h-80 overflow-hidden">
                <Image
                    src="/stup.jpg"
                    height={1200}
                    width={1200}
                    alt="Hero image"
                    className="object-contain w-full relative"
                />
                <div className="absolute top-0 left-0 w-full h-full md:h-80 bg-slate-950 opacity-70"></div>
                <div className="absolute h-full w-full items-center flex flex-col justify-center top-0 left-0 bottom-0">
                    <div className="font-thin text-lg md:text-base">
                        WELCOME TO
                    </div>
                    <div className="text-3xl md:text-5xl">My Homepage</div>
                </div>
            </div>
            <div className="container mx-auto px-2 md:px-0 md:mt-4 mt-5">
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src="/foto.jpg"
                        width={120}
                        height={120}
                        alt="foto frofile"
                        className="rounded-full border mb-2"
                    />
                    <div className="text-xl mb-1">M.Yudhsita Rahman</div>
                    <div className="font-thin mb-2">Fron End Web Developer</div>
                </div>
                <div className="text-justify indent-5 md:indent-2 antialiased">
                    <p>
                        Saya memiliki semangat yang besar dalam membangun
                        pengalaman web yang menarik dan responsif. Dengan latar
                        belakang pendidikan di bidang teknologi web dan
                        pengetahuan yang solid tentang HTML, CSS, dan
                        JavaScript, saya siap untuk berkontribusi dalam proyek
                        pengembangan web. Saya telah belajar tentang pembuatan
                        tata letak yang responsif, pengoptimalan kinerja, serta
                        praktik terbaik dalam pengembangan front-end. Saya
                        memiliki pengalaman dalam menggunakan kerangka kerja
                        seperti Bootstrap dan merasa nyaman dalam berkolaborasi
                        dengan desainer UI/UX dan tim pengembangan untuk
                        mencapai tujuan bersama. Saya selalu bersemangat untuk
                        terus belajar dan mengikuti tren terbaru dalam industri
                        web. Saya berusaha untuk mengembangkan keterampilan saya
                        dengan terus menghadiri pelatihan dan mengikuti sumber
                        daya belajar online. Saya percaya bahwa dengan dedikasi
                        dan semangat, saya dapat terus tumbuh dan menjadi
                        seorang Front-End Web Developer yang lebih baik. Saya
                        juga memiliki keterampilan komunikasi yang baik dan
                        kemampuan untuk bekerja dalam tim. Saya siap untuk
                        menghadapi tantangan baru dan berkontribusi dalam
                        lingkungan kerja yang mendukung pertumbuhan profesional.
                        Terima kasih telah mengunjungi halaman profil saya. Saya
                        berharap dapat berkesempatan untuk bekerja dengan Anda
                        dalam membangun pengalaman web yang luar biasa. Jika
                        Anda memiliki pertanyaan atau kesempatan proyek, jangan
                        ragu untuk menghubungi saya.
                    </p>
                    <a href="/project" className="hover:text-red-500">
                        <span>
                            Project Saya{" "}
                            <BsArrowRight className="inline font-bold text-lg" />
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default About;
