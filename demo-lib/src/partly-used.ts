
export class OtherUnusedClass {

    id: string;
    info() {
        return "I'm not used, but the other class in this file is; Id:" + this.id;
    }

}


export class UsedClass {

    id: string;
    info() {
        return "I'm used, but the other class in this file is not; Id:" + this.id;
    }
    
    other() {
        return "I'm not used but the other method here is; Id:" + this.id
    }

}