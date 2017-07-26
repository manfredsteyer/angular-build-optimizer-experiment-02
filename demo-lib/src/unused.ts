
export class UnusedClass {

    static counter = 0;

    id: string;
    info() {
        UnusedClass.counter++;
        return "I'm not used, Id:" + this.id;
    }

}