import { compareSync, genSaltSync, hashSync } from "bcrypt";
export const passwordHash = (senha: string) => hashSync(senha, genSaltSync(10));
export const comaparaSenha = (senha: string, passwordHash: string) => compareSync(senha, passwordHash)

