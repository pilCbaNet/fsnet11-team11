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
    montoDestino:Number;
    montoOrigen:number;
    fecha:String;
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

export interface UserLoginInterface{
    mail:String;
    contraseña:String;
}

export interface UserRegisterInterface{
    mail:String;
    contraseña:String;
    apenom:String;
    fecha:Date;
    dni:Number;
}

export interface Usuario
    {
        apenom: String;
        mail: String;
        contraseña: String;
        dni: 11111111,
        nacimiento: Date,
        idCliente: Number,
        billeteras:Array<Billetera>
      }

export interface Billetera {
    saldo: Number;
    idBilleteras: Number;
    idCliente: Number;
    movimientos: Array<Movimientos>;
  }
export interface Movimientos{
    operacion:String;
    monto:Number;
    fecha:Date;
}