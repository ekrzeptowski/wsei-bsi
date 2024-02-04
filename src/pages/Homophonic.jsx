import { useState } from "react";
import { notAlphabetRegex } from "../common";

import { Label } from "../components/Label";
import { Button } from "../components/Button";
import { TextArea } from "../components/TextArea";

/*
Function to generate the key
 function randomNum() {
   return Math.floor(Math.random() * 5) + 1;
 }

 const availableIndexes = [...Array(999).keys()];

 alphabet
   .split("")
   .forEach(
     (letter) =>
       (key[letter] = [...Array(randomNum())].flatMap(() =>
         availableIndexes.splice(Math.floor(Math.random() * availableIndexes.length), 1)
       ))
   );
*/

const key = {
  a: [712, 802, 845, 460, 671],
  ą: [904, 145, 455],
  b: [328, 941],
  c: [942, 589],
  ć: [740, 756, 844, 912, 812],
  d: [182, 246, 179],
  e: [411, 981, 61, 82, 574],
  ę: [102, 403],
  f: [732, 755, 910, 400],
  g: [490, 27, 306],
  h: [283, 605],
  i: [570, 891, 524, 337, 368],
  j: [33, 484],
  k: [871, 525, 417, 661, 313],
  l: [488, 526, 375],
  ł: [141, 933],
  m: [174, 738, 131, 675, 544],
  n: [560, 161, 549, 658],
  ń: [77, 799, 192],
  o: [855, 155],
  ó: [823, 759, 410, 556, 690],
  p: [550, 327, 609, 974, 633],
  q: [679],
  r: [373],
  s: [186],
  ś: [0, 867, 44],
  t: [825, 277, 151],
  u: [356],
  v: [76, 884, 437, 840, 513],
  w: [814, 903, 781],
  x: [508],
  y: [808, 763, 101],
  z: [745],
  ź: [333, 220, 392],
  ż: [975],
};

export const Homophonic = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // encrypt and set output
  const handleEncrypt = () => {
    const encrypted = [...input.toLowerCase().replace(notAlphabetRegex, "")]
      .map((char) => {
        const index = key[char];
        return index === undefined ? char : index[Math.floor(Math.random() * index.length)];
      })
      .join(" ");
    setOutput(encrypted);
  };

  // decrypt and set output
  const handleDecrypt = () => {
    const decrypted = input
      .split(" ")
      .map((char) => {
        const index = Object.entries(key).find(([key, value]) => value.includes(parseInt(char)));
        return index === undefined ? char : index[0];
      })
      .join("");
    setOutput(decrypted);
  };

  return (
    <>
      <h1>Szyfr homofoniczny</h1>
      <div className="space-y-2">
        <Label htmlFor="input">Tekst wejściowy:</Label>
        <TextArea id="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        <div className="space-x-2">
          <Button onClick={handleEncrypt}>Szyfruj</Button>
          <Button onClick={handleDecrypt}>Deszyfruj</Button>
        </div>
      </div>
      <p>Wynik:</p>
      <TextArea value={output} />
    </>
  );
};
