<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Liderazgo, retos y estrategias para permanecer en el mercado

      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-12.col-sm-12
          .row.bgnaranjamate.borde-redondo
            p.px-5.py-3 El valor de emprender trasciende la simple creación de una empresa, ya que, más allá de iniciar un negocio, implica un proceso de transformación personal que fortalece el liderazgo, estimula el crecimiento individual y genera un impacto positivo en el entorno del emprendedor; esta experiencia desarrolla capacidades únicas que no solo se reflejan en el ámbito económico, sino que también se proyectan en lo social, lo emocional y lo humano, al consolidarse como una vía para construir proyectos de vida con sentido, propósito y compromiso.
        .col-lg-3.col-md-5.col-sm-12
          img(src='@/assets/curso/t1/img1.png', alt='')
        .col-lg-4.col-md-12.col-sm-12
          .row
            .col-auto
              img(src='@/assets/curso/t1/img2.png', alt='')
          p.mt-2.mb-2 Ser emprendedor:
          ul.lista-ul--color.fa-al
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0 Genera confianza en sí mismo.
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0 Convierte a la persona en referente para su familia y comunidad.
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0 Desarrolla habilidades como la creatividad, la empatía y el liderazgo.
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0 Promueve valores como la perseverancia, el compromiso y la toma de decisiones.
        
      Separador  
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.1. Dinámicas y herramientas empresarial en Colombia

      p.mb-4 Según el Informe de dinámica empresarial elaborado por Confecámaras (2019), con base en el Registro Único Empresarial y Social (RUES), en 2018 se crearon 328.237 nuevas unidades productivas, distribuidas en los siguientes sectores:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-9.col-sm-12.col-md-12
          .row.mb-2
            .col-12.col-md-8.col-lg-5.p-0.bgverdemate
              img.p-2(src='@/assets/curso/t1/img3.png', alt='')
            .col-12.col-md-12.col-lg-7.bgamarilloclaro
              ul.lista-ul--color.fa-al.mt-4.px-3
                li
                  i.fas.fa-check-circle
                  span.mb-0 Comercio: 37,9 %
                li
                  i.fas.fa-check-circle
                  span.mb-0 Alojamientos y servicios de comida: 16 %
                li
                  i.fas.fa-check-circle
                  span.mb-0 Industrias manufactureras: 9,5 %
                li
                  i.fas.fa-check-circle
                  span.mb-0 Actividades profesionales, científicas y técnicas: 5,9 %
                li
                  i.fas.fa-check-circle
                  span.mb-0 Otras actividades de servicios: 4,5 %
              p.px-3 Estas cinco categorías concentraron el 74,1 % del total de nuevas empresas.
          p.mt-3 No obstante, también se reportó el cierre de 180.507 unidades productivas, lo cual evidencia la fragilidad de muchos emprendimientos frente a factores internos y externos.
        .col-lg-3.col-sm-6.col-md-6
          img(src='@/assets/curso/t1/img4.png', alt='').d-none.d-lg-block

      .subt.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.col-3
            img(src='@/assets/curso/t1/ico.png', alt='')
          .col-md-auto.col-9.ps-0
            h3.mb-0.text-black ¿Qué factores inciden en el fracaso empresarial?



  </template>

<script>
export default {
  name: 'Tema1',
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
