import { Scanner } from "./scanner";

const scanner = new Scanner();

async function main() {
    const a = await scanner.readWord();
    const a2 = await scanner.readNumber();
    const a3 = await scanner.readNumber();
    console.log([a, a2, a3]);
}

main().then(() => scanner.dispose());
