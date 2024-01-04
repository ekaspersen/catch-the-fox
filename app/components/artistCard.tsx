import Image from "next/image";

type ArtistCardProps = {
  imageUrl: string;
  altText: string;
  artistName: string;
  instagram: string;
  rolle: string;
};

const ArtistCard = ({
  imageUrl,
  altText,
  artistName,
  instagram,
  rolle,
}: ArtistCardProps) => {
  return (
    <div className="relative h-96 max-w-[270px] cursor-pointer overflow-hidden transition-all duration-500 lg:h-[420px] lg:max-w-none lg:flex-1 lg:hover:flex-[1.2]">
      <div className="absolute inset-0 bg-clrdark opacity-30"></div>
      <Image
        width={270}
        height={420}
        src={imageUrl}
        alt={altText}
        className="min-h-full min-w-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-center gap-6 bg-clrdark p-4 text-clrwhite">
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-black">{artistName}</h2>
          <span className="mt-[-6px] opacity-50">{rolle}</span>
        </div>
        <div className="flex flex-col gap-0">
          <p className="font-bold">Instagram</p>
          <div className="flex items-center gap-1 text-xs">
            <div className="h-4 w-4 rounded-md bg-clrtertiary"></div>
            {instagram}
          </div>
        </div>
      </div>
      <span className="absolute bottom-0 flex w-full flex-col items-center text-2xl font-black">
        {artistName}
      </span>
    </div>
  );
};

const ArtistContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap">
      <ArtistCard
        imageUrl="/lpgitarartistbilde.JPG"
        altText="artist-bilde | LP på gitaren"
        artistName="LP NÆSS"
        instagram="Larspetternaess"
        rolle="Gitarsolo? LP."
      />
      <ArtistCard
        imageUrl="/IMG_1722.JPG"
        altText="artist-bilde | Tommy Jee synger for full hals"
        artistName="TOMMY JEE"
        instagram="litte_jee"
        rolle="Sangfuglen"
      />
      <ArtistCard
        imageUrl="/trommisR.jpg"
        altText="artist-bilde | Niklas på trommer i baris"
        artistName="RICHARD ERIKSEN"
        instagram="itsrich.e"
        rolle="Må bære smil"
      />
      <ArtistCard
        imageUrl="/DSCF8029.JPG"
        altText="artist-bilde | Lars Olai på gitar!"
        artistName="LARS OLAI"
        instagram="larsipan_with"
        rolle="Fingerspill og fanteri"
      />
    </div>
  );
};

export default ArtistContainer;
