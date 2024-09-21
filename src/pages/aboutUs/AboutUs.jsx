import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const AboutUs = () => {
    return (
        <div>
            <div className="bg-[#ECECF2] text-center mt-4 dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] ">
                <h2 className="text-5xl font-semibold">About<span className="text-[#C56652]"> Us</span></h2>
            </div>
            <div className="space-y-8 p-2 text-black dark:text-fuchsia-50 md:p-0">
                <Helmet>
                    <title>About - StayZen</title>
                </Helmet>
                <h3 data-aos='zoom-in-down' className="text-3xl  font-bold text-center mt-6">About Us</h3>
                <p data-aos='zoom-in-down' className="text-xl  font-bold">
                    StayZen Hotel is your tranquil escape in the heart of the city. With our beautifully designed rooms, personalized service, and state-of-the-art amenities, we provide an unforgettable experience for every guest. Whether you're traveling for business or leisure, StayZen Hotel offers a seamless blend of comfort, style, and serenity. Our commitment is to ensure that every stay is a journey toward relaxation and peace.
                </p>
                <h3 data-aos='zoom-in-down' className="text-3xl  font-bold text-center mt-6">Our Mission</h3>
                <p data-aos='zoom-in-down' className="text-xl  font-bold">
                    At StayZen Hotel, our mission is simple:
                    We aim to create a sanctuary for travelers, where they can unwind and rejuvenate. Through exceptional hospitality, modern comforts, and a deep commitment to customer satisfaction, we strive to deliver an unparalleled hotel experience.
                </p>
                <h3 data-aos='zoom-in-down' className="text-3xl  font-bold text-center mt-6">Our Vision</h3>
                <p data-aos='zoom-in-down' className="text-xl  font-bold">
                    To be recognized globally as a leader in boutique luxury hotels, offering personalized experiences and unmatched serenity for our guests. We envision StayZen Hotel as the go-to destination for those seeking a peaceful haven amidst the hustle and bustle of modern life.
                </p>
                <h3 data-aos='zoom-in-down' className="text-3xl  font-bold text-center mt-6">Our Story</h3>
                <p data-aos='zoom-in-down' className="text-xl  font-bold">
                    Founded in 2006, StayZen Hotel began with a dream of providing a unique retreat for modern travelers who long for peace in the midst of a busy world. What started as a single, family-owned hotel has grown into a symbol of tranquility and hospitality. Our founders, passionate about design, relaxation, and service, sought to create a space where guests could experience true Zen during their stay. From the soothing color palettes in our rooms to the mindfulness-inspired decor, every detail is crafted to offer you a restful and memorable experience.
                </p>
                <h3 data-aos='zoom-in-down' className="text-3xl font-bold text-center mt-6">Our Values</h3>
                <p data-aos='zoom-in-down' className="text-xl font-bold">
                    <ul className="space-y-5 list-disc">
                        <li className="text-xl font-bold"><span className="font-bold text-2xl">Excellence: </span>We are committed to providing top-tier services that exceed guest expectations.</li>
                        <li className="text-xl font-bold"><span className="font-bold text-2xl">Serenity: </span>We cultivate a peaceful and relaxing atmosphere to ensure your stay is a tranquil experience.</li>
                        <li className="text-xl font-bold"><span className="font-bold text-2xl">Authenticity: </span>We believe in offering genuine hospitality, staying true to our core values of care and thoughtfulness.</li>
                        <li className="text-xl font-bold"><span className="font-bold text-2xl">Sustainability: </span>We are dedicated to eco-friendly practices, reducing our environmental impact through responsible choices.</li>
                        <li className="text-xl font-bold"><span className="font-bold text-2xl">Innovation: </span>We embrace innovation to enhance guest experiences with modern technology and services.</li>
                    </ul>
                </p>

            </div>
        </div>
    );
};

export default AboutUs;