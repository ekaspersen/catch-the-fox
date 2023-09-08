export default function Contact() {
    return (
        <section
            id="kontakt"
            className="flex flex-col gap-8 lg:gap-16 px-4 pt-16 pb-48 lg:pb-32 text-center"
        >
            <div className="flex flex-col  bg-clrdark ">
                <h2 className="font-black text-5xl lg:text-6xl text-clrprimary">
                    KONTAKT
                </h2>
                <span className="font-black text-2xl lg:text-3xl">
                    CATCH THE FOX
                </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p className="text-xl font-medium max-w-lg">
                    Har du noen spørsmål eller interesse i å booke oss for
                    eventer? ikke nøl med å ta kontakt på epost!
                </p>
                <span className="text-xl font-black">
                    catchthefox.ff@gmail.com
                </span>
            </div>
        </section>
    );
}
