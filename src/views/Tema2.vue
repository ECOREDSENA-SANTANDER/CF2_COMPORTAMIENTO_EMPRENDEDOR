<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Oportunidades para emprender


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.col-md-7.col-sm-12
        img(src='@/assets/curso/t2/img1.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p Antes de iniciar un emprendimiento, es fundamental realizar un análisis riguroso de todas las variables que puedan influir en la viabilidad del negocio. Esta etapa previa resulta clave para identificar factores que podrían potenciar o limitar el éxito de la iniciativa emprendedora. El desconocimiento de estas variables suele ser una de las principales causas de fracaso en los emprendimientos emergentes.
        .row.bgazulmateclaro.align-items-start.py-2.mb-0
          .col-auto
            img.mt-1(src='@/assets/curso/t2/img2.png', alt='')
          .col
            p.mt-1 En este sentido, es necesario comprender que las empresas no operan de forma aislada: están insertas en un sistema financiero y forman parte de un subsistema productivo que, a su vez, se articula dentro de un sistema económico más amplio. Este sistema se encuentra influenciado por distintos entornos, los cuales pueden clasificarse en:


    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Entorno general y entorno específico

    TabsC.color-acento-contenido.bgamarilloclaro2(data-aos="fade")
      .py-3.py-md-4.bgamarilloclaro2(titulo="Entorno general")
        .row.align-items-start.justify-content-center
          .col-lg-5.col-md-7.col-sm-12
            img(src='@/assets/curso/t2/tar1-1.png', alt='Texto que describa la imagen')          
          .col-lg-6.col-md-12.col-sm-12
            p Afecta a todas las empresas, sin importar su sector. Incluye factores de tipo:
            ul.lista-ul--color.marron.fa-al.px-0
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Económico:] variables coyunturales (como la inflación o el desempleo) y estructurales (como la distribución sectorial de la economía) que influyen directamente en la actividad empresarial.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Sociológico:] nivel educativo de la población, hábitos de consumo, dinámicas sociales y laborales, entre otros.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Político-legal:] estabilidad institucional, políticas públicas, regulaciones económicas, incentivos para la innovación, entre otros aspectos normativos.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Tecnológico:] infraestructura, desarrollo e innovación tecnológica disponibles en el país o región.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Medioambiental:] normas y políticas relacionadas con sostenibilidad, uso de recursos y compromisos ambientales nacionales e internacionales.
      .py-3.py-md-4.bgamarilloclaro2(titulo="Entorno específico")
        .row.align-items-start.justify-content-center
          .col-lg-5.col-md-7.col-sm-12
            img(src='@/assets/curso/t2/tar1-2.png', alt='Texto que describa la imagen')          
          .col-lg-6.col-md-12.col-sm-12
            p Tiene un impacto directo y diferenciado sobre cada empresa, dependiendo de su sector y modelo de negocio. Incluye:
            ul.lista-ul--color.marron.fa-al.px-0
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Proveedores:] suministran los insumos necesarios para la producción.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Intermediarios y distribuidores:] canales que permiten la llegada del producto al cliente final.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Clientes o consumidores:] determinan la demanda de productos y servicios.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Competencia:] empresas que ofrecen soluciones similares en el mismo mercado.
              li.mb-0
                i.fas.fa-check-circle
                span.mb-0 #[b Intermediarios financieros:] entidades que proporcionan financiamiento y recursos económicos para operar.

    Separador  
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1.	Importancia de este análisis para emprender

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t2/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La empresa, como unidad económica, debe mantener una capacidad constante de adaptación ante los cambios del entorno, los cuales pueden generar amenazas u oportunidades. Por ello, antes de elaborar la matriz DOFA (FODA) personal desarrollado en el componente anterior, el emprendedor debe observar y analizar el contexto con una visión estratégica que le permita identificar la necesidad real del mercado, su capacidad para responder a ella y los factores externos que pueden influir en el éxito o fracaso de su iniciativa. Como complemento a esta actividad, lo invitamos a dar respuesta a estas preguntas que le permitirán identificar oportunidades en el mercado.

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Preguntas clave para identificar oportunidades emprendedoras

    p.mb-4 A continuación, se presentan preguntas orientadoras que pueden guiar el análisis de oportunidades antes de estructurar una idea de negocio:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t2/img4.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        .row.bgnaranjamate.px-4.py-3
          ul.lista-ul--color.fa-al.mb-0.mt-2
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Qué necesidad insatisfecha presenta actualmente el mercado en relación con un producto o servicio específico?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Ese producto o servicio enfrenta fallas o deficiencias que puedan corregirse o mejorarse?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Existen nuevas tecnologías disponibles que puedan optimizar o reinventar ese producto o servicio?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Se identifica una demanda concreta en un grupo poblacional o segmento demográfico específico?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿La zona geográfica de atención ha crecido o hay cobertura insuficiente en ciertas áreas?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Se han implementado cambios normativos, leyes o políticas públicas que faciliten nuevos emprendimientos?

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-9.col-md-12.col-sm-12
        .row.bgamarilloclaro2.px-4.py-3
          ul.lista-ul--color.fa-al.mb-0.mt-2
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Es posible disminuir los costos de producción mediante tecnología, logrando así mayor competitividad en el mercado?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Han cambiado las preferencias culturales, hábitos de consumo o estilos de vida que impactan la oferta actual?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Hay nichos de mercado desatendidos por la competencia que puedan ser aprovechados?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Se identifica un sector o industria en expansión con posibilidades de incorporación?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿Existe la oportunidad de adaptar e introducir un producto o servicio exitoso en otro país?
            li
              i.fas.fa-check-circle
              span.mb-0 ¿El tamaño del mercado permite la entrada de nuevos actores sin saturarse?
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t2/img5.png', alt='')



</template>

<script>
export default {
  name: 'Tema2',
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
