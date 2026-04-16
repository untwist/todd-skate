export type SpotCategory = 'All Terrain' | 'Street' | 'Bowl' | 'Vert'

export type Spot = {
  name: string
  category: 'Street' | 'Bowl' | 'Vert'
  distance: string
  description: string
  activeLabel: string
  activeColor: 'cyan' | 'orange' | 'error'
  safety: string
  icon: string
  imageUrl: string
}

export const spotCategories: SpotCategory[] = [
  'All Terrain',
  'Street',
  'Bowl',
  'Vert',
]

export const featuredSpot = {
  name: 'The Courthouse',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBO0OlZYHiULTtj0B6SEcV3P4j8gJ3RKiUVegk5jXFtSzgazLSohALr0kxZqZEe6ELeUN6L8qi-xs77PesOWtnAv3yXuWuegESywH4EaZxHXdglzqq5POfYPwpTmVhR_ssajwQb2V6NHpeMKmpuI8Vwma3S2z9QTxgYoq6TbMi_Se2L7TDTKOwQOLS-jKOW88xcd0YBgHYz6x2Qie6QyqIEtU6p2GfAj1zhLwtSbDEuA3NISqPU-0gH7rs9vBnUDhyeVZuHpkdOaGQ',
  liveLoad: '34 Skaters Now',
  safety: 'Safety 8.5/10',
  crewAvatars: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBVN6kHqkmMMnGrb5zMRC6DFMO65IEc7V7FfM5fbRv8HY9xW-cNm0PkjVH3TR9Q6PJPXhsfpzvHLH1HFvM_G5v75I7uhoseJ6wv8Z5tVWLdLw3oJq1BT94hwOiI_-SS-A0uvhDGhKrsXv4K3Rtdej7Tv0kqnr7YqkmoJWtUy1t4aOzzubBN-is0WU1jLcjAWODajlLABrv2VvXJtu5VKIvdtE3iEqCaFjLkzJ_PkL3HD4gICEy--I2ELq0UC9eF1JBIObrNXgoJF1I',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfZl-rh0D4oeM5IxXhnu39FncyW-vLhdM9VvzmBlCZLWRAYf7aUK2HqwZNxWAs43hkE2HwRpK3QZMamlBa8Yz_Oz1pCtAgGpyUxJyRana_y2r_oeoEOtHTS66aHhlY8nmmaLJh-VDnYpas90xjW7BKNTZWqLF3QdgTlLvPKFzqQLD0z5d2uUNdxBn_69S-sG3CRX1UbM3AdecJwJczgmp4rqbIbywgpHyeJynDLY_IiDqVHy7sgSIgiMsLdr0-xSJo12PdOITJGo',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDhCOPvuZvJ-uHD14CIbHvd8Ky1H5XSSz1lzyIR66cnQWBKN6v9QrbfL06Z2aBD_xbaFwh7jXd-bqvdJuq-f7iDyYrSclkSRoNW9853rauWCZcfhCgo8KwjcQ1gwOB8FGmI11tF63gvgyNEYDjsXoT6gU54Ad9S96YhsbsoVMJ59e6CJZPo_Cy13L0L7DwSFNN60yNRaapxhwYv1UVDRYoi2OIyPlZBgoDCrWVsVzLzOVNSoDecKemTsOt1B3zt2YNJwFLkxvoGplM',
  ],
  crewExtra: '+12',
}

export const spots: Spot[] = [
  {
    name: 'The Pier Bowl',
    category: 'Bowl',
    distance: '8.2km',
    description:
      'Industrial drain pipes transformed into a world-class vertical playground.',
    activeLabel: '12 Active',
    activeColor: 'cyan',
    safety: 'Safety: Moderate',
    icon: 'directions_run',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaFF2ZnCMFyoILOwFm99l-iBCvqb72d_xaA86T71oZv6jOm1sOyBirV7fFgjQGmcABDRrEm6EHcWCVAjnCDTwlnq89eiWKPL9m2BKxHnBx5d-Cjgv-CGa9vbwx6I0wuypFhea_4CAH1Ua-cl94qjsHcqI64d2x_tI6JV--8xl3j007m_PmtMjMMjRZe70qi7ZBLhfk5A0f_IGBjNMzag0blCQXwGKJHkyAFYIJlKexKBFQQfN54-Fjj87rPoavh-WC_jav1xPd0Kc',
  },
  {
    name: 'Iron Works',
    category: 'Street',
    distance: '14.5km',
    description:
      'Grit, rust, and perfect ledges. Not for the faint of heart or clean wheels.',
    activeLabel: '2 Active',
    activeColor: 'orange',
    safety: 'Safety: Low (Sec)',
    icon: 'flash_on',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1PSTTH3hB0aLD14Qg1A4Pa3eeDV9MrXAdq7Vprny4bGXlmm7y5Rte8My2xdU3W6018aJKdEYNc7L-y3kK50Leqn6UucEIlb04IZuIuCS3kN_mpkpdls-anEpo04FpjQFZEMfpVCblLq0mtQM3cmF_uNfUJOMNO5u9gz8yTm8famiL7dY2OotNON2dECfLkWEsPwbvs9lYyfE3WtTbNI3a22GMlHZ0XHJvsrAVe2ZbcdznFzToTaiSyfyw_uUex7jZTrDYhev0b5w',
  },
  {
    name: 'Vortex Indoor',
    category: 'Vert',
    distance: '2.1km',
    description:
      'Pristine wooden ramps and high-flying vert specialists. Member access only.',
    activeLabel: '58 Active',
    activeColor: 'cyan',
    safety: 'Safety: Elite',
    icon: 'shield',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrKJxVUHaceHrQbceG5d8e7CvCoYneyOvFHtfUtyBlg1qAouEYpPGUyyGo0rvyegxsCEU1aUM6ioayvZ9cWfkt_nHCSbRCbgZtPacrxMceJU1EGEkrevDl4VhXGw-SKcjkZY7oG0rfjjH0C1cSrKMOOlDNOBkFQYK1npmOOrmILYO8TDPymEiflDdYqIhRH37rXMg7JzX_P40oxdpL-tvmmbNst2yY8b-rmXhoCcxPr6WLQMUUpBAx5vD5N92bbCqlNpQgAKyZD-Q',
  },
  {
    name: 'Central Hub',
    category: 'Street',
    distance: '0.5km',
    description:
      'Legendary hubba ledges and a 12-stair. Watch out for the midnight sweep.',
    activeLabel: '0 Active',
    activeColor: 'error',
    safety: 'Safety: Bust-prone',
    icon: 'timer',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVLaF43OJaCQtcgA-nCeoo7M_lk-lI9cH0AaKCW4fSTjb0mB-eba11m05eSY_P_O1gukfJhS78w2yaVotdOHi3_-x3ofazWclYvey00jhuoHb6SqE5lEIGCYWaM4AOGum6Uz4VMSPDBPU-K0LJ-9s6JaNQZQn3YY4vbaNgVvaaN6_kZhLNUSy48snaVjtWlzRMiWm3vZgxo6TBiNvYn0OL-g5rol0ivWcNZXPUSPIC39q5kL9BWu2izRUbhTkLjHBr2a1s19SuiWA',
  },
]

