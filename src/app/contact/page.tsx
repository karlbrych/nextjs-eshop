import Navbar from "../components/Navbar";
import { contactUtils } from "../utils/contact-utils";
import Image from "next/image";
import { routes } from "../utils/navbar-util";
import ContactForm from "../components/ContactForm";
export default function KontaktPage() {
  return (
    <>
    <Navbar title="FlorbalShop.cz" routes={routes} />
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
      <p className="text-lg mb-6">
        Máš dotaz ohledně produktů, objednávky nebo chceš poradit s výběrem florbalky?
        Neváhej nás kontaktovat – rádi ti pomůžeme.
      </p>

      <ul className="space-y-4">
        {contactUtils.map((item) => (
          <li key={item.keyAttr} className="border-b pb-2">
            <span className="font-semibold">{item.keyAttr}:</span>{" "}
            <span>{item.valueAttr}</span>
          </li>
        ))}
      </ul>
        <Image
          src="/images/contact-us.jpg"
          alt="Kontaktujte nás"
            width={300}
            height={300}
            className="mt-8 rounded-lg shadow-lg transition-transform hover:scale-115 duration-500 ease-in-out"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
        ></Image>
        <p className="text-sm text-gray-600 mb-2 pt-5">George W Bush - mluvčí FlorbalShop.cz</p>
        <h1 className="text-4xl font-bold mb-6 pt-20">Chceš nám napsat? Kontaktuj nás zprávou</h1>
        <ContactForm></ContactForm>
    </main>
    </>
  );
}