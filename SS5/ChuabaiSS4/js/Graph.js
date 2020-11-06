import Vertice from "./Vertice.js";
import Edge from "./Edge.js";
export default class Graph {
    vertices;
    edges;
    constructor() {
        this.vertices = [];
        this.edges = [];
    }
    addVertice(vertice) {
        if (vertice instanceof Vertice) {
            this.vertices.push(vertice)
        }

    }
    addEdge(edge) {
        if (edge instanceof Edge) {
            this.edges.push(edge);
        }

    }
    info() {
        console.log("Vertice: ", this.vertices);
        console.log("Edge: ", this.edges);

    }

    findNearestVertices(verticeName) {
        let foundEgdes = this.edges.filter(function (edge) {
            return (edge.a.data == verticeName) || (edge.b.data == verticeName);
        });

        let foundVertices = [];
        foundEgdes.forEach(function (edge) {
            if (edge.a.data == verticeName) {
                foundVertices.push(edge.b);
            } else if (edge.b.data == verticeName) {
                foundVertices.push(edge.a);
            }
        });
        return foundVertices;
    }
}