import Link from "next/link";
import Navbar from "./components/Navbar";
import { routes } from "./utils/navbar-util";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Navbar title="FlorbalShop.cz" routes={routes} />

            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-850 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Vítejte v našem florbalovém e-shopu!
                </h1>
                <p className="text-lg mb-6 text-center max-w-2xl text-gray-300">
                    Nabízíme kvalitní florbalové vybavení značek Oxdog a FatPipe pro začátečníky i profesionály. Prohlédněte si náš katalog a najděte si své nové vybavení.
                </p>

                {/* Obrázky vedle sebe */}
                <div className="flex flex-row gap-8 mb-8 flex-wrap justify-center">
                    <div className="flex flex-col items-center">
                        <Link href="https://fatpipe.fi">
                        <Image
                            src="/images/fatpipe.jpg"
                            alt="Florbalové vybavení FatPipe"
                            width={150}
                            height={200}
                            className="rounded-lg shadow-lg transition-transform hover:scale-110 duration-500"
                        />
                        <p className="mt-2 text-gray-400 text-sm">FatPipe</p>
                        </Link>
                    </div>

                    <div className="flex flex-col items-center">
                        <Link href="https://www.oxdog.net/">
                        <Image
                            src="/images/oxdog.jpg"
                            alt="Florbalové vybavení Oxdog"
                            width={300}
                            height={150}
                            className="rounded-lg shadow-lg transition-transform hover:scale-110 duration-500"
                            
                        />
                        <p className="mt-2 text-gray-400 text-sm">Oxdog</p>
                        </Link>
                    </div>
                </div>

                <Link
                    href="/katalog"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform duration-300 transform hover:scale-115 shadow-lg"
                >
                    Přejít do katalogu
                </Link>
            </main>
        </>
    );
}
