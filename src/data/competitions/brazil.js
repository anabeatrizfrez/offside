export const brazilCompetitions = [
  {
    id: 'brazil',
    title: 'Brasileiras',
    
    competitions: [
      {
        slug: 'bra.1',
        name: 'Brasileirão Série A',
        type: 'league',
        totalRounds: 38
      },
      {
        slug: "bra.2",
        name: "Brasileirão Série B",
        type: 'league',
        totalRounds: 38
      },
      {
        slug: "bra.3",
        name: "Brasileirão Série C",
        type: 'cup'
      },

      {
        slug: "bra.copa_do_brazil",
        name: "Copa do Brasil",
        type: 'cup'
      },
      {
        slug: "bra.supercopa_do_brazil",
        name: "Supercopa Rei",
        type: 'cup'
      },
      {
        slug: 'estaduais',
        name: 'Campeonatos Estaduais',
        region: 'Brasil',
        year: 2026,
        isLink: true,
        route: '/estaduais',
      },
      {
        slug: "bra.saopaulo_youth_cup",
        name: "Copinha SP",
        type: 'cup'
      },
      {
        slug: "bra.brasileiro_u20",
        name: "Brasileirão Sub-20",
        type: 'cup'
      }
    ]
  }
]