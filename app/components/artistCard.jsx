const ArtistCard = ({ imageUrl, altText, artistName, instagram, rolle }) => {
    return (
        <div className="lg:hover:flex-[1.2] cursor-pointer transition-all duration-500 lg:flex-1 max-w-[270px] lg:max-w-none lg:h-[420px] relative h-96 overflow-hidden">
            <div className="absolute inset-0 bg-clrdark opacity-30"></div>
            <img
                src={imageUrl}
                alt={altText}
                className="min-h-full min-w-full object-cover object-center"
            />
            <div className="z-50 absolute bottom-0 left-0 right-0 p-4 gap-6 bg-clrdark text-clrwhite flex flex-col justify-center">
                <div className="gap-0 flex flex-col">
                    <h2 className="text-2xl font-black">{artistName}</h2>
                    <span className="mt-[-6px] opacity-50">{rolle}</span>
                </div>
                <div className="gap-0 flex flex-col">
                    <p className="font-bold">Instagram</p>
                    <div className="flex items-center gap-1 text-xs">
                        <div className="h-4 w-4 rounded-md bg-clrtertiary"></div>
                        {instagram}
                    </div>
                </div>
            </div>
            <span className="w-full absolute bottom-0 text-2xl font-black flex flex-col items-center">
                {artistName}
            </span>
        </div>
    );
};

const ArtistContainer = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center">
            <ArtistCard
                imageUrl="./lpgitarartistbilde.JPG"
                altText="artist-bilde | LP på gitaren"
                artistName="LP NÆSS"
                instagram="Larspetternaess"
                rolle="Gitarist"
            />
            <ArtistCard
                imageUrl="./IMG_1722.JPG"
                altText="artist-bilde | Tommy Jee synger for full hals"
                artistName="TOMMY JEE"
                instagram="litte_jee"
                rolle="Kul dude"
            />
            <ArtistCard
                imageUrl="./DSCF8334.JPG"
                altText="artist-bilde | Niklas på trommer i baris"
                artistName="NIKLAS FAANES"
                instagram="niklas_faanes"
                rolle="Kul dude"
            />
            <ArtistCard
                imageUrl="./DSCF8029.JPG"
                altText="artist-bilde | Lars Olai på gitar!"
                artistName="LARS OLAI"
                instagram="larsipan_with"
                rolle="Kul dude"
            />
        </div>
    );
};

export default ArtistContainer;
