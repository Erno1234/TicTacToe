import Elem from "./Elem.js";
class Jatekter{
    #lepes;
    #aktAllapotLista = [];
    constructor(){
    this.#lepes = 0;
    this.#aktAllapotLista[" "," "," "," "," "," "," "," "," "];
    const szuloElem=$("#jatekter");
    for (let index = 0; index < 9; index++) {
        const kocka = new Elem(szuloElem, index);     
    }
    $(window).on("elemKattintas", (event)=>{
        console.log(event.detail);
        let aktElem = event.detail;
        if(this.#lepes % 2==0){
            aktElem.setElem("X");
            this.#aktAllapotLista[aktElem.index]="X";
        }else{
            aktElem.setElem("O");
            this.#aktAllapotLista[aktElem.index]="O";
        }
        this.#lepes ++;
        this.#aktAllapotLista;
    })
    }
    ellenorzes(){}
}
export default Jatekter;