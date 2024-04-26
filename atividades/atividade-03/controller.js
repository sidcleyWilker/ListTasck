class UserController {
    
    users = [];

    addUser(usuario){
        this.users.push(usuario)
    }

    removerUser(index){
        this.users.splice(index, 1);
    }

    atualizar(email, usuario){
        this.users.forEach( us => {
            if(us.email == email){
                us.nome = usuario.nome;
                us.age = usuario.age;
            }
        })
    }

    listarUser(){
        return this.users;
    }

}