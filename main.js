const SHA256= require('crypto-js/sha256');

class block {
constructor(index,data,previousHash=''){
this.index=index;
this.data=new Date();
this.data=data;
this.previousHash=previousHash;
this.hash='';
    }
    createHash(){
        
    }

}   