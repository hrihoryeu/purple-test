import { FooterInfoProps, GoodToKnowData, HelpData } from "./interfaces"

const helpList: HelpData[] = [
  {
    text: 'הסניף הקרוב',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/first.png'
  },
  {
    text: 'אבחון מוקדם',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/second.png'
  },
  {
    text: 'מניעה וגורמי סיכון',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/third.png'
  },
  {
    text: 'מלונית לחולים',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/fourth.png'
  },
  {
    text: 'התייעצות עם מומחים',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/fifth.png'
  },
  {
    text: 'שיקום ותמיכה',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/sixth.png'
  },
  {
    text: 'זכויות החולה',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/seventh.png'
  },
  {
    text: 'ןטרס תולחמ',
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/eighth.png'
  },
]

const goodToKnowList: GoodToKnowData[] = [
  {
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/g-first.png'
  },
  {
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/g-second.png'
  },
  {
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/g-third.png'
  },
  {
    url: 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/g-fourth.png'
  },
]

const footerInfoList: FooterInfoProps[] = [
  {
    title: 'גורמי סיכון',
    dataList: ['המאבק בעישון', 'חכם בשמש', 'תזונה ומשקל גוף תקין', 'פעילות גופנית', 'כללים לחיים בריאים']
  },
  {
    title: 'מידע לחולים',
    dataList: ['מוקדי מידע ותמיכה', 'תרופות וטיפולים', 'קבוצות ומרכזי תמיכה', 'מחקרים קלינים בישראל', 'התמודדות ושיקום']
  },
  {
    title: 'מחלות סרטן',
    dataList: ['סרטן השד', 'סרטן המעי הגס', 'סרטן הערמונית', 'ילדים ומתבגרים חולי סרטן', 'גידולי מוח']
  },
]

const helpCards: Element | null = document.querySelector('.help-cards')
helpList.map(({ text, url }) => {
  const box: HTMLDivElement = document.createElement('div')
  const innerText: HTMLParagraphElement = document.createElement('p')
  const image: HTMLImageElement = document.createElement('img')

  box.classList.add('help-box')
  image.classList.add('help-img')

  image.src = url
  innerText.innerHTML = text

  box.appendChild(image)
  box.appendChild(innerText)
  helpCards?.appendChild(box)
})

const goodToKnowCards: Element | null = document.querySelector('.good-to-know-cards')
goodToKnowList.map(({ url }) => {
  const box: HTMLDivElement = document.createElement('div')
  const infoContainer: HTMLDivElement = document.createElement('div')
  const linkContainer: HTMLDivElement = document.createElement('div')
  const innerTitle: HTMLHeadingElement = document.createElement('h3')
  const innerText: HTMLParagraphElement = document.createElement('p')
  const innerLink: HTMLParagraphElement = document.createElement('p')
  const image: HTMLImageElement = document.createElement('img')
  const imageArrow: HTMLImageElement = document.createElement('img')

  box.classList.add('good-to-know-box')
  image.classList.add('good-to-know-img')
  infoContainer.classList.add('good-to-know-info')
  linkContainer.classList.add('good-to-know-link')

  image.src = url
  imageArrow.src = 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/arrow.png'
  innerTitle.innerHTML = 'והמ דשה ןטרס'
  innerText.innerHTML = 'תופתתשהב דשה ןטרס לע ףיקמ עדימםוחתב םיחמומה בטימ'
  innerLink.innerHTML = 'למידע נוסף'

  infoContainer.appendChild(innerTitle)
  infoContainer.appendChild(innerText)
  linkContainer.appendChild(imageArrow)
  linkContainer.appendChild(innerLink)

  box.appendChild(image)
  box.appendChild(infoContainer)
  box.appendChild(linkContainer)
  goodToKnowCards?.appendChild(box)
})

const footerInfo: Element | null = document.querySelector('.footer-info-content')
footerInfoList.map(({ title, dataList }) => {
  console.log(title, dataList)
  const box: HTMLDivElement = document.createElement('div')
  const titleEl: HTMLHeadingElement = document.createElement('h3')
  const separatorIcon: HTMLImageElement = document.createElement('img')

  titleEl.innerHTML = title
  separatorIcon.src = 'https://yahorstuff.s3.eu-central-1.amazonaws.com/purple-test/separator.png'
  box.classList.add('footer-info-item')

  box.appendChild(titleEl)
  box.appendChild(separatorIcon)

  dataList.map(el => {
    console.log(el)
    const boxText: HTMLParagraphElement = document.createElement('p')

    boxText.innerText = el

    box.appendChild(boxText)
  })

  footerInfo?.appendChild(box)
})