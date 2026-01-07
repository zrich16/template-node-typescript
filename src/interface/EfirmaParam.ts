/**
 * Parámetros necesarios para procesar una e-firma.
 * 
 * @author @rich-develop
 */
export interface EfirmaParam {
  byteCer: string;    // Contenido del certificado en texto o base64
  byteKey: string;    // Contenido de la llave privada en texto o base64
  password: string;   // Contraseña de la llave
  cadena: string;     // Texto o cadena que se desea firmar
  username: string;   // Usuario que realiza la firma
}
