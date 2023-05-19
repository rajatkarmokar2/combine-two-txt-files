const fs = require('fs/promises');

async function example() {
    try {
        const text1 = await fs.readFile('./text1.txt', { encoding: 'utf8' }); //text1.txt data
        const text2 = await fs.readFile('./text2.txt', { encoding: 'utf8' }); //text1.txt data
        await fs.writeFile('./text.txt', text1 + text2); //combining text1.txt & text2.txt
        const text = await fs.readFile('./text.txt', { encoding: 'utf8' }); //reading combined text file data
        console.log(text);
    } catch (err) {
        console.log(err);
    }
}
example();