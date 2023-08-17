import readline from "readline/promises";

export class Scanner {
    private async fillCache() {
        while (true) {
            while (this.cache[0] === "") {
                this.cache.splice(0, 1);
            }
            if (this.cache.length !== 0) {
                break;
            }
            this.cache = (await this.rl.question("")).split(/\s+/);
        }
    }

    public async readWord() {
        await this.fillCache();
        return this.cache.splice(0, 1)[0];
    }

    public async readNumber() {
        return +(await this.readWord());
    }

    public dispose() {
        this.rl.close();
    }

    private cache: string[] = [];
    private readonly rl = readline.createInterface(process.stdin);
}
