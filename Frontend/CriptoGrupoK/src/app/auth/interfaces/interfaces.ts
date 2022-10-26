export interface Pokedex {
    info:      Info;
    movements: Movement[];
    wallet:    Wallet[];
}

export interface Info {
    id:       number;
    name:     string;
    email:    string;
    password: string;
}

export interface Movement {
    "id operacion":                           number;
    desde:                                    string;
    hacia:                                    string;
    "monto transferido en usd":               number;
    "monto transferido en crypto de origen":  number;
    "monto transferido en crypto de destino": number;
}

export interface Wallet {
    crypto_id: number;
    quantity:  number;
}