<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodología CANVAS del entorno

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-1.col-md-3.col-sm-5
        img.img-t.img-a(src='@/assets/curso/t3/img1.png', alt='')
      .col-lg-11.col-md-12.col-sm-12
        p.mb-0 Es una herramienta estratégica que permite analizar y visualizar los factores clave del entorno interno y externo, que influyen en un proyecto, idea o emprendimiento, todo esto a través de bloques temáticos organizados visualmente (como en un lienzo), facilita la comprensión del modelo de negocio, identificando actores, oportunidades, amenazas, recursos clave y relaciones. Es útil para la toma de decisiones y para alinear objetivos con el contexto real del entorno. 

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white ¿Qué es el modelo CANVAS?

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-5.col-md-7.col-sm-12
        img(src='@/assets/curso/t3/img2.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p Conocido como #[em Business Model Canvas], fue desarrollado por Alexander Osterwalder en 2011, y se considera una herramienta estratégica que permite diseñar, visualizar, evaluar y reinventar modelos de negocio, tanto en etapas iniciales como en procesos de mejora o cierre, por esta razón representa, de manera simplificada, los elementos clave que definen el funcionamiento de un modelo de negocio, estructurados en bloques interrelacionados.
        .row.bgverdemate2
          p.px-4.mt-3 Cuando se aplica desde la perspectiva del entorno, el modelo se amplía para considerar factores externos que inciden directamente en la viabilidad del negocio; estos factores se agrupan en cuatro áreas fundamentales; cada una de estas áreas permite comprender cómo interactúa el negocio con su contexto externo y facilita la toma de decisiones estratégicas. 

    p.mb-4 A continuación, se describe cada una de ellas:

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade")
      .col-lg-12.col-md-12.col-sm-12
        TabsA.color-acento-botones
          .tarjeta.bgazulclaro2.p-4(titulo="Fuerza de mercado")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Esta dimensión se enfoca en el análisis del comportamiento del consumidor y las dinámicas propias del mercado objetivo. Incluye:
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Segmentos de mercado:] grupos específicos de consumidores con características, necesidades o comportamientos comunes.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Necesidades y demanda:] identifica problemas no resueltos y niveles de demanda insatisfecha.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Problemáticas del mercado:] obstáculos u oportunidades detectadas que afectan la oferta y la demanda.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Costos de cambio:] barreras que enfrentan los clientes para cambiar de proveedor, producto o servicio.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Atractivo de los ingresos:] potencial de rentabilidad que representa cada segmento.
                p.px-4.mt-4 El análisis de estas fuerzas permite comprender a quién está dirigido el producto o servicio, cómo satisface una necesidad específica y qué tan rentable puede ser, considerando factores como la localización geográfica o el alcance digital.
          .tarjeta.bgazulclaro2.p-4(titulo="Fuerza macroeconómica")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Este componente examina las condiciones económicas generales que impactan al entorno empresarial. Abarca:
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Condiciones macroeconómicas:] tasas de crecimiento económico, inflación, desempleo, entre otros indicadores clave.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Mercados de capitales:] acceso a fuentes de financiamiento y condiciones del crédito.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Infraestructura económica:] calidad de las vías de transporte, conectividad digital, logística, etc.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Disponibilidad de recursos y #[em commodities:]] acceso a materias primas, energía y otros insumos esenciales.
                p.px-4.mt-4 Estos elementos influyen de manera directa en la sostenibilidad y en los costos operativos del negocio. Un entorno macroeconómico estable favorece la inversión y el crecimiento empresarial.
          .tarjeta.bgazulclaro2.p-4(titulo="Fuerzas del entorno competitivo")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Aquí se identifican los actores y dinámicas que configuran la competencia del negocio.
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Proveedores y actores de la cadena de valor:] influyen en costos, calidad y tiempos de entrega.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b #[em Stakeholders] (grupos de interés):] entidades o personas que pueden impactar o ser impactadas por el negocio (gobierno, ONGs, clientes estratégicos, etc.).
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Competidores actuales:] empresas que ofrecen productos o servicios similares.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Competidores nuevos entrantes:] potenciales competidores que podrían ingresar al mercado.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Productos y servicios sustitutos:] alternativas que podrían reemplazar la oferta actual.
                p.px-4.mt-4 Este análisis permite identificar amenazas, ventajas comparativas y factores clave para diferenciarse y posicionarse en el mercado. El modelo de las cinco fuerzas de Porter, si bien es un referente clásico en el estudio de la competitividad, debe integrarse a una lectura contemporánea que considere los nuevos actores digitales, las plataformas tecnológicas, y los cambios acelerados en los hábitos de consumo.
          .tarjeta.bgazulclaro2.p-4(titulo="Tendencias clave")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Se refiere a los cambios estructurales o emergentes que pueden transformar el entorno del negocio a corto, mediano o largo plazo. Considera:
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias tecnológicas:] innovaciones que cambian la forma de producir, comercializar o entregar valor.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias regulatorias:] nuevas normas legales o políticas públicas que afectan la actividad empresarial.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias sociales y culturales:] cambios en valores, estilos de vida, comportamientos de consumo.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias socioeconómicas:] transformaciones en la distribución de ingresos, migraciones, envejecimiento poblacional, entre otros.
                p.px-4.mt-4
                  | Detectar y anticiparse a estas tendencias es clave para adaptar el modelo de negocio y mantener su relevancia en un entorno cambiante.


    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis del entorno mediante la metodología CANVAS permite al emprendedor mirar más allá de su producto o servicio, evaluando de forma integral las variables externas que influyen en su modelo de negocio; esta visión estratégica incrementa las probabilidades de éxito, facilitando decisiones fundamentadas, adaptabilidad y sostenibilidad a largo plazo.

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1.	Profundización en las fuerzas macroeconómicas y del entorno competitivo de este modelo CANVAS 

    p.mb-5 Al aplicar el modelo CANVAS del entorno en el diseño de un modelo de negocio, es esencial comprender cómo los factores macroeconómicos y competitivos actúan como condicionantes externos que pueden influir decisivamente en la viabilidad del emprendimiento. Estos elementos no solo contextualizan la operación del negocio, sino que también permiten anticipar riesgos, identificar oportunidades y diseñar estrategias de adaptación sostenibles.

    .row.bgpersonal3.align-items-center.p-4.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .tarjeta.tarjeta--blanca.p-4.py-1(data-aos="fade-down")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Análisis integral de las fuerzas macroeconómicas
                    p.mb-2 Además de identificar las condiciones macroeconómicas, el mercado de capitales, los #[em commodities] y la infraestructura, es crucial tener en cuenta la interdependencia sistémica de estos elementos. Por ejemplo, un entorno inflacionario puede alterar simultáneamente los precios de los #[em commodities], encarecer el acceso al crédito y generar inestabilidad en los mercados financieros, afectando directamente los costos de operación y la planificación del flujo de caja.
                    p.mb-4 Asimismo, el análisis macroeconómico debe considerar la política monetaria y fiscal del país: decisiones sobre tasas de interés, tipo de cambio, subsidios o incentivos sectoriales inciden en la rentabilidad esperada del negocio. Por tanto, emprender sin un diagnóstico del entorno económico general puede conducir a decisiones erradas sobre precios, inversiones o expansión.
                    .row.bgazulmateclaro
                      p.px-4.py-2 En escenarios de incertidumbre, herramientas como el análisis de sensibilidad o de escenarios permiten proyectar distintos contextos económicos futuros y preparar planes de contingencia, aspecto indispensable para la sostenibilidad de cualquier emprendimiento.
                  .col-12.col-md-8.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-1.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Poder de negociación de clientes y proveedores
                    p.mb-2 Más allá de la fijación de precios, estos actores impactan la experiencia del usuario y la cadena de valor completa. En la economía actual, los clientes están empoderados por la información y las plataformas digitales, por lo que el valor percibido, la personalización del servicio y la reputación #[em online] son variables clave para sostener su fidelidad. Del mismo modo, la dependencia excesiva de un solo proveedor puede comprometer la continuidad del negocio frente a disrupciones logísticas o políticas comerciales adversas.
                  .col-12.col-md-8.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-2.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Nuevos competidores y productos sustitutos
                    p.mb-2 El ingreso de nuevos jugadores en el mercado no solo depende de factores regulatorios o barreras de entrada, sino también del grado de innovación y digitalización del ecosistema empresarial. Por ejemplo, un emprendimiento tradicional puede verse rápidamente desplazado por #[em startups] que integran modelos de negocio basados en economía colaborativa, automatización o inteligencia artificial.
                    .row.bgazulmateclaro
                      p.px-4.py-2 En cuanto a los sustitutos, ya no se trata únicamente de productos equivalentes, sino de soluciones alternativas que satisfacen la misma necesidad de forma más eficiente, sostenible o accesible. Por ello, el análisis competitivo debe ampliar su mirada para incluir tecnologías emergentes y patrones de consumo que aún no son evidentes, pero que pueden escalar rápidamente.
                  .col-12.col-md-8.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-3.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Rivalidad entre competidores
                    p.mb-2 Esta fuerza no solo mide la cantidad de actores en el mercado, sino también el grado de diferenciación, la velocidad de innovación, la sensibilidad al precio del consumidor y la estrategia de posicionamiento. Mercados altamente saturados obligan a los nuevos emprendimientos a desarrollar propuestas de valor altamente innovadoras, que puedan romper con los esquemas tradicionales y generar ventajas competitivas difíciles de imitar.
                  .col-12.col-md-8.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-4.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Hacia un enfoque estratégico dinámico
                    p.mb-2 La interacción entre las fuerzas macroeconómicas, competitivas y las tendencias clave exige que el emprendedor adopte una visión sistémica y flexible de su modelo de negocio; no basta con evaluar el entorno en la etapa inicial del proyecto, es fundamental mantener un proceso constante de monitoreo y ajuste.
                    p.mb-4 Instrumentos como la vigilancia tecnológica, la inteligencia de mercados y el análisis prospectivo se convierten en aliados estratégicos para anticiparse a los cambios del entorno. De este modo, el modelo CANVAS deja de ser un simple lienzo estático para transformarse en una herramienta viva, que evoluciona con el contexto y permite al emprendimiento mantenerse relevante, competitivo y resiliente.
                  .col-12.col-md-8.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-5.png' alt='')

    Separador  
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2. Desarrollo del mapa estratégico

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-7.col-md-12.col-sm-12
        .row.bgamarilloclaro
          p.px-4.py-3.mb-0 En esta etapa se profundizará en el análisis de las nueve secciones que componen los elementos fundamentales del modelo de negocio, vinculados a la propuesta de valor del emprendimiento. Cada uno de estos componentes será examinado de manera individual, con el propósito de que el emprendedor avance desde la formulación de una idea hasta la estructuración de un modelo empresarial viable. Para ello, se planteará una serie de preguntas orientadoras que facilitarán la validación de cada sección del modelo. 
        p.mb-4.mt-4 Es importante tener en cuenta que se trata de un instrumento flexible, susceptible de ajustes conforme avanza el desarrollo del proyecto.
        .row.align-items-center.justify-content-center
          .col-auto
            img(src='@/assets/curso/t3/img5.png', alt='')
          .col-lg.col-md.col-12
            p A través de este análisis detallado se identificarán y evaluarán las variables clave que pueden incidir en el éxito del emprendimiento, permitiendo al emprendedor una comprensión integral y estratégica del negocio.
      .col-lg-5.col-md-12.col-sm-12
        img(src='@/assets/curso/t3/img4.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Socios clave
    
    .row.justify-content-center.align-items-start.mb-5(data-aos="fade")
      .col-lg-5.col-md-12.col-sm-12
        p Este bloque del modelo CANVAS pertenece al ámbito de la #[b gestión estratégica y de alianzas empresariales], y se enfoca en identificar a los actores externos que desempeñan un papel fundamental en el funcionamiento del modelo de negocio. Los socios clave (también conocidos como aliados estratégicos) son organizaciones, instituciones o individuos cuya participación resulta esencial para facilitar el acceso al mercado, fortalecer la propuesta de valor, optimizar recursos y acelerar la llegada del producto o servicio al cliente final. Su relevancia radica no solo en los insumos o servicios que aportan, sino también en la confianza, reputación y experiencia que transmiten al modelo de negocio.
      .col-lg-2.col-md-4.col-sm-12
        img(src='@/assets/curso/t3/img6.png', alt='')
      .col-lg-5.col-md-12.col-sm-12
        .row
          .col-auto
            img.mb-2(src='@/assets/curso/t3/img7.png', alt='').d-none.d-lg-block
        .row.bgverdemate2.mb-2
          p.px-4.mt-2.mb-1 Establecer alianzas estratégicas eficaces puede traducirse en ventajas competitivas como la reducción de costos, el acceso a tecnologías especializadas, la ampliación del alcance comercial o la mitigación de riesgos inherentes al entorno.
        p.mt-2 A continuación, algunas #[b preguntas] clave que orientan el análisis de este bloque:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t3/img8.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="¿Quiénes son los socios clave del negocio?")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Por ejemplo, proveedores estratégicos que suministran insumos críticos, distribuidores con acceso a mercados específicos o instituciones que respaldan técnicamente el proyecto.
          .row.col-xl-11.m-auto(titulo="¿Cuáles son los recursos esenciales que proporcionan?")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Se debe identificar si estos socios entregan materias primas, tecnologías, propiedad intelectual, conocimiento especializado o infraestructura.
          .row.col-xl-11.m-auto(titulo="¿Qué actividades clave realizan estos socios?")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Tales como manufactura, logística, soporte técnico, #[em marketing] conjunto o desarrollo de producto.
          .row.col-xl-11.m-auto(titulo="¿Es viable establecer alianzas con competidores o actores de otros sectores?")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Este punto considera alianzas horizontales (entre competidores) y verticales (con proveedores o distribuidores), con el fin de generar economías de escala, acceder a nuevos mercados o reducir la incertidumbre en escenarios complejos.
      
    p.mb-4 El análisis de los socios clave trasciende la cadena de suministros, ya que incluye todas aquellas alianzas estratégicas que fortalecen el ecosistema del emprendimiento y permiten enfocar recursos y esfuerzos en las actividades fundamentales del negocio.

    .row.justify-content-center.align-items-center.mb-4.bgverdemate2
      p.px-4.py-3.mb-0 La herramienta que se presenta a continuación le permitirá organizar de manera estructurada los componentes esenciales del modelo, examinar con profundidad su propuesta de valor y tomar decisiones estratégicas bien fundamentadas. Su propósito es facilitar la aplicación práctica de los conceptos abordados, guiando al emprendedor en la construcción progresiva de su propio modelo de negocio.

    .tarjeta.color-primario.p-3(data-aos="fade").mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t3/anexo.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Análisis de oportunidades para emprender -  Modelo CANVAS.
              p.mb-0 Se invita al aprendiz a descargar la plantilla.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                span Descargar
                  i.fas.fa-file-download.p-2

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Actividades clave

    .row.justify-content-center.align-items-center.bgazulmateclaro.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center.mb-4.mt-4
        .col-auto
          img(src='@/assets/curso/t3/img9.png', alt='')
        .col-lg-9.col-md-12.col-sm-12
          p Esta sección se vincula con el área de gestión y las habilidades gerenciales, enfocándose en el “cómo” del modelo de negocio. Para materializar la propuesta de valor, es necesario identificar y ejecutar un conjunto de actividades esenciales que preparen el producto o servicio antes de su llegada al mercado. En este punto, el emprendedor debe centrarse en el núcleo del negocio, es decir, en aquellas acciones que se realizarán de manera constante y que son fundamentales para su funcionamiento.
      .row.mb-4
        .col-lg-1
        .col-lg-7.col-md-12.col-sm-12
          p.mb-4 Para orientar el análisis de este componente, se proponen las siguientes preguntas clave:
          ul.lista-ul--color.marron.fa-al
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué actividades son esenciales para desarrollar y sostener la propuesta de valor?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué actividades se requieren para operar los canales de distribución?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué acciones son necesarias para mantener y fortalecer la relación con los clientes?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué actividades resultan indispensables para generar las fuentes de ingresos?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Se requiere el uso de plataformas tecnológicas o redes colaborativas?

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Recursos clave

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-12.col-sm-12
        .row
          .col-auto
            img.mb-2(src='@/assets/curso/t3/img10.png', alt='').d-none.d-lg-block
        p Esta sección se relaciona con el área de gestión y habilidades gerenciales, y responde al “cómo” del modelo de negocio; el objetivo es que el emprendedor identifique los recursos esenciales con los que cuenta (o debe adquirir) para ejecutar las actividades clave del negocio de manera eficiente y productiva. Asimismo, se busca que reflexione sobre cómo optimizar dichos recursos para generar valor y garantizar la sostenibilidad del emprendimiento.
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t3/img11.png', alt='')
      .col-lg-5.col-md-12.col-sm-12
        p.mb-4 A continuación, se presentan algunas preguntas orientadoras para el análisis de este componente:
        ul.lista-ul--color.marron.fa-al
          li
            i.fas.fa-check-circle
            span.mb-0 ¿Qué recursos clave son necesarios para desarrollar la propuesta de valor? (Ejemplo: canales de distribución, gestión de relaciones con clientes, generación de ingresos, recursos intelectuales, tecnológicos o humanos).
          li
            i.fas.fa-check-circle
            span.mb-0 ¿Qué tipo de profesionales o perfiles técnicos requiere el negocio para operar con eficacia?

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Propuesta de valor

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-auto
        img(src='@/assets/curso/t3/img12.png', alt='')
      .col-lg.col-md.col-12
        .row.bgamarilloclaro3
          p.px-4.py-3.mb-0 Esta sección se vincula estrechamente con el área de mercadeo y constituye uno de los elementos más relevantes del modelo de negocio. La propuesta de valor representa la ventaja competitiva que ofrece el emprendimiento, es decir, aquello que hace que los clientes prefieran su producto o servicio frente a las opciones disponibles en el mercado. En otras palabras, define el “qué” del modelo: qué solución se brinda, qué necesidades se satisfacen y qué hace único o innovador al producto o servicio ofrecido.

    p.mb-5 Para orientar el análisis de este componente, se sugieren las siguientes preguntas:

    .row.justify-content-center.mover.mb-5(data-aos="fade-left")
      .col-lg-9.position-relative
        .avatar1
          figure
            img(src="@/assets/curso/t3/img13.png", alt="alt").d-none.d-lg-block   
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Qué valor se entrega realmente a los clientes?        
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Qué conjunto de productos y/o servicios se ofrece a cada segmento de mercado?        
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Qué necesidades específicas del cliente se satisfacen?    
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Cuál es el elemento diferenciador que lleva al cliente a preferir esta propuesta sobre otras?
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Qué problema o necesidad del cliente se resuelve a través de la oferta?

    p.mb-5 En la construcción de una propuesta de valor sólida, es fundamental tener en cuenta el enfoque del economista Manfred A. Max-Neef (1998), quien en su obra Desarrollo a escala humana, propone entre necesidades humanas fundamentales y necesidades básicas fundamentales. Esta perspectiva permite al emprendedor comprender el valor desde una dimensión más integral y centrada en el ser humano, orientando la propuesta no solo al consumo, sino también a la satisfacción significativa del cliente.

    .row.align-items-center.justify-content-center(data-aos="fade")
      .col-lg-6.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          |  Necesidades humanas fundamentales 
    .row.bgpersonal4.align-items-center.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-6.col-md-12.col-sm-12
        img.mt-4(src='@/assets/curso/t3/fig1.png', alt='La figura representa las necesidades humanas fundamentales organizadas en torno a cuatro dimensiones esenciales del desarrollo humano: ser, tener, hacer y estar. Estas categorías abarcan aspectos existenciales, materiales, relacionales y conductuales que interactúan para satisfacer integralmente las condiciones de vida de las personas. En el centro se ubica un símbolo de colectividad, lo que sugiere que estas necesidades son compartidas y propias de todo ser humano.') 

    .row.mb-4(data-aos="fade-left")
      .row.align-items-center.justify-content-center.py-4
        .col-lg-6.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            | Necesidades humanas básicas
          figure
            img.mb-2(src='@/assets/curso/t3/fig2.png', alt='La figura representa un conjunto de necesidades humanas básicas, agrupadas alrededor de un elemento central que sugiere colectividad. Entre estas necesidades se incluyen identidad, libertad, subsistencia, protección, afecto, entendimiento, participación, ocio y creación. Cada una refleja un aspecto esencial para el bienestar integral y el desarrollo pleno de las personas en su entorno social y cultural.')

    p.mb-4 Existe una correlación entre ambas dimensiones orientada a la satisfacción de la necesidad, como se evidencia en el siguiente anexo.

    .tarjeta.color-primario.p-3(data-aos="fade").mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t3/anexo.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Necesidades humanas fundamentales 
              p.mb-0 Para complementar esta información se invita a conocer el siguiente documento.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
                span Descargar
                  i.fas.fa-file-download.p-2

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Estructura de costos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-12.col-sm-12
        .row.bgazulclaro2
          p.px-5.py-4.mb-0.mt-2 En esta se vincula con el área financiera del modelo de negocio y responde a la pregunta “¿cuánto?”. Toda empresa requiere una infraestructura que implica costos que deben ser cubiertos y gestionados eficientemente. Para lograr una administración financiera sostenible, es fundamental identificar y jerarquizar los gastos esenciales del negocio, diferenciándolos de aquellos prescindibles. Esta claridad permite evitar desviaciones presupuestales que puedan comprometer la viabilidad económica del emprendimiento.
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t3/img14.png', alt='')
      .col-lg-5.col-md-12.col-sm-12
        .row.bgazulmateclaro
          .col-auto
            img.px-3.mt-4(src='@/assets/curso/t3/img15.png', alt='')
          p.mt-3.mb-3.px-3 A continuación, se presentan algunas preguntas orientadoras para el análisis de este componente:
          ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-3
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0 ¿Qué costos implica la operación del negocio?
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0  ¿Cuáles son los costos fijos?
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0  ¿Cuáles son los costos variables?
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0  ¿Cuál es el valor total de los costos?
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0  ¿Qué costos son prioritarios o estratégicos?
            li.mb-0
              i.fas.fa-check-circle
              span.mb-4  ¿Qué actividades clave representan los mayores costos?

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Relaciones con los clientes

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-auto
        img(src='@/assets/curso/t3/img16.png', alt='')
      .col-lg.col-md.col-12
        .row.bgamarilloclaro2
          p.px-4.py-3.mb-0 Establecer y mantener una relación adecuada con los clientes es una acción estratégica clave para cualquier emprendimiento, ya que ellos constituyen el eje central del negocio. Por ello, es indispensable definir el tipo de vínculo que se desarrollará con cada segmento de clientes, en función de sus características y necesidades. Esta decisión influye directamente en la fidelización, la satisfacción y, en última instancia, en la sostenibilidad del negocio.

    p.mb-5 A continuación, se proponen preguntas orientadoras para analizar este componente del modelo de negocio:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-12.col-sm-12
        .row.bgverdemate2
          ul.lista-ul--color.marron.fa-al.mb-0.p-5.mb-0
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué tipo de relación se busca establecer y mantener con cada segmento de clientes?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué relaciones ya existen con los clientes actuales?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Cómo se integra la relación con los clientes dentro del modelo de negocio general?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Cuál es el costo asociado al mantenimiento de estas relaciones?
      .col-lg-6.col-md-12.col-sm-12
        img(src='@/assets/curso/t3/img17.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-6.col-md-12.col-sm-12
        img(src='@/assets/curso/t3/img18.png', alt='')
      .col-lg-6.col-md-12.col-sm-12
        .row.bgamarilloclaro3
          ul.lista-ul--color.marron.fa-al.p-4.mb-0
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Las relaciones con los clientes son personalizadas, automatizadas o mixtas? (por ejemplo: atención en punto de venta, #[em call center], correo electrónico, autoservicio, comunidades, entre otros).
            li
              i.fas.fa-check-circle
              span.mb-0 ¿El modelo de relación se orienta a la adquisición de nuevos clientes, la retención de los actuales o al incremento en las ventas?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué canales de contacto resultan más eficientes en términos de costo?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Cómo se alinean los canales de distribución y venta con las rutinas y preferencias de los clientes?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-sm-12
        .subt.mb-4(data-aos="fade-right")
          .row.align-items-center
            .col-md-auto.col-3
              img(src='@/assets/curso/t1/ico.png', alt='')
            .col-md-auto.col-9.ps-0
              h3.mb-0.text-white Canales
        .tarjeta.px-2
          .row.bgazulclaro2.borde-redondo
            .row.align-items-start.mt-4
              .col-auto
                img.px-3(src='@/assets/curso/t3/img19.png', alt='')
              .col
                p Una vez identificados los segmentos de clientes y definida la propuesta de valor, es fundamental establecer los canales adecuados para entregar dicha propuesta de manera efectiva. Estos canales abarcan tanto los medios de distribución como los mecanismos de venta y comunicación, a través de los cuales el emprendedor conecta con sus clientes, promueve el producto o servicio y asegura su entrega.
            p.mb-3.px-4 Para analizar este componente, se sugiere reflexionar a partir de las siguientes preguntas orientadoras: 
            ul.lista-ul--color.marron.fa-al.px-4.mb-5
              li
                i.fas.fa-check-circle
                span.mb-0 ¿A través de qué canales de distribución y ventas prefieren ser contactados los clientes?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Qué canales se están utilizando actualmente para interactuar con ellos?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Cuáles de estos canales resultan más efectivos y generan mejores resultados?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Qué canales presentan deficiencias o no alcanzan los niveles de eficiencia deseados?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Qué factores explican el buen o mal desempeño de dichos canales?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Qué canales representan una mayor eficiencia en términos de costos?
              li
                i.fas.fa-check-circle
                span.mb-5 ¿De qué manera se integran los canales de distribución y venta con los hábitos, rutinas y preferencias de los clientes?
      .col-lg-6.col-md-12.col-sm-12
        .subt.mb-4(data-aos="fade-right")
          .row.align-items-center
            .col-md-auto.col-3
              img(src='@/assets/curso/t1/ico.png', alt='')
            .col-md-auto.col-9.ps-0
              h3.mb-0.text-white Segmentos de clientes
        .tarjeta.px-2
          .row.bgverdemate2.borde-redondo
            .row.align-items-start.mt-4
              .col-auto
                img.px-3(src='@/assets/curso/t3/img20.png', alt='')
              .col
                p El cliente constituye el eje central de cualquier emprendimiento; por tanto, los productos o servicios deben estar orientados a satisfacer sus necesidades, expectativas y deseos. Esta sección se vincula estrechamente con el área de mercadeo y responde a la pregunta “¿quién?”. Identificar con precisión los segmentos de clientes permite personalizar la propuesta de valor, optimizar los canales de comunicación y distribución, y fortalecer las estrategias de fidelización.
            p.mb-3.px-4 Para este punto se presentan preguntas clave para el análisis de este componente:
            ul.lista-ul--color.marron.fa-al.px-4
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Para quién se está creando valor con el producto o servicio?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Quiénes son los clientes más relevantes o estratégicos para el negocio?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿A qué sector económico pertenece la idea de negocio?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Qué características, comportamientos o necesidades comparten los integrantes de este segmento? (por ejemplo: datos demográficos, estilo de vida, nivel socioeconómico, zona de residencia).
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Se ofrecen productos o servicios diferenciados para distintos segmentos?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Existe una rentabilidad distinta según cada tipo de cliente o nicho de mercado?
              li
                i.fas.fa-check-circle
                span.mb-0 ¿Se gestiona una relación personalizada según el tipo de cliente? (por ejemplo: atención diferenciada para banca personal, Pyme o corporativa, como en el caso de algunos bancos).

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Fuentes de ingresos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-auto
        img(src='@/assets/curso/t3/img21.png', alt='')
      .col-lg.col-md.col-12
        .row.bgamarilloclaro2
          p.px-4.py-3.mb-0 Esta sección corresponde al área financiera y responde a la pregunta “¿cuánto?”. Su propósito es identificar cómo se generarán ingresos a partir de la propuesta de valor, es decir, las formas de monetización del negocio y las fuentes de facturación de la empresa. Este análisis permite determinar si el emprendimiento es económicamente viable y sostenible en el tiempo.

    p Las siguientes preguntas orientadoras permiten analizar este componente:

    .row.justify-content-center.mover.mb-5(data-aos="fade-left")
      .col-lg-9.position-relative
        .avatar2
          figure
            img(src="@/assets/curso/t3/img22.png", alt="alt").d-none.d-lg-block
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Cuánto está dispuesto a pagar el cliente por el producto o servicio?    
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Cuál es el valor que actualmente paga por soluciones similares en el mercado?  
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Qué métodos de pago utilizan actualmente?  
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Qué formas de pago prefieren los clientes?
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Qué porcentaje representa cada tipo de cliente en el total de los ingresos del negocio?
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿Los ingresos generados por los clientes son recurrentes o esporádicos?
        .row.align-items-center.bgazulclaro.borde-redondo.mb-2
          .col
            p.px-4.mt-2 ¿El precio del producto o servicio es fijo o varía según factores como la oferta y la demanda, estacionalidad o disponibilidad?



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
