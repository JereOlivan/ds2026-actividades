import type { SignOptions } from "jsonwebtoken";

function obligatorio(nombre: string): string {
  const valor = process.env[nombre];
  if (!valor) throw new Error(`Falta ${nombre} en el .env`);   // falla al ARRANCAR
  return valor;
}

export const JWT_SECRET = obligatorio("JWT_SECRET");
export const JWT_EXPIRES_IN: SignOptions["expiresIn"] = "2h";
export const SALT_ROUNDS = 10;

/* nota: env.ts es una barrera de seguridad: 
- centraliza las variables, 
- las tipa correctamente para que Zod o JWT no se quejen, 
- y asegura que tu contenedor no se quede corriendo en un estado inválido. */