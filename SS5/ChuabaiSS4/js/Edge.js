import Vertice from "./Vertice.js";

export default class Edge {
    a;
    b;

    constructor(a, b) {
        if(!(a instanceof Vertice) || !(b instanceof Vertice) )throw new Error ("a, b không phải là đỉnh")
        this.a = a;
        this.b = b;

    }
}