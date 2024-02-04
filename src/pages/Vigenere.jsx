import { useState } from "react";
import { alphabet, notAlphabetRegex } from "../common";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { TextArea } from "../components/TextArea";
import { Input } from "../components/Input";

export const Vigenere = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [key, setKey] = useState("");
  return (
    <>
      <h1>Szyfr Vigenère</h1>
      <div className="space-y-2">
        <Label htmlFor="input">Tekst wejściowy:</Label>
        <TextArea id="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <Label htmlFor="key">Klucz:</Label>
        <Input id="key" type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        <div className="space-x-2">
          <Button
            onClick={() => {
              const encrypted = [...input.toLowerCase().replace(notAlphabetRegex, "")]
                .map((char, i) => {
                  const index = alphabet.indexOf(char);
                  const shift = alphabet.indexOf(key.toLowerCase().replace(notAlphabetRegex, "")[i % key.length]);
                  return index === -1 ? char : alphabet[(index + shift) % alphabet.length];
                })
                .join("");
              setOutput(encrypted);
            }}
          >
            Szyfruj
          </Button>
          <Button
            onClick={() => {
              const decrypted = input
                .split("")
                .map((char, i) => {
                  const index = alphabet.indexOf(char);
                  const shift = alphabet.indexOf(key.toLowerCase().replace(notAlphabetRegex, "")[i % key.length]);
                  return index === -1 ? char : alphabet[(alphabet.length + index - shift) % alphabet.length];
                })
                .join("");
              setOutput(decrypted);
            }}
          >
            Deszyfruj
          </Button>
        </div>
      </div>
      <p>Wynik:</p>
      <TextArea value={output} />
    </>
  );
};
