import {
    fundoClaro,
    textoFundoClaro,
    sombraClaro,
    mapFundoClaro,
    mapRuaClaro,
    fundoEscuro,
    textoFundoEscuro,
    sombraEscuro,
    mapFundoEscuro,
    mapRuaEscuro
  } from "./variaveis";
  
  export const temaClaro = {
    body: fundoClaro,
    text: textoFundoClaro,
    shadow: sombraClaro,
    map_body: mapFundoClaro,
    map_road: mapRuaClaro,
    filter: "",
  };
  
  export const temaEscuro = {
    body: fundoEscuro,
    text: textoFundoEscuro,
    shadow: sombraEscuro,
    map_body: mapFundoEscuro,
    map_road: mapRuaEscuro,
    filter: "invert(100%)",
  };
  