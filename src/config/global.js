export default {
  global: {
    Name: 'Análisis de oportunidades para emprender',
    Description:
      'Detectar ideas con potencial es una competencia esencial en el proceso emprendedor, ya que permite identificar necesidades no satisfechas en el entorno y transformarlas en soluciones innovadoras, sostenibles y viables. Este análisis de oportunidades, sustentado en herramientas estratégicas, constituye la base para una toma de decisiones informada, convirtiéndose en el punto de partida hacia el desarrollo y consolidación de iniciativas empresariales exitosas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Liderazgo, retos y estrategias para permanecer en el mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Dinámicas y herramientas empresarial en Colombia',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Oportunidades para emprender',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia de este análisis para emprender',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metodología CANVAS del entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Profundización en las fuerzas macroeconómicas y del entorno competitivo de este modelo CANVAS',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Desarrollo del mapa estratégico',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis PESTEL',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Liderazgo, retos y estrategias para permanecer en el mercado.',
      referencia: 'Coll, F. M. (2020). Coyuntura económica. Economipedia.com.',
      tipo: 'Página Web',
      link: 'https://economipedia.com/definiciones/coyuntura-economica.html',
    },
    {
      tema: 'Metodología CANVAS del entorno.',
      referencia:
        'SENA. (2023, 15 de marzo). Modelo CANVAS para emprendedores.',
      tipo: 'Video',
      link: 'https://youtu.be/PvRaG2Eef6o',
    },
  ],
  glosario: [
    {
      termino: 'Competitividad',
      significado:
        'capacidad de una sociedad para enfrentar con éxito los desafíos de la economía global y los procesos de internacionalización, mediante la generación de ventajas competitivas sostenibles que impulsen simultáneamente el bienestar general. Implica competir de manera eficiente en los mercados, elevando los ingresos reales y fortaleciendo la productividad, la innovación y la apertura comercial.',
    },
    {
      termino: 'Demanda',
      significado:
        'cantidad máxima de un bien o servicio que un individuo o grupo está dispuesto a adquirir a un precio determinado, durante un período específico.',
    },
    {
      termino: 'Matriz',
      significado:
        'en administración, herramienta analítica que permite estudiar diversas variables (financieras, administrativas, macroeconómicas, entre otras) que pueden influir en el desempeño de una empresa, negocio o sector.',
    },
    {
      termino: 'Mercado',
      significado:
        'conjunto de consumidores identificables, con necesidades específicas, que están dispuestos a intercambiar bienes o servicios en un entorno regido por la ley de oferta y demanda.',
    },
    {
      termino: 'Monopolio',
      significado:
        'situación económica en la que un único proveedor domina el mercado frente a múltiples compradores, lo que le otorga poder para fijar precios y limitar la competencia.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'estructura conceptual que define como una organización crea, entrega y captura valor para sus clientes y <em>stakeholders</em>.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'proceso que consiste en dividir un mercado en grupos más pequeños con características comunes (como ubicación, personalidad o comportamiento) para diseñar estrategias diferenciadas.',
    },
    {
      termino: 'Segmento del mercado',
      significado:
        'grupo específico de personas, organizaciones o entidades con necesidades y deseos similares, que pueden ser satisfechos con una oferta comercial específica.',
    },
    {
      termino: 'Segmento seleccionado',
      significado:
        'subconjunto del mercado meta elegido por el emprendedor, compuesto por individuos con características homogéneas como edad, sexo, ocupación o localización.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'grado en que los productos o servicios cumplen o superan las expectativas del consumidor, influyendo en su lealtad y recompra.',
    },
    {
      termino: 'Tendencia',
      significado:
        'patrón de comportamiento de fenómenos o procesos que se orientan en una dirección determinada a lo largo del tiempo, sin constituirse en una ley, pero útiles para el análisis descriptivo en investigaciones tempranas.',
    },
    {
      termino: '<em>Target</em> o público objetivo',
      significado:
        'grupo de consumidores a los que se dirige una estrategia de mercado, definida por criterios demográficos, geográficos, psicográficos o conductuales.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'integración de tecnologías digitales en todas las áreas de una empresa, con el objetivo de mejorar procesos, generar valor y adaptarse a cambios en el entorno.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfaro, J., González, C. & Pina, M. (2013). Economía de la empresa. McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Centro de Innovación Pública Digital (s. f.). Manual para el análisis de tendencias.',
      link: '',
    },
    {
      referencia:
        'Confecámaras. (2019). Informe de dinámica empresarial en Colombia. Año 2018.',
      link: '',
    },
    {
      referencia:
        'Corma, F. (2018). El canvas de la innovación. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Max-Neef. (1998). Desarrollo a Escala Humana. Conceptos, aplicaciones y algunas reflexiones. Icaria Editorial. SENA. (2012). Ser empresario en seis pasos.',
      link:
        'https://repositorio.sena.edu.co/sitios/ser_empresario/serempresario1/index.html#',
    },
    {
      referencia: 'Valencia, H. (2007). Diccionario de marketing. 3R editores.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Experta y diseñadora instruccional ',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
