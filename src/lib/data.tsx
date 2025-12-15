import { Code, Download, BarChart2, Terminal, Database, Wrench, Network, Layout, FileText, Settings } from 'lucide-react';
import { Module } from '@/types';
import React from 'react';

export const modules: Module[] = [
    {
        id: 'instalacao',
        title: 'Instalação',
        description: 'Módulo de Instalação de Programas e Sistemas',
        icon: <Download className="w-6 h-6" />,
        topics: [
            {
                id: 'instalacao-windows-terminal',
                title: 'Instalação de Programas no Windows via Terminal',
                description: 'Guia completo para instalar programas no Windows usando o terminal com Winget',
                group: 'Windows',
                content: `
          <h2>Instalando Programas no Windows com Terminal</h2>
          <p>O Windows Package Manager (winget) é uma ferramenta de linha de comando que permite descobrir, instalar, atualizar, remover e configurar aplicativos no Windows 10 e Windows 11.</p>
          <h3>Comandos Básicos</h3>
          <pre><code class="language-powershell">winget search <nome-do-app>
winget install <id-do-app></code></pre>
        `
            },
            {
                id: 'instalacao-linux-guia',
                title: 'Guia Completo: Instalação no Linux',
                description: 'Métodos de instalação em distribuições Linux para iniciantes',
                group: 'Linux',
                content: `
          <h2>Instalação de Softwares no Linux</h2>
          <p>A maioria das distribuições Linux utiliza gerenciadores de pacotes para facilitar a instalação de softwares.</p>
          <h3>Debian/Ubuntu (apt)</h3>
          <pre><code class="language-bash">sudo apt update
sudo apt install <nome-pacote></code></pre>
        `
            }
        ]
    },
    {
        id: 'programacao',
        title: 'Programação',
        description: 'Módulo de Fundamentos de Programação',
        icon: <Code className="w-6 h-6" />,
        topics: [
            {
                id: 'linguagens-programacao',
                title: 'Linguagens de Alto vs. Baixo Nível',
                description: 'Diferenças fundamentais entre tipos de linguagens',
                group: 'Fundamentos',
                content: `
          <h2>Linguagens de Alto vs. Baixo Nível</h2>
          <p>A principal diferença reside no nível de abstração em relação ao hardware.</p>
          <ul>
            <li><strong>Alto Nível:</strong> Python, JavaScript. Foco na lógica humana.</li>
            <li><strong>Baixo Nível:</strong> Assembly, C. Foco no controle de hardware, gerenciamento de memória.</li>
          </ul>
        `
            },
            {
                id: 'logica-programacao',
                title: 'Lógica de Programação',
                description: '5 pilares para começar a programar',
                group: 'Fundamentos',
                content: `
          <h2>Os Pilares da Lógica</h2>
          <p>Para programar bem, é essencial dominar algoritmos e fluxo de controle.</p>
        `
            }
        ]
    },
    {
        id: 'analise-dados',
        title: 'Análise de Dados',
        description: 'Módulo de Estruturas e Processamento de Dados',
        icon: <BarChart2 className="w-6 h-6" />,
        topics: [
            {
                id: 'introducao-sql',
                title: 'Introdução ao SQL para Análise',
                description: 'Conceitos básicos de SQL para análise de dados',
                group: 'Banco de Dados',
                content: `
          <h2>Introdução ao SQL</h2>
          <p>SQL (Structured Query Language) é a linguagem padrão para bancos de dados relacionais.</p>
          <pre><code class="language-sql">SELECT * FROM usuarios WHERE ativo = true;</code></pre>
        `
            },
            {
                id: 'ferramentas-analise',
                title: 'Ferramentas de Análise de Dados',
                description: 'Comparativo entre as principais ferramentas do mercado',
                group: 'Ferramentas',
                content: `
          <h2>Ferramentas Principais</h2>
          <ul>
            <li><strong>Excel:</strong> Essencial para pequenas análises.</li>
            <li><strong>Power BI / Tableau:</strong> Visualização de dados.</li>
            <li><strong>Python (Pandas):</strong> Manipulação avançada.</li>
          </ul>
        `
            }
        ]
    }
];

export function getModule(id: string) {
    return modules.find(m => m.id === id);
}

export function getAllModules() {
    return modules;
}
