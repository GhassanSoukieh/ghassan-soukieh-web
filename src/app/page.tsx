import Image from "next/image";

import ghassan from "../../public/ghassan3D.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-6 text-start leading-[1] px-4 md:px-10">
      {/* Name + Image Section */}
      <div className="self-start flex flex-col justify-center md:flex-row items-center w-full">
        <div className="myFont text-[80px] sm:text-[150px] md:text-[220px] xl:text-[220px] text-[var(--orangeCustom)] text-start">
          <div>GHASSAN</div>
          <div className="md:ml-50 lg:ml-40">SOUKIEH</div>
          <div className="text-[var(--beigeCustom)] text-[130px]">SOFTWARE</div>
          <div className="text-[var(--beigeCustom)] text-[130px]">ENGINEER</div>
        </div>

        <Image
          className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] xl:w-[600px] 
                     h-auto
                     hover:scale-105 transition-transform duration-300"
          src={ghassan}
          alt="Ghassan Soukieh"
        />
      </div>
      <div className="text-5xl tiktok-sans pt-50 text-center px-55">
        Mitt namn är Ghassan och jag studerar till mjukvaruutvecklare, andra
        året vid Jönköping University. Jag har bott i Nässjö med min flickvän i
        sju år. Jag växte upp i en akademisk och kulturell miljö. Mina föräldrar
        har alltid stöttat och motiverat mig att utvecklas och följa mina
        drömmar. Jag vet att det kan låta lite klyschigt, men de gjorde
        verkligen allt för att jag skulle uppnå mina ambitioner. En dag gav de
        mig en gåva som förändrade mitt liv – en dator. Jag fick den när jag var
        åtta år gammal, och på den tiden var en dator en lyx som inte alla hade
        tillgång till. Jag minns fortfarande hur fascinerad och nyfiken jag var.
        Jag älskade den datorn och spenderade otaliga timmar vid den – den blev
        min bästa vän. Jag vet, det låter väldigt nördigt! Och jag erkänner det
        gärna. 😄 Min kärlek till datorer växte med åren och blev mer än bara
        att spela spel. Jag började testa olika mjukvaror och utvecklade ett
        stort intresse för att rita och animera i 2D. På den tiden använde jag
        ett program som hette Macromedia Flash, idag känt som Adobe Animate. Vid
        16 års ålder kunde jag skapa riktigt roliga 2D-animationer. Efter hand
        insåg jag att jag även hade ett stort intresse för programmering. Därför
        sökte jag till universitetet och började studera det. Som person är jag
        nördig, men också väldigt social. Jag gillar att lära känna nya
        människor och att ha kul, men jag vet också när det är dags att vara
        seriös och fokuserad.
      </div>
    </div>
  );
}
