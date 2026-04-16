export type Unlock = {
  title: string
  subtitle: string
  icon: string
  iconBg: string
  iconColor: string
  locked?: boolean
}

export type TrickTapeItem = {
  title: string
  views: string
  likes: string
  imageUrl: string
  featured?: boolean
}

export const profile = {
  displayNameFirst: 'JAXON',
  displayNameLast: 'STRIKE',
  heroImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDSE8i-0LmHZwx3V7Aovh60fruUCisPbz5fRNwU8QpvhP_Pt9T_Enfyp3529_3bAzC5dteH-0gqDllQetv-UANwK0uH42vTvqfyd88X3Ghx2i2whz5KdtZ4GVOeVmZ225MYA0FGqv7m1EgKA-jOeay_qXjxrXnCOJPmAw30Q8J6jlkZ2Emb_oLLi9uPlWNwLXgceJ19YhooV59WCwVM7rdmhmLexrrSHXCSrYRvh3-qgJvkN0tT234k5WWBbCZ6QyqNxlU0g-tBoRU',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPRICKvhi3-V7dVzydqbgvnBYNbl5ocpZ9jUCYx2utxCYVezzr8PWR0QbBh7cKHd199BaX02xNfaK4lA0BFZY9AlXb_k77v7Ui_Rtzv-FV-bewCyVzQVAalBboTlKIkX6kB0ghMS97pvwd3CQpRN2iHcGfht_3p0xZkHTwn_kpQsusJXrL8mSritJ0wyRxFbJlCHV4np2y5EKKrQpYMkWxlUf1Sh9sSWMdK5RFz_mbQgGFm61X0ew36NY0gsbuxAAQ_Cvdn2EIwc',
  levelLabel: 'PRO LVL',
  globalRank: '#42',
  globalRankSubtitle: 'Top 1% Worldwide',
  totalTricks: '1,248',
  landingRate: 'Verified Landing Rate: 92%',
  skillDelta: '+12%',
  skillDeltaSubtitle: 'This Week',
  skillBars: [
    20, 35, 30, 55, 45, 80, 95, 70, 85, 60, 90, 100,
  ],
  skillDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  unlocks: [
    {
      title: 'London Rail King',
      subtitle: 'Land 5 grinds in one line',
      icon: 'workspace_premium',
      iconBg: 'bg-on-tertiary-fixed-variant',
      iconColor: 'text-secondary-container',
    },
    {
      title: 'Air Master',
      subtitle: '5.0s Cumulative Hangtime',
      icon: 'lock',
      iconBg: 'bg-surface-container-highest',
      iconColor: 'text-white/20',
      locked: true,
    },
    {
      title: '7 Day Streak',
      subtitle: 'Daily session completed',
      icon: 'local_fire_department',
      iconBg: 'bg-on-primary-fixed-variant',
      iconColor: 'text-primary-container',
    },
  ] satisfies Unlock[],
  trickTape: [
    {
      title: 'TRE FLIP @ SOUTHBANK',
      views: '12.4K',
      likes: '842',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAxmwtB0iswvowAOD-JzbuLeJLWgQU2PEtSDokZ4apvx2AfiuxNdVoIL5LXSsDUQ7jZ8aB0uZLmEAYATzLFrV9DFQMpnmRU9-5-lrtu0awVgW3E4NvpOdaehqH8oKJbEqJ-_IlXF1BveMq0enXMA6engOuG8IkJV46QI4px4reAIQdHrrB9gUr4fT1KVGP_ygw-fhn0394NP5dSxfiIfEqARn5ZMussvpgPgepMh5fmOeT-dkZICPsnQd7WhsLvhyPyHFsHxuOLO-I',
      featured: true,
    },
    {
      title: 'STREET LINE #04',
      views: '8.1K',
      likes: '615',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAv9aFEs1KBa_4q2SdC-qs38LwYqsiHMMQ39MR7ocaPsAQQJrtqTwQKSeq3MXz5L8MVDSI99oOsqKmX7ZsDjMAtCrJwpwgJtEtdW4AVsrggEjYarA_EflBTpXlDXfRqvku-NaWV6ucMpUIReehQ9MPRtjcx9SU--wVXB7kPH1A0ktSigewfZYXj3R_bdLlj03BuF2Wy2ePZZtrTvt1j81Jkit3hlC8vuDkZWpdpruL59H54lJ-8n30bRW83Y7AEoU3r20YGyY6gj1g',
    },
    {
      title: 'NBD BLUNTSLIDE',
      views: '21.0K',
      likes: '1.2K',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCzwCvXxR9-PVrOGvaNQNQWWynJH6tG-U-EyvetGpEGY_yNvS0B7YDsa5Hr792JMp3MPAh8rpApdFSbjUwa3GisZ5HrPeDRYUTJsN0gF-ZMYfAKDXrvyT3BE5z-jJLgKRMJqFuSvQiO-gpZR0VyjTlX2Mi_I7phw7nGQ7SQ_hUtC1TCext9U3RoXPEVG85f2MhdFQE0jXBQFog3QCCrNEV1lhwSsqD-A5fjQtHDCDTZx8U_NKex8wTuvNxpzL4489N5RAkN-rvB8Wk',
    },
    {
      title: 'LATE NIGHT FLOW',
      views: '5.4K',
      likes: '302',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB42K2xqQAXqi3uAlvgZxFpVLBrz--2Y8omdRARWsCXsKi9aZb2pORxernom5CFBQiXtZvOFP8V8YcUfV_pwxZNeujHAtOWAdSBdoaCG2CHo5eNzJGN6VAOgNQZ-7PamGkWyOHKtS5nPfhrdgjSnVc_Ii3RCV8-8rNqT393bCpmfAozbAwE-HL-9O6f87kIqe5NM2DXpl3cXQecDZJSl_D_gLj3tm9uMuw0_b4EuHeT-DsP-E71v-Eiy5Mvza4O45XsVXbsm3Nn5NE',
    },
  ] satisfies TrickTapeItem[],
  setup: [
    { label: 'Deck', value: 'KINETIC 8.25" PRO SERIES', highlight: true },
    { label: 'Trucks', value: 'INDY STAGE 11 TITANIUM' },
    { label: 'Wheels', value: 'SPITFIRE F4 54MM' },
    { label: 'Bearings', value: 'BONES CERAMIC REDS' },
  ],
  sponsors: ['VOLCOM', 'NIKE SB', 'REDBULL'],
}

