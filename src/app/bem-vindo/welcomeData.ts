type WelcomeData = {
  title?: string
  imgSrc?: string
  imgAlt?: string
  contentTitle: string
  contentBody: string
  isActive: boolean
}

export const welcomeData: WelcomeData[] = [
  {
    title: 'Boas Vindas! 👋',
    imgSrc: '/Seja-Apadrinha-Brasil.png',
    imgAlt: 'Seja Apadrinha Brasil',
    contentTitle: 'O que é Apadrinha Brasil?',
    contentBody: 'O aplicativo Apadrinha Brasil apresenta para padrinhos habilitados crianças, adolecentes e jovens adultos disponíveis ao apadrinhamento e informa suas principais características, gostos e o que mais sonham.',
    isActive: true,
  },
  {
    contentTitle: '🤝 Encontros Períodicos',
    contentBody: 'Além disso, o aplicativo organiza encontros periódicos entre padrinhos de todo o Brasil e entre técnicos de instituições de acolhimento e de programas que cuidam de jovens em repúblicas.',
    isActive: true,
  },
  {
    contentTitle: '💻 Curso de Treinamento',
    contentBody: 'Ainda, para aquelas Comarcas que ainda não contam com cursos próprios, o aplicativo também fornece uma aba com afilhados e curso para treinamento de técnicos de instituições de acolhimento.',
    isActive: true,
  },
  {
    contentTitle: '🤲 Auxílio',
    contentBody: 'Aquelas pessoas que porventura desejarem somente auxiliar financeiramente ou com serviços um jovem, também poderão fazer por meio do aplicativo.',
    isActive: true,
  },
]
