class BibliografiaCrearReqModel {
    constructor(bibliografia) {
        
    }
}

class BibliografiaDatosResModel {
    constructor(bibliografia) {
        this.idBg = bibliografia.idBg;
        this.idLb = bibliografia.idLb;
        this.referenciaLb = bibliografia.referenciaLb;
        this.idLc = bibliografia.idLc;
        this.referenciaLc = bibliografia.referenciaLc;
    }
}

// class BibliografiaActualizarReqModel {
//     constructor(bibliografia) {
//     }
// }

class BibliografiaEntity {
    constructor(bibliografia) {
        this.idBg = bibliografia.idBg;
    }
}

export {BibliografiaCrearReqModel, BibliografiaDatosResModel, BibliografiaEntity}