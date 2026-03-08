const email = "dsathwikdatta@gmail.com";

const Mail = () => {
    const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.location.href = `mailto:${email}`;

        // Fallback for browsers without a configured local mail client.
        setTimeout(() => {
            window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
                "_blank",
                "noopener,noreferrer"
            );
        }, 400);
    };

    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 right-0 translate-x-[44%] rotate-90 z-[9]">
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
        >
            {email}
        </a>
        </div>
        <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Mail;
