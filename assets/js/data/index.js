// Importe todos os módulos
import { instalacaoModule } from './modules/instalacao.js';
import { formatacaoModule } from './modules/formatacao.js';
import { redesModule } from './modules/redes.js';
import { programacaoModule } from './modules/programacao.js';
import { resolucaoProblemasModule } from './modules/resolucao-problemas.js';
import { analiseDadosModule } from './modules/analise-dados.js';

// Exporte como array
export const forumData = [
  instalacaoModule,
  formatacaoModule,
  redesModule,
  programacaoModule,
  resolucaoProblemasModule,
  analiseDadosModule
];