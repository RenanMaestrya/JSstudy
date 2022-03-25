import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("renan", 10000, 12404094432);
diretor.cadastrarSenha("coxinha123")
const gerente = new Gerente("hamlet", 5000, 12345687912);
gerente.cadastrarSenha("321coxinha")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "coxinha123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "321coxinha");
const cliente = new Cliente("Lais", 78945612379, "456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
