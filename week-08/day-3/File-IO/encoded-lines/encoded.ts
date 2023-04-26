// Create a method that decrypts encoded-lines.txt
import * as fs from 'fs';

function decrypt(filename: string): void {
    const content: string = fs.readFileSync(filename, 'utf-8');
    let decryptCont: string = '';

    for (let i = 0; i < content.length; i++)
        if (content[i] === ' ' || content[i] === '\n') {
            decryptCont += content[i];
        } else {
            let char_code = content.codePointAt(i);
            if (char_code != undefined) {
                let previous_char_code = char_code - 1;
                decryptCont += String.fromCharCode(previous_char_code);
            }
            fs.writeFileSync(filename, decryptCont);
        }
}

decrypt('encoded.txt');