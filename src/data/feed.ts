export type Crew = {
  name: string
  meta: string
  imageUrl: string
}

export type HotSpot = {
  name: string
  ridersNow: string
  imageUrl: string
}

export type FeedPost = {
  handle: string
  timeAndLocation: string
  verifiedLabel?: string
  title: string
  skillLabel: string
  stars: number
  imageUrl: string
  props: string
  comments: string
  caption: string
  avatarUrl: string
}

export const localCrews: Crew[] = [
  {
    name: 'VOID RUNNERS',
    meta: '12 ACTIVE • BERLIN',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmXW0IYVPeZjR-NrCsUjBPKA8TXs5rsNNTvqJqy0EkCgwZF2ooVCAbRqFPSNCgmAFdppbSSrARep8tVSN791oeIWpcc_OEAvQdRf6OVV498Cch2EPQ78UkymZ2CrM7cz5jig4LpuMG9W-x-dpQZj1tKCBM95Dy6Ct5Lr901rdeRPIvPoY-SApchxQ_SH6jjV5YhWvyAA-OCA9BwuZG4s1hTD2wBUc8lF-Asc4GDWR9io6wJrEvpM_IiBzKA72r56ZO1DLFvV2HEsg',
  },
  {
    name: 'RAZOR EDGE',
    meta: '8 ACTIVE • LONDON',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmJmDmmbALvx1woU4ObCSB1KZrWcpMC3ROX27V8_crS7CjSo__I2SuUX6i5rUJeQCO1VFnzzqGH2tlL2D-w39JrEZQRdi8egzvPnSB1PAjP1MIPdG_8NX4lAgCDxG8ca27mT3a0HndR1OhErybX_QqooWbJdawz9ypODIwiuSopIOuFzZW6krt9hy6YljYMFwV8XZ4TgRNZcRXoJIQfMYWJvPja8SBaYk74hl64XbQgAJKTAy2X0BGKVbBDcosnOBxvQ7-xHQYdRM',
  },
  {
    name: 'NO-COPLY',
    meta: '24 ACTIVE • NYC',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA78jveAlYXCgxGh1fZSXWPhH8pfQ4RY7Bz0jtD7KKju6vUIWbBQc9S-lXO4E0PKPDgdshBpdLLygfP1ANHJL6fFlfGRaD8XzFwPvHtdQ2BuzesQr7TTOtdtifqtrCP0hYES6zzFfGx6mldF1-eutF2moesxtU-7FKZ0zyMeHkEjtSqB4D9OsUb_uxpMNM9N4mwSAFSIt9wuIY82_3UynpaPC_Nf2OZzGLKwYDEAaawpYgcQQnIQjukaG5FmD6at51taaiIzvdlan0',
  },
]

export const hotSpots: HotSpot[] = [
  {
    name: 'THE BASIN',
    ridersNow: '42 RIDERS NOW',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSDgPLER0dG3cUNVuLdxU9di1EgjGhTrzwvtSkrZzJx1anEhCImsBo_yljJxIS8i9FA6yxw4XKy_YrGOD_bf9p7o4Xs79BWtJ5_gJs45COZHGTjZhdduILMZCwktfYEE-F-e4RRS4eBIDPIGgoWb6mxgZBohk0X5294UNh25sCuEYtkwH0PGe1pNlT2fVltcOGOti-ypmVKf4FMHbMfRssk7iKmHibU3r3GhkUIas6sQSGuQc2y7Gf6QTDmZxHJly9URlI3GZ-YNs',
  },
  {
    name: 'TERMINUS HUB',
    ridersNow: '12 RIDERS NOW',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEHyqJ4CI6NMFFIG6ZhCeqQzHc5p000CRQrXiLe_s-g4X9Z2auaFsUIwCG4_0xKR6hwm__vDVvfAYf9lp39URm5DBIdvHQhTGI2_iJU0mCXETqHx_-yhO3n1yFnLx25yDxTDmSC3ANaXtsmuqgeTov-HOyQBjgWOFRyXan8qEHrw1OZ_lCnhhUE8utRH-XMRLfzhZCz6712u8HMpUVaM1tIIqeUF1cujQksWItD2ok_-13Kz37LVHk2y91wmpghf0Ec98InGMip70',
  },
]

