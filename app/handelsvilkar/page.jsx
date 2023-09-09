export default function Handelsvilkar() {
    return (
        <section className="max-w-7xl mx-auto bg-clrprimary text-clrdark h-screen px-4 py-32 flex flex-col gap-8">
            <h1 className="text-5xl text-clrwhite font-black">
                Salgsvilkår for [Bandnavn] Merchandise
            </h1>

            <h2 className="text-xl text-clrwhite font-black">1. Parter</h2>
            <p>
                Dette salget inngås mellom selgeren, [Bandnavn],
                organisasjonsnummer [XXX XXX XXX], og kunden som utfører kjøpet
                via vår offisielle nettside.
            </p>

            <h2 className="text-xl text-clrwhite font-black">2. Betaling</h2>
            <p>
                Alle priser er oppgitt i NOK. Vi aksepterer [kredittkort, Vipps,
                PayPal, etc.] som betalingsmetoder. Betalingen vil bli behandlet
                ved ordrebekreftelse.
            </p>

            <h2 className="text-xl text-clrwhite font-black">3. Levering</h2>
            <p>
                Vi streber etter å sende alle bestillinger innen [X dager] etter
                kjøp. Leveringstid kan variere avhengig av destinasjon.
                Eventuelle forsinkelser grunnet posttjenester er utenfor vår
                kontroll.
            </p>

            <h2 className="text-xl text-clrwhite font-black">4. Angrerett</h2>
            <p>
                Kunder har rett til å angre kjøpet innen 14 dager etter mottak
                av varen, i henhold til norsk forbrukerkjøpslov. Varen må
                returneres i original tilstand og emballasje.
            </p>

            <h2 className="text-xl text-clrwhite font-black">5. Retur</h2>
            <p>
                Dersom du ønsker å returnere et produkt, vennligst kontakt oss
                først på [bandets e-post]. Returnerte varer må være i ubrukt og
                original tilstand. Kunder er ansvarlige for returkostnader, med
                mindre varen var feilaktig eller skadet ved mottak.
            </p>

            <h2 className="text-xl text-clrwhite font-black">
                6. Reklamasjonshåndtering
            </h2>
            <p>
                Hvis mottatt produkt er skadet eller har feil, vennligst kontakt
                oss innen 7 dager for en reklamasjon. Vi vil erstatte varen
                eller refundere beløpet etter vurdering.
            </p>

            <h2 className="text-xl text-clrwhite font-black">
                7. Konfliktløsning
            </h2>
            <p>
                Eventuelle tvister mellom [Bandnavn] og kunden skal først søkes
                løst amikabelt. Dersom dette ikke fører frem, kan saken bringes
                inn for Forbrukerrådet.
            </p>
        </section>
    );
}
