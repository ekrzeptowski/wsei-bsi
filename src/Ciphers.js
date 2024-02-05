import { Caesar } from "./pages/Caesar";
import { Polybius } from "./pages/Polybius";
import { Homophonic } from "./pages/Homophonic";
import { Vigenere } from "./pages/Vigenere";

export const ciphers = [
  { name: "Szyfr Cezara", path: "/caesar", element: <Caesar /> },
  { name: "Szyfr Polibiusza", path: "/polybius", element: <Polybius /> },
  { name: "Szyfr homofoniczny", path: "/homophonic", element: <Homophonic /> },
  { name: "Szyfr Vigenère", path: "/vigenere", element: <Vigenere /> },
];
