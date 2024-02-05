import { Link } from "react-router-dom";
import { ciphers } from "./Ciphers";
import { H1 } from "./components/Heading";

function App() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <H1 className="text-center">Szyfrator</H1>
      <p className="text-center text-xl">
        Wybierz jeden z poniższych szyfrów do zaszyfrowania lub odszyfrowania wiadomości.
      </p>
      <div className="my-4 flex flex-wrap items-center justify-center space-x-2">
        {ciphers.map((cipher) => (
          <Link
            key={cipher.name}
            to={cipher.path}
            className="mb-2 rounded-lg border border-primary-600 px-4 py-2 text-primary-600 shadow hover:bg-primary-600 hover:text-primary-50"
          >
            {cipher.name}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default App;
