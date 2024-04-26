class Factory {

    constructor() {}
    
    createUserPadao(nome, email, age) {
       return new User(nome, email, age, "PADRÃO"); 
    }

    createUserPremiun(nome, email, age) {
        return new User(nome, email, age, "PREMIUN"); 
     }

}