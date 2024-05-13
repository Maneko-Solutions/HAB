import {
  CarInfoType,
  CarProblemType,
  CarReasonType,
  DataType,
  NewsType,
  ScheduleType,
  UserType,
  WorkerType,
} from './interface'

export const carTempData: DataType[] = [
  {
    carNumber: '4327 УНА',
    state: 'finished',
    progress: '2/3',
    date: new Date(2024, 1, 21, 12, 40),
    id: '45379876',
    driver: 'Эрдэнэхүү Нэхийбаатар',
    location: 'Дундговь, нэг газрын хаяг, Дундговь, нэг газрын хаяг',
    trailerNumber: '2230 УНА',
    trailerNumber2: '3349 ХАБ',
    managerState: 'delivered',
  },
  {
    carNumber: '4327 УНА',
    state: 'being processed',
    progress: '1/3',
    date: new Date(2024, 2, 21, 12, 40),
    id: '45379875',
    driver: 'Эрдэнэхүү Нэхийбаатар',
    location: 'Дундговь, нэг газрын хаяг, Дундговь, нэг газрын хаяг',
    trailerNumber: '2230 УНА',
    trailerNumber2: '3349 ХАБ',
    managerState: 'engineer',
  },
  {
    carNumber: '5050 УНА',
    state: 'being processed',
    progress: '1/3',
    date: new Date(2024, 2, 21, 12, 40),
    id: '45379874',
    driver: 'Эрдэнэхүү Нэхийбаатар',
    location: 'Дундговь, нэг газрын хаяг, Дундговь, нэг газрын хаяг',
    trailerNumber: '2230 УНА',
    trailerNumber2: '3349 ХАБ',
    managerState: 'manager',
  },
  {
    carNumber: '3030 УБА',
    state: 'waiting',
    progress: '0/3',
    date: new Date(2024, 1, 21, 12, 40),
    id: '45379873',
    driver: 'Эрдэнэ Нэхий',
    location: 'Дундговь, нэг газрын хаяг, Дундговь, нэг газрын хаяг',
    trailerNumber: '2230 УНА',
    trailerNumber2: '3349 ХАБ',
    managerState: 'time',
  },
  {
    carNumber: '5050 УНА',
    state: 'waiting',
    progress: '1/3',
    date: new Date(2024, 1, 21, 12, 40),
    id: '45379872',
    driver: 'Эрдэнэхүү Нэхийбаатар',
    location: 'Дундговь, нэг газрын хаяг, Дундговь, нэг газрын хаяг',
    trailerNumber: '2230 УНА',
    trailerNumber2: '3349 ХАБ',
    managerState: 'problem',
  },
  {
    carNumber: '4444 УНА',
    state: 'finished',
    progress: '2/3',
    date: new Date(2024, 2, 21, 12, 40),
    id: '45379871',
    driver: 'Эрдэнэхүү Нэхийбаатар',
    location: 'Дундговь, нэг газрын хаяг, Дундговь, нэг газрын хаяг',
    trailerNumber: '2230 УНА',
    trailerNumber2: '3349 ХАБ',
    managerState: 'confirmed',
  },
]

export const carInfoTempData: CarInfoType[] = [
  {
    name: 'Хөргөлтийн радиатор, термостат, жалюз, юүлэх цоргоны бэхэлгээг шалгах',
    state: 'being processed',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Нүүрэвч, сэнсний хүрээ, сэнс, усны насос, духны тагны бэхэлгээг шалгах',
    state: 'finished',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Дамжуулгын оосор, гинжин дамжуулгын голын тулгуурыг бэхэлгээг шалгах',
    state: 'finished',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Клапангийн дулааны завсарыг шалгах тохируулах',
    state: 'waiting',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Тосны тэвшний бэхэлгээг шалгах',
    state: 'finished',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Хөдөлгүүрийн ажиллагааны дууг электрон мэдрэгч бүхий чагнуураар чагнаж оношлох',
    state: 'waiting',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Хөдөлгүүрийн тос болон шатахуун зарцуулалтыг шалгаж гэмтлийн шалтгааныг илрүүлэх',
    state: 'waiting',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Цилиндрийн даралтыг цилиндр бүр дээр компрессорметрээр шалгах',
    state: 'waiting',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Тосны шүүлтүүрийг шалгаж солих',
    state: 'waiting',
    type: 'engine',
    quality: '',
  },
  {
    name: 'Хөдөлгүүрийн блок, хурдны хайрцагт бэхлэгдсэн дискэн холбооны арьсны бэхэлгээг шалгах',
    state: 'waiting',
    type: 'disk',
    quality: '',
  },
  {
    name: 'Дискэн холбооны дөрөөний сул явалт, хөтлөгдөх, хөтлөх дискний элэгдэл, тотго муфтний элэгдэлийг шалгах, тохируулах',
    state: 'waiting',
    type: 'disk',
    quality: '',
  },
  {
    name: 'Хурдны хайрцагны тосны түвшин, тос бохирдлыг шалгах',
    state: 'waiting',
    type: 'transmission',
    quality: '',
  },
  {
    name: 'Хурдны хайрцагны тосны түвшин, тос бохирдлыг шалгах',
    state: 'waiting',
    type: 'transmission',
    quality: '',
  },
  {
    name: 'Хурдны хайрцагны араа залгах, салгах, механизмын ажиллагааг шалгах',
    state: 'waiting',
    type: 'transmission',
    quality: '',
  },
  {
    name: 'Хойд тэнхлэгийн тосны түвшин, битүүмжийг шалгах',
    state: 'waiting',
    type: 'other',
    quality: '',
  },
  {
    name: 'Ерөнхий дамжуулгын хөтлөх, хөтлөгдөх арааны харьцааг шалгах, редукторын ажиллагааг дуу чимээ, халаалтаар оношлох',
    state: 'waiting',
    type: 'other',
    quality: '',
  },
  {
    name: 'Хүч дамжуулах ангийн чадлын алдагдлыг тодорхойлох',
    state: 'waiting',
    type: 'other',
    quality: '',
  },
  {
    name: 'Хагас гол, дугуйн бэхэлгээ, булны тохиргоог шалгах',
    state: 'waiting',
    type: 'other',
    quality: '',
  },
  {
    name: 'Тосны тэвшний бэхэлгээг шалгах',
    state: 'waiting',
    type: 'other',
    quality: '',
  },
]

