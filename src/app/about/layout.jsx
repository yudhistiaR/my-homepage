import Footer from "@/components/Footer";

const AboutLayout = ({ children }) => {
    return (
        <>
            <section className="about h-full w-full">{children}</section>
            <Footer />
        </>
    );
};

export default AboutLayout;
