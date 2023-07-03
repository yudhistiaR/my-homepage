import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const skilsIcons = [
    {
        id: 1,
        logo: "/icons/html5.svg",
        width: 70,
        height: 70,
        alt: "html logo",
        name: "HTML 5",
    },
    {
        id: 2,
        logo: "/icons/css3.svg",
        width: 70,
        height: 70,
        alt: "css logo",
        name: "CSS3",
    },
    {
        id: 3,
        logo: "/icons/javascript.svg",
        width: 70,
        height: 70,
        alt: "javascript logo",
        name: "Javascript",
    },
    {
        id: 4,
        logo: "/icons/react.svg",
        width: 70,
        height: 70,
        alt: "react logo",
        name: "React js",
        spin: true,
    },
    {
        id: 5,
        logo: "/icons/bootstrap.svg",
        width: 70,
        height: 70,
        alt: "bootstrap logo",
        name: "Bootstrap",
    },
    {
        id: 6,
        logo: "/icons/tailwind.svg",
        width: 70,
        height: 70,
        alt: "tailwind logo",
        name: "Tailwindcss",
    },
];

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
                <article className="text-justify antialiased p-4 border-zinc-700 border rounded-lg">
                    <div className="flex justify-center items-center my-4 pb-4 md:w-1/3 w-full mx-auto border-b border-zinc-700 ">
                        <Image
                            src="/foto.jpg"
                            width={50 * 2}
                            height={50 * 2}
                            alt="foto frofile"
                            className="rounded-full border mb-2 mr-2"
                        />
                        <div className="flex flex-col gap-1">
                            <div className="text-xl mb-1">
                                M.Yudhsita Rahman
                            </div>
                            <div className="font-thin mb-2">
                                Frontend Web Developer
                            </div>
                        </div>
                    </div>
                    <p className="py-4">
                        Halo, nama saya Yudhisita! Saya seorang Junior Web
                        Developer yang bersemangat dalam mengembangkan solusi
                        web yang menarik dan fungsional. Saya memiliki
                        pengetahuan dasar tentang HTML, CSS, dan JavaScript,
                        serta kerangka kerja seperti React dan
                        Bootstrap,Tailwindcss. Saya telah belajar tentang
                        praktik terbaik dalam pengembangan web dan terus
                        mengasah keterampilan saya dengan mempelajari sumber
                        daya online dan mengikuti proyek-proyek sederhana. Saya
                        percaya bahwa pengembangan web adalah kombinasi antara
                        kreativitas dan logika, dan saya selalu berusaha untuk
                        menciptakan pengalaman pengguna yang luar biasa. Saya
                        senang bekerja dalam tim dan dapat beradaptasi dengan
                        cepat dengan lingkungan kerja yang dinamis. Saya siap
                        untuk belajar dari rekan-rekan yang lebih berpengalaman
                        dan berkontribusi secara positif dalam mencapai tujuan
                        bersama. Saya memiliki kemampuan komunikasi yang baik
                        dan dapat mengartikulasikan ide-ide kompleks dengan
                        jelas. Saya juga memiliki ketekunan yang tinggi dalam
                        menyelesaikan tugas dan tantangan teknis. Saya selalu
                        mencari cara untuk meningkatkan diri saya sendiri dan
                        tetap terbarui dengan perkembangan terbaru di bidang
                        teknologi web. Saya percaya bahwa sebagai seorang Junior
                        Web Developer, kesempatan untuk belajar dan tumbuh
                        adalah kunci dalam meraih kesuksesan. Saya sangat
                        antusias untuk memperluas pengetahuan dan keterampilan
                        saya, serta berkontribusi dalam membangun solusi web
                        yang inovatif. Terima kasih telah mengunjungi profil
                        saya. Saya sangat berharap dapat bergabung dengan tim
                        yang bersemangat dan kolaboratif dalam menciptakan situs
                        web yang menakjubkan. Jika Anda tertarik untuk bekerja
                        sama atau memiliki pertanyaan, jangan ragu untuk
                        menghubungi saya. Terima kasih dan salam
                    </p>
                    <a href="/project" className="hover:text-red-500 ">
                        <span>
                            Project Saya{" "}
                            <BsArrowRight className="inline font-bold text-lg" />
                        </span>
                    </a>
                </article>
                <div className="items-center flex flex-col mt-4 border border-zinc-700 rounded-lg p-4">
                    <div className="text-3xl md:text-4xl">Skills</div>
                    <div className="w-full py-5">
                        <ul className="grid md:grid-cols-4 gap-5 grid-cols-2">
                            {skilsIcons.map(el => (
                                <li
                                    key={el.id}
                                    className="flex flex-col items-center  justify-center"
                                >
                                    <Image
                                        src={el.logo}
                                        width={el.width}
                                        height={el.height}
                                        alt={el.alt}
                                        className={
                                            el.spin
                                                ? "hover:animate-spin"
                                                : "hover:animate-bounce"
                                        }
                                    />
                                    <div>{el.name}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