export const carProblemData: CarProblemType[] = [
  {
    title: 'Дээвэр болон түүний',
    reason: 'Ингэсэн тэгсэн болохоор асуудалтай байна',
    parts: [
      { label: 'Бээлий', value: 'gloves' },
      { label: 'Бээлий', value: 'gloves' },
    ],
  },
  {
    title: 'Дээвэр',
    reason: 'Ингэсэн тэгээ болохоор байна',
    parts: [
      { label: 'Temp data dont mind me', value: 'gloves' },
      { label: 'Бээлий', value: 'gloves' },
    ],
  },
]

export const carReasonData: CarReasonType = {
  title:
    'Curabitur maximus commodo dui, at ultricies est vulputate id. Pellentesque eu accumsan sapien, non commodo enim. Curabitur cursus faucibus nisl, sit ',
  problems: carProblemData,
}

export const newsData: NewsType[] = [
  {
    viewer: 'everyone',
    id: '1',
    text: 'What',
    name: 'Temporary',
    job: 'Тээвэр зохицуулагч',
    time: new Date('2024-04-15T00:00:00'),
    imageLinks: [
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
    ],
  },
  {
    viewer: 'worker',
    id: '2',
    text: 'Эрт урьд цагт энэ дэлхийд долоон нар гараад, ган гачиг болоод, газрын хөрс улайдаад, ус мөрөн ширгээд, ',
    name: 'Энхжин Алтансүх',
    job: 'Тээвэр зохицуулагч',
    time: new Date('2024-04-15T00:00:00'),
    imageLinks: [
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
    ],
  },
  {
    viewer: 'everyone',
    id: '3',
    text: 'Эрт урьд цагт энэ дэлхийд долоон нар гараад, ган гачиг болоод, газрын хөрс улайдаад, ус мөрөн ширгээд, ',
    name: 'Энхжин Алтансүх',
    job: 'Тээвэр зохицуулагч',
    time: new Date('2024-04-15T00:00:00'),
    imageLinks: [
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
    ],
  },
  {
    viewer: 'everyone',
    id: '4',
    text: 'Эрт урьд цагт энэ дэлхийд долоон нар гараад, ган гачиг болоод, газрын хөрс улайдаад, ус мөрөн ширгээд, ',
    name: 'Энхжин Алтансүх',
    job: 'Тээвэр зохицуулагч',
    time: new Date('2024-04-15T00:00:00'),
    imageLinks: [
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
    ],
  },
  {
    viewer: 'everyone',
    id: '5',
    text: 'Эрт урьд цагт энэ дэлхийд долоон нар гараад, ган гачиг болоод, газрын хөрс улайдаад, ус мөрөн ширгээд, ',
    name: 'Энхжин Алтансүх',
    job: 'Тээвэр зохицуулагч',
    time: new Date('2024-04-15T00:00:00'),
    imageLinks: [
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
    ],
  },
  {
    viewer: 'everyone',
    id: '6',
    text: 'Эрт урьд цагт энэ дэлхийд долоон нар гараад, ган гачиг болоод, газрын хөрс улайдаад, ус мөрөн ширгээд, ',
    name: 'Энхжин Алтансүх',
    job: 'Тээвэр зохицуулагч',
    time: new Date('2024-04-15T00:00:00'),
  },
  {
    viewer: 'everyone',
    id: '7',
    name: 'Энхжин Алтансүх',
    job: 'Тээвэр зохицуулагч',
    time: new Date('2024-04-15T00:00:00'),
    imageLinks: [
      'https://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
    ],
  },
]

