class Elem{
    constructor(szuloElem, index){
        this.index = index;
        szuloElem.append(`
            <div class="Elem">
                <p></p>
            </div>
        `)
        this.divElem = $(".Elem:last-child");
        this.pElem = $(".Elem:last-child p");
        this.divElem.on("click", ()=> {
            //this.setElem("X");
            this.esemenyTrigger();
        })
    }
    setElem(ertek){
        this.pElem.text(ertek);

    }
    esemenyTrigger(){
        const esemeny= new CustomEvent("elemKattintas", {detail:this});
        window.dispatchEvent(esemeny);
       
    }
    

}
export default Elem;