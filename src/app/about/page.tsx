import Image from "next/image";
import Navbar from "../components/Navbar";
import { routes } from "../utils/navbar-util";
export default function AboutPage() {
  return (<>
    <Navbar title="FlorbalShop.cz" routes={routes} />
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">O nás</h1>
      <p className="text-lg mb-4">
        Vítej na <strong>FlorbalShop.cz</strong> – místě, kde florbal není jen sport, ale vášeň. Jsme český e‑shop zaměřený výhradně na florbalové vybavení a doplňky pro hráče všech úrovní – od začátečníků po profesionály.
      </p>
      <p className="text-lg mb-4">
        Naší misí je nabídnout ti ty nejlepší produkty od ověřených značek jako <strong>OXDOG</strong>, <strong>Fat Pipe</strong> a další. Vše, co prodáváme, sami testujeme a doporučujeme – protože chceme, aby sis hru užil naplno.
      </p>
      <p className="text-lg mb-4">
        Děkujeme, že nás podporuješ. Bez tebe by to nešlo! 🧡
      </p>
      <p className="text-base text-gray-600">Tým FlorbalShop.cz</p>
      <Image
        src="/images/about-us.jpg"
        alt="O nás"
        width={500}
        height={400}
        className="mt-8 rounded-lg shadow-lg transition-transform hover:scale-145 duration-500 ease-in-out p-20"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      ></Image>
      <p className="text-sm text-gray-600 mb-2">Majitel a zakladatel Eshopu FlorbalShop.cz - Apeš "Plešatá hlava" Arozd</p>
    </main>
    </>
  );
}