export const workerData: WorkerType[] = [
  {
    name: 'Энхжин',
    surname: 'Алтансүх',
    job: 'driver',
    mobileNumber: 99999999,
    username: 'kellokitty',
    id: 0,
  },
  {
    name: 'Энхжин1',
    surname: 'Алтансүх',
    job: 'engineer',
    mobileNumber: 99999999,
    username: 'kellokitty',
    id: 1,
  },
  {
    name: 'Энхжи2',
    surname: 'Алтансүх',
    job: 'driver',
    mobileNumber: 99999999,
    username: 'kellokitty',
    id: 2,
  },
  {
    name: 'Энхжи3',
    surname: 'Алтансүх',
    job: 'driver',
    mobileNumber: 99999999,
    username: 'kellokitty',
    id: 3,
  },
  {
    name: 'Энхжин4',
    surname: 'Алтансүх',
    job: 'mechanic',
    mobileNumber: 99999999,
    username: 'kellokitty',
    id: 4,
  },
  {
    name: 'Энхжин5',
    surname: 'Алтансүх',
    job: 'mechanic',
    mobileNumber: 99999999,
    username: 'kellokitty',
    id: 5,
  },

  {
    name: 'Энхжин6',
    surname: 'Алтансүх',
    job: 'driver',
    mobileNumber: 99999999,
    username: 'kellokitty',
    id: 6,
  },
]

