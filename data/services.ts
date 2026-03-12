export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  intro: string;
  highlights: string[];
  process: ServiceStep[];
  idealFor: string[];
};

/**
 * Repete uma imagem para gerar uma galeria inicial
 * Depois você pode substituir manualmente
 */
const repeatImage = (image: string, total = 4): string[] =>
  Array.from({ length: total }, () => image);

export const services: ServiceItem[] = [
  {
    id: "terraplanagem",
    slug: "terraplanagem",
    title: "Terraplanagem",
    description:
      "Seja para preparar o solo para construcoes, estradas ou paisagismo, nossa terraplanagem proporciona uma base solida para atender as necessidades dos seus projetos.",
    image: "/terraplanagem.JPEG",
    gallery: repeatImage("/terraplanagem.JPEG"),

    intro:
      "Executamos terraplanagem com precisao para transformar terrenos irregulares em areas prontas para receber obras urbanas, rurais e industriais.",

    highlights: [
      "Nivelamento e regularizacao tecnica do terreno",
      "Operacao com maquinas leves e pesadas",
      "Equipe experiente em obras de diferentes escalas",
    ],

    process: [
      {
        title: "Levantamento do terreno",
        description:
          "Analisamos relevo, acesso e condicoes do solo para definir o melhor plano de execucao.",
      },
      {
        title: "Corte, aterro e compactacao",
        description:
          "Modelamos o terreno com seguranca, garantindo estabilidade e cota adequada para o projeto.",
      },
      {
        title: "Acabamento tecnico",
        description:
          "Entregamos a area pronta para receber fundacoes, pavimentacao ou estrutura de drenagem.",
      },
    ],

    idealFor: [
      "Construcao civil e loteamentos",
      "Abertura e manutencao de estradas",
      "Preparacao de areas agricolas e industriais",
    ],
  },

  {
    id: "destocas",
    slug: "destocas",
    title: "Destocas",
    description:
      "Remover tocos de arvores, especialmente de variedades robustas como laranja e eucalipto, pode ser um desafio. Nossa equipe experiente executa a destoca de maneira eficiente.",

    image: "/destocas.JPEG",
    gallery: repeatImage("/destocas.JPEG"),

    intro:
      "Realizamos destocas completas para liberar areas de plantio, construcao ou circulacao de maquinas, com remocao segura de raizes e residuos.",

    highlights: [
      "Retirada de tocos e raizes profundas",
      "Processo seguro para o entorno da area",
      "Limpeza final para uso imediato do terreno",
    ],

    process: [
      {
        title: "Inspecao inicial",
        description:
          "Mapeamos volume dos tocos, tipo de solo e acessos para selecionar o equipamento ideal.",
      },
      {
        title: "Extracao dos tocos",
        description:
          "Aplicamos tecnica adequada para remover estruturas robustas sem comprometer a area ao redor.",
      },
      {
        title: "Limpeza e nivelamento",
        description:
          "Retiramos residuos e deixamos o terreno limpo para a proxima etapa do seu projeto.",
      },
    ],

    idealFor: [
      "Renovacao de pomares e areas rurais",
      "Implantacao de novos empreendimentos",
      "Preparacao de terrenos para terraplanagem",
    ],
  },

  {
    id: "demolicoes",
    slug: "demolicoes",
    title: "Demolicoes",
    description:
      "Seja uma casa residencial ou um grande barracao industrial, nossos especialistas em demolicao trabalham com seguranca para derrubar estruturas indesejadas.",

    image: "/demolicoes.JPEG",
    gallery: repeatImage("/demolicoes.JPEG"),

    intro:
      "Conduzimos demolicoes planejadas com foco em seguranca, controle da operacao e agilidade.",

    highlights: [
      "Demolicao residencial, comercial e industrial",
      "Planejamento para execucao segura",
      "Retirada organizada de estruturas",
    ],

    process: [
      {
        title: "Planejamento da demolicao",
        description:
          "Definimos metodo, sequencia e isolamento da area para reduzir riscos.",
      },
      {
        title: "Execucao controlada",
        description:
          "Realizamos a derrubada com equipamentos adequados e equipe preparada.",
      },
      {
        title: "Limpeza pos-demolicao",
        description:
          "Deixamos o terreno pronto para receber a proxima fase da obra.",
      },
    ],

    idealFor: [
      "Reforma de areas urbanas",
      "Substituicao de estruturas antigas",
      "Liberacao de terrenos para novos projetos",
    ],
  },

  {
    id: "limpeza",
    slug: "limpeza-construcao-represa",
    title: "Limpeza e construcao de represa",

    description:
      "Nossa equipe e especializada na limpeza e construcao de represas, criando reservatorios de agua confiaveis.",

    image: "/galeria/represa.JPG",
    gallery: repeatImage("/galeria/represa.JPG"),

    intro:
      "Atuamos na limpeza, ampliacao e construcao de represas para garantir reservatorios funcionais.",

    highlights: [
      "Escavacao e conformacao de reservatorios",
      "Melhoria do armazenamento de agua",
      "Execucao para uso rural e produtivo",
    ],

    process: [
      {
        title: "Avaliacao da area",
        description:
          "Estudamos topografia, drenagem e finalidade da represa.",
      },
      {
        title: "Escavacao e modelagem",
        description:
          "Executamos escavacao e limpeza com foco em capacidade de armazenamento.",
      },
      {
        title: "Acabamento e revisao",
        description:
          "Finalizamos o servico com revisao de bordas e acessos.",
      },
    ],

    idealFor: [
      "Irrigacao agricola",
      "Reserva de agua rural",
      "Melhoria hidrica de propriedades",
    ],
  },

  {
    id: "curvas",
    slug: "curvas-de-nivel",
    title: "Curvas de nivel",

    description:
      "Nossos servicos de curvas de nivel fornecem informacoes precisas sobre o relevo do terreno.",

    image: "/curvas.JPEG",
    gallery: repeatImage("/curvas.JPEG"),

    intro:
      "Oferecemos servicos de curvas de nivel para orientar decisoes tecnicas.",

    highlights: [
      "Leitura detalhada do relevo",
      "Base tecnica para projetos",
      "Maior eficiencia na movimentacao de terra",
    ],

    process: [
      {
        title: "Levantamento topografico",
        description:
          "Coletamos dados do terreno para identificar variacoes de nivel.",
      },
      {
        title: "Interpretacao tecnica",
        description:
          "Organizamos informacoes para orientar a execucao da obra.",
      },
      {
        title: "Aplicacao em campo",
        description:
          "Usamos as curvas para orientar cortes e drenagem.",
      },
    ],

    idealFor: [
      "Planejamento de terraplanagem",
      "Projetos de drenagem",
      "Implantacao de estradas",
    ],
  },

  {
    id: "locacao-maquinas",
    slug: "locacao-maquinas",
    title: "Locacao de maquinas leves e pesadas",

    description:
      "Oferecemos locacoes de uma ampla gama de maquinas bem conservadas.",

    image: "/galeria/galeria-01.webp",
    gallery: repeatImage("/galeria/galeria-01.webp"),

    intro:
      "Disponibilizamos maquinas confiaveis para acelerar seu projeto.",

    highlights: [
      "Frota de maquinas leves e pesadas",
      "Equipamentos revisados",
      "Flexibilidade de locacao",
    ],

    process: [
      {
        title: "Entendimento da demanda",
        description:
          "Identificamos tipo de obra e prazo para indicar o equipamento.",
      },
      {
        title: "Alocacao de maquinas",
        description:
          "Programamos entrega e operacao conforme o ritmo da obra.",
      },
      {
        title: "Acompanhamento",
        description:
          "Damos suporte durante todo o periodo de locacao.",
      },
    ],

    idealFor: [
      "Obras de infraestrutura",
      "Servicos rurais",
      "Demandas industriais e urbanas",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}