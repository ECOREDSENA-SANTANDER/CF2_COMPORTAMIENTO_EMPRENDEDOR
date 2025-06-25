<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodología CANVAS del entorno

    .row.justify-content-center.align-items-center.mb-5
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

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-7.col-sm-12
        img(src='@/assets/curso/t3/img2.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p Conocido como Business Model Canvas, fue desarrollado por Alexander Osterwalder en 2011, y se considera una herramienta estratégica que permite diseñar, visualizar, evaluar y reinventar modelos de negocio, tanto en etapas iniciales como en procesos de mejora o cierre, por esta razón representa, de manera simplificada, los elementos clave que definen el funcionamiento de un modelo de negocio, estructurados en bloques interrelacionados.
        .row.bgverdemate2
          p.px-4.mt-3 Cuando se aplica desde la perspectiva del entorno, el modelo se amplía para considerar factores externos que inciden directamente en la viabilidad del negocio; estos factores se agrupan en cuatro áreas fundamentales; cada una de estas áreas permite comprender cómo interactúa el negocio con su contexto externo y facilita la toma de decisiones estratégicas. 

    p.mb-4 A continuación, se describe cada una de ellas:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-12.col-md-12.col-sm-12
        TabsA.color-acento-botones
          .tarjeta.bgazulclaro2.p-4(titulo="Fuerzas del mercado")
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
          .tarjeta.bgazulclaro2.p-4(titulo="Fuerzas Macroeconómicas")
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
          .tarjeta.bgazulclaro2.p-4(titulo="Actores y dinámicas en la competencia del negocio")
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
          .tarjeta.bgazulclaro2.p-4(titulo="Tendencias estructurales y emergentes")
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


    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
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
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-1.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Poder de negociación de clientes y proveedores
                    p.mb-2 Más allá de la fijación de precios, estos actores impactan la experiencia del usuario y la cadena de valor completa. En la economía actual, los clientes están empoderados por la información y las plataformas digitales, por lo que el valor percibido, la personalización del servicio y la reputación #[em online] son variables clave para sostener su fidelidad. Del mismo modo, la dependencia excesiva de un solo proveedor puede comprometer la continuidad del negocio frente a disrupciones logísticas o políticas comerciales adversas.
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-2.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Nuevos competidores y productos sustitutos
                    p.mb-2 El ingreso de nuevos jugadores en el mercado no solo depende de factores regulatorios o barreras de entrada, sino también del grado de innovación y digitalización del ecosistema empresarial. Por ejemplo, un emprendimiento tradicional puede verse rápidamente desplazado por #[em startups] que integran modelos de negocio basados en economía colaborativa, automatización o inteligencia artificial.
                    .row.bgazulmateclaro
                      p.px-4.py-2 En cuanto a los sustitutos, ya no se trata únicamente de productos equivalentes, sino de soluciones alternativas que satisfacen la misma necesidad de forma más eficiente, sostenible o accesible. Por ello, el análisis competitivo debe ampliar su mirada para incluir tecnologías emergentes y patrones de consumo que aún no son evidentes, pero que pueden escalar rápidamente.
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-3.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Rivalidad entre competidores
                    p.mb-2 Esta fuerza no solo mide la cantidad de actores en el mercado, sino también el grado de diferenciación, la velocidad de innovación, la sensibilidad al precio del consumidor y la estrategia de posicionamiento. Mercados altamente saturados obligan a los nuevos emprendimientos a desarrollar propuestas de valor altamente innovadoras, que puedan romper con los esquemas tradicionales y generar ventajas competitivas difíciles de imitar.
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-4.png' alt='')
                .row.justify-content-center.align-items-start
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Hacia un enfoque estratégico dinámico
                    p.mb-2 La interacción entre las fuerzas macroeconómicas, competitivas y las tendencias clave exige que el emprendedor adopte una visión sistémica y flexible de su modelo de negocio; no basta con evaluar el entorno en la etapa inicial del proyecto, es fundamental mantener un proceso constante de monitoreo y ajuste.
                    p.mb-4 Instrumentos como la vigilancia tecnológica, la inteligencia de mercados y el análisis prospectivo se convierten en aliados estratégicos para anticiparse a los cambios del entorno. De este modo, el modelo CANVAS deja de ser un simple lienzo estático para transformarse en una herramienta viva, que evoluciona con el contexto y permite al emprendimiento mantenerse relevante, competitivo y resiliente.
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/t3/tar1-5.png' alt='')

    Separador  
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2. Desarrollo del mapa estratégico

    



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