export const scheduleData: ScheduleType[] = [
  {
    license: '29292929',
    date: new Date('2024-08-31'),
    id: '0',
    pickupPoint: 'Horoool',
    location: 'Tuv aimag',
    deliveryLocation: 'Sukhbaatar duureg',
    companyName: 'HHK LLC MN',
    exitDate: new Date('2024-09-01T12:00:00'),
    driver: {
      name: 'Өлзиймаа Эрдэнэсүх',
      profile: undefined,
    },
    carNumber: '4444 УНА',
    trailerNumber1: '2230 УНА',
    trailerNumber2: '3349 ХАБ',
    state: 'success',
  },
  {
    license: '29292930',
    date: new Date('2024-08-25'),
    id: '1',
    pickupPoint: 'Ulaanbaatar',
    location: 'Gobi aimag',
    deliveryLocation: 'Bayanzurkh duureg',
    companyName: 'ABC Logistics',
    exitDate: new Date('2024-08-26T10:00:00'),
    driver: {
      name: 'Batbold Purev',
      profile: undefined,
    },
    carNumber: '5555 УБХ',
    trailerNumber1: '1234 ЦАА',
    trailerNumber2: '5678 ХУЛ',
    state: 'success',
  },
  {
    license: '29292931',
    date: new Date('2024-09-02'),
    id: '2',
    pickupPoint: 'Darkhan',
    location: 'Selenge aimag',
    deliveryLocation: 'Khan-Uul duureg',
    companyName: 'Mongol Express',
    exitDate: new Date('2024-09-03T08:30:00'),
    driver: {
      name: 'Tumurbaatar Batbold',
      profile: undefined,
    },
    carNumber: '6666 ТУМ',
    trailerNumber1: '4321 БАТ',
    trailerNumber2: '9876 МУР',
    state: 'success',
  },
  {
    license: '29292932',
    date: new Date('2024-09-05'),
    id: '3',
    pickupPoint: 'Erdenet',
    location: 'Orkhon aimag',
    deliveryLocation: 'Bayangol duureg',
    companyName: 'Mongolian Trans',
    exitDate: new Date('2024-09-06T14:00:00'),
    driver: {
      name: 'Gantulga Munkhbayar',
      profile: undefined,
    },
    carNumber: '7777 ГАН',
    trailerNumber1: '2345 МУН',
    trailerNumber2: '8901 БАЯ',
    state: 'failed',
  },
  {
    license: '29292933',
    date: new Date('2024-09-10'),
    id: '4',
    pickupPoint: 'Zuunmod',
    location: 'Dornogovi aimag',
    deliveryLocation: 'Nalaikh duureg',
    companyName: 'Gobi Freight',
    exitDate: new Date('2024-09-11T11:30:00'),
    driver: {
      name: 'Davaadorj Ganzorig',
      profile: undefined,
    },
    carNumber: '8888 ДАВ',
    trailerNumber1: '3456 ГАН',
    trailerNumber2: '7890 ЗОР',
    state: 'failed',
  },
  {
    license: '29292934',
    date: new Date('2024-09-15'),
    id: '5',
    pickupPoint: 'Ulaangom',
    location: 'Khovd aimag',
    deliveryLocation: 'Chingeltei duureg',
    companyName: 'Sky Logistics',
    exitDate: new Date('2024-09-16T13:45:00'),
    driver: {
      name: 'Batmunkh Jargal',
      profile: undefined,
    },
    carNumber: '9999 БАТ',
    trailerNumber1: '4567 ЖАР',
    trailerNumber2: '0123 БАТ',
    state: 'failed',
  },
  {
    license: '29292935',
    date: new Date('2024-09-20'),
    id: '6',
    pickupPoint: 'Altai',
    location: 'Bayan-Ölgii aimag',
    deliveryLocation: 'Sükhbaatar duureg',
    companyName: 'MGL Express',
    exitDate: new Date('2024-09-21T09:20:00'),
    driver: {
      name: 'Nergui Enkhtur',
      profile: undefined,
    },
    carNumber: '1111 НЭР',
    trailerNumber1: '7890 ЭНХ',
    trailerNumber2: '2345 ТҮР',
    state: 'failed',
  },
  {
    license: '29292936',
    date: new Date('2024-09-25'),
    id: '7',
    pickupPoint: 'Erdenet',
    location: 'Uvs aimag',
    deliveryLocation: 'Bayangol duureg',
    companyName: 'Blue Sky Logistics',
    exitDate: new Date('2024-09-26T15:10:00'),
    driver: {
      name: 'Narmandakh Erdenebat',
      profile: undefined,
    },
    carNumber: '2222 НАР',
    trailerNumber1: '0987 ЭРД',
    trailerNumber2: '6543 НАХ',
    state: 'failed',
  },
  {
    license: '29292937',
    date: new Date('2024-09-30'),
    id: '8',
    pickupPoint: 'Altai',
    location: 'Zavkhan aimag',
    deliveryLocation: 'Songinokhairkhan duureg',
    companyName: 'Zavkhan Logistics',
    exitDate: new Date('2024-10-01T11:50:00'),
    driver: {
      name: 'Bilguun Batbaatar',
      profile: undefined,
    },
    carNumber: '3333 БИЛ',
    trailerNumber1: '2109 БАТ',
    trailerNumber2: '8765 НАР',
    state: 'failed',
  },
  {
    license: '29292938',
    date: new Date('2024-10-05'),
    id: '9',
    pickupPoint: 'Ulaanbaatar',
    location: 'Orkhon aimag',
    deliveryLocation: 'Baganuur duureg',
    companyName: 'Orkhon Trans',
    exitDate: new Date('2024-10-06T14:30:00'),
    driver: {
      name: 'Munkh-Orgil Tumurbaatar',
      profile: undefined,
    },
    carNumber: '4444 МУН',
    trailerNumber1: '9876 ТУМ',
    trailerNumber2: '5432 ОРГ',
    state: 'failed',
  },
]

export const users: UserType[] = [
  {
    id: '1',
    username: 'Zedude',
    job: 'manager',
    firstname: 'Төмөрцог',
    lastname: 'Насанжаргал',
    phoneNumber: '99038827',
  },
  {
    id: '2',
    username: 'nas',
    job: 'driver',
    firstname: 'Төмөрцог',
    lastname: 'Насжаргал',
    phoneNumber: '99038827',
  },
  {
    id: '3',
    username: 'tomor',
    job: 'engineer',
    firstname: 'Төмөрцог',
    lastname: 'Насанжаргал',
    phoneNumber: '99038827',
  },
]

export const dummyUser: UserType = {
  id: '1',
  username: 'Zedude',
  job: 'driver',
  firstname: 'Төмөрцог',
  lastname: 'Насанжаргал',
  phoneNumber: '99038827',
  notifications: [
    {
      request: 'userChange',
      title: 'Хэрэглэгчийн мэдээлэл засах хүсэлт',
      userRequested: 'Жолооч Насжаргал Төмөрцог',
      change: {
        id: '2',
        lastname: 'Насанжаргал',
        reason: 'Миний нэрийг буруу бичсэн байна',
      },
    },
    {
      request: 'userChange',
      title: 'Хэрэглэгчийн мэдээлэл засах хүсэлт',
      userRequested: 'Жолооч Насанжаргал Төмөрцог',
      change: {
        id: '3',
        lastname: 'Tomortsog',
        phoneNumber: '99999999',
        username: 'Hello',
        reason: 'Миний нэрийг буруу бичсэн байна',
      },
    },
    {
      request: 'problem',
      title: 'Асуудал гарлаа',
      userRequested: 'Механик инженер...',
      change: {
        id: '45379875',
      },
    },
  ],
}
