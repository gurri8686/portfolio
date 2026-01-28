"use client"

export default function ClientTestimonial() {
    // Testimonials data - easily customizable
    const testimonials = [
        {
            id: 1,
            name: "Emre Kaya",
            position: "Co-Founder",
            image: "/testimonials/ema.jpg",
            rating: 5,
            text: "I'm extremely happy with the service provided. From planning to execution, everything was handled professionally."
        },
        {
            id: 2,
            name: "Emre Kaya",
            position: "Co-Founder",
            image: "/testimonials/siya.jpg",
            rating: 5,
            text: "I'm extremely happy with the service provided. From planning to execution, everything was handled professionally."
        },
        {
            id: 3,
            name: "Sarah Johnson",
            position: "CEO",
            image: "/testimonials/ema.jpg",
            rating: 5,
            text: "Outstanding work! The team exceeded our expectations in every way. Highly recommended for anyone looking for quality service."
        },
        {
            id: 4,
            name: "Michael Chen",
            position: "Director",
            image: "/testimonials/siya.jpg",
            rating: 5,
            text: "Professional, efficient, and reliable. They delivered exactly what we needed on time and within budget."
        },
        {
            id: 5,
            name: "Jessica Williams",
            position: "Marketing Head",
            image: "/testimonials/emre.jpg",
            rating: 5,
            text: "The attention to detail and commitment to excellence is truly impressive. Would definitely work with them again."
        },
        {
            id: 6,
            name: "David Martinez",
            position: "Product Manager",
            image: "/testimonials/siya.jpg",
            rating: 5,
            text: "From start to finish, the experience was seamless. Great communication and fantastic results."
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className="text-[#FCA649] text-xl">
                ★
            </span>
        ));
    };

    return (
        <main className="flex justify-center items-center !py-24">
            <section className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col justify-center items-center gap-2 mb-12">
                    <div className="w-full md:w-[60%] text-center !pb-[35px]">
                        <p className="font-light text-[16px] md:text-[20px] text-[#FF7262] tracking-wider">
                            TESTIMONIALS
                        </p>
                        <h2 className="font-bold text-[28px] md:text-[40px] text-white mt-2">
                            Client Testimonials
                        </h2>
                    </div>
                </div>

                {/* Testimonials Cards - All displayed in flexbox */}
                <div className="flex flex-wrap justify-center gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="w-[583px] h-[292px] border border-[#5B5B5B] rounded-[16px] flex justify-center items-center !p-[20px]"
                        >
                            {/* Glow Border */}
                            <div className="absolute " />

                            {/* Profile Image */}
                            <div className="flex gap-[24px]">
                                <div className="w-[173px] h-[173px]">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full rounded-full object-cover border border-white/10"
                                    />
                                </div>

                                {/* Content */}
                                <div className="w-[330px]">
                                    {/* Rating */}
                                    <div className="flex gap-2 mb-3">
                                        {renderStars(testimonial.rating)}
                                    </div>

                                    {/* Text */}
                                    <p className="font-light italic text-[20px]">
                                        “{testimonial.text}”
                                    </p>

                                    {/* Name */}
                                    <h4 className="text-[18px] md:text-[20px]">
                                        {testimonial.name}
                                    </h4>

                                    {/* Role */}
                                    <p className="font-normal text-[17px] leading-[30px]">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}