export const feedPosts: FeedPost[] = [
  {
    handle: 'KAI_STREETS',
    timeAndLocation: '12m ago • Barcelona, ES',
    verifiedLabel: 'VERIFIED TRICK',
    title: 'FS FEESEE FLIP',
    skillLabel: 'SKILL: PRO',
    stars: 4,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQzIExY260tLuOjeE4K1Y7WJCx5A9X7LsPb0LKI5PbzIwjh5zW6W3saNPwwkxiF7gcvIN4IfCtesx2v_XArKvgr9V0pmJznDcOg3QdD5woN0AYSZqtroZB7Yq1SEu838iybd_QVU14T7bMddv_xzt7VxCscF6-gQtpVUlEzDAO8_veirrwWk9Vsw1Gx7Usr3HwHCEhRTe-VU4D5uq4O9k76E7aCucJBZE284qjgOgfDLOL_zbmcqCeQz9ADtGC3vP0jC7Dl6OoIbE',
    props: '1.2K',
    comments: '84',
    caption:
      'Finally landed the FS feesee flip after 4 hours at the MACBA ledge. The pop on this concrete is insane. Gear: Kinetic Pro Deck 8.25.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBl06fcnH0w96HDeJZrsoAkZoq6NDXShSVHNhEnGEVCgEiwSfS9jqtGrQyaewuISh2g3HfK_VhVIsTGoRrtEjsRj5chhQNJKYQ_OdgxgeBEoRdHjnZOthvPOWOiLV3YGXx1mUyCroagz7jevKGDjREIscRgw8K9SYCLVtK1wabX-GpySGDgOTfmY6AOG5ErrjIB78mPJRbeYg1wM4eIqoUoFW4dtwl2NUU9vo-nSdqoA7B3HaOcQmxIczHJ4wtSBajT1UARVsDM2FY',
  },
  {
    handle: 'VOID_RUNNER_01',
    timeAndLocation: '2h ago • Berlin, DE',
    verifiedLabel: 'VERIFIED TRICK',
    title: 'SMITH GRIND',
    skillLabel: 'SKILL: INTERMEDIATE',
    stars: 3,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAl37uZ50UZw5WTHqtL1_TsLIleaOxZeLu3S6SFpcuABCkg6orj6WQls41H-dR95ricUv21T65GuzPsC7z6-mH94YhyHpa4AntU4a7XrUOQ2erYvRdePkN4_3G9xN8OjP_1JMZ3NxSoA7l-ynvaD3NF_RFDqr_6CmiQ2oGNLpmfm662XdPI8Vtq_36jhEW3zCspS0AbJPZREpPH-1FF5sa3pc7VWk9N0sDWOxfQp-BxuR9NdjwwX-P5KBWB6tJSeRMLwrxZ54ccRrY',
    props: '458',
    comments: '12',
    caption: 'Industrial vibes only. Testing the limits of the new grind plates.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCk0rbKHIPDFmKQbpqPeMgsoJ4guvJY1SsEh5fDouMuYjVTJUj_oD784ZtRbxaTgpt-ttXMg-lu7fIlbC57t3wxF4RqlfzvFEYIXAEYvxo02BTeBxUbN7Ks8XUHHBCme0_fSYNlDmgG0jjctDrLmshZEXg7vUYM28S04BA7rC55XTW8Frw_GhOX34H94SiWZj1QWVQU1__JkGW4UONqWf1bLPJK-SRahsEh6EERnnaaptCzK0fNKublHTSCoHUx44ubrdcr4bPOCK0',
  },
]

