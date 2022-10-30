export interface UserInterface {
    info: Info;
    movements: Array<Movement>;
    wallet: Wallet
}

interface Info {
    email: String;
    id: Number;
    name:String;
    password:String;
}
interface Movement{
    desde:String;
    hacia:String;
    idOperacion:Number;
    montoCryptoDestino:Number;
    montoCryptoOrigen:number;
    montoUsd:Number;
}

interface Wallet{
    usd: Number;
    crypto:Array<Crypto>;
}

interface Crypto{
    crypto_id:Number;
    name:String;
    quantity:Number;
}