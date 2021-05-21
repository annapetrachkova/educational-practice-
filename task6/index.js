(function() {
    let adList = [
        {
            id: '1',
            description: 'Ремонт стиральных машин',
            createdAt: new Date('2021-02-01T11:00:00'),
            link: 'http://stiralkino.by/',
            vendor: 'Анна Петрачкова',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/remont.jpg',
            validUntil: new Date('2021-05-01T24:00:00'),
            discount: '15%',
            hashTags: ['Бытовые услуги', 'Ремонт', 'Строительные работы', 'Прочие услуги']
        },
        {
            id: '2',
            description: 'Репетиторы',
            createdAt: new Date('2021-01-01T11:00:00'),
            link: 'https://profi-bel.by/repetitor/',
            vendor: 'Степан',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/profi.jpg',
            validUntil: new Date('2021-03-21T24:00:00'),
            discount: '10%',
            hashTags: ['Образовательные услуги', 'Прочие услуги']
        },
        {
            id: '3',
            description: 'Маникюр и педикюр',
            createdAt: new Date('2020-12-12T11:00:00'),
            link: 'https://fokanail.by/',
            vendor: 'Алеся Хаткевич',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/nails.jpg',
            validUntil: new Date('2021-03-31T24:00:00'),
            discount: '30%',
            hashTags: ['Красота и здоровье']
        },
        {
            id: '4',
            description: 'Клининговая компания',
            createdAt: new Date('2020-12-01T11:00:00'),
            link: 'https://clean-up.by/',
            vendor: 'Евгения',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/clean.jpg',
            validUntil: new Date('2021-04-09T24:00:00'),
            discount: '15%',
            hashTags: ['Бытовые услуги', 'Ремонт', 'Прочие услуги']
        },
        {
            id: '5',
            description: 'Услуги фотошопа',
            createdAt: new Date('2020-11-14T11:00:00'),
            link: 'https://www.prettyphoto.ru/',
            vendor: 'ООО Боннети',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/ps.jpg',
            validUntil: new Date('2021-09-14T24:00:00'),
            discount: '50%',
            hashTags: ['Фото и видеосъемка', 'Прочие услуги']
        },
        {
            id: '6',
            description: 'Помощь адвоката',
            createdAt: new Date('2020-11-02T11:00:00'),
            link: 'https://advokat-lawyer.by/',
            vendor: 'ООО Боннети',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/lawyer.jpg',
            validUntil: new Date('2021-07-02T24:00:00'),
            discount: '20%',
            hashTags: ['Юридические услуги']
        },
        {
            id: '7',
            description: 'Натяжные потолки',
            createdAt: new Date('2020-10-09T11:00:00'),
            link: 'https://houze.by/',
            vendor: 'Алеся Хаткевич',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/ceiling.jpg',
            validUntil: new Date('2021-05-09T24:00:00'),
            discount: '30%',
            hashTags: ['Ремонт', 'Строительные услуги', 'Бытовые услуги']
        },
        {
            id: '8',
            description: 'Спортивное питание',
            createdAt: new Date('2020-09-01T11:00:00'),
            link: 'https://gamma.by/',
            vendor: 'Анна Петрачкова',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/sport.jpg',
            validUntil: new Date('2021-09-01T24:00:00'),
            discount: '5%',
            hashTags: ['Прочие услуги']
        },
        {
            id: '9',
            description: 'Оклейка обоями',
            createdAt: new Date('2020-09-01T11:00:00'),
            link: 'https://domodel.by/categories/okleyka-oboyami',
            vendor: 'Степан',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/wallpaper.jpg',
            validUntil: new Date('2021-08-01T24:00:00'),
            discount: '25%',
            hashTags: ['Ремонт', 'Бытовые услуги', 'Строительные работы']
        },
        {
            id: '10',
            description: 'Макияж',
            createdAt: new Date('2021-08-01T11:00:00'),
            link: 'https://galinamakeup.by',
            vendor: 'Евгения',
            photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/makeup.jpg',
            validUntil: new Date('2021-03-01T24:00:00'),
            discount: '40%',
            hashTags: ['Красота и здоровье']
        },
        {
            id: '11',
            description: 'Профессиональный шиномонтаж',
            createdAt: new Date('2021-03-21T11:00:00'),
            link: 'https://shinaminsk.by/',
            vendor: 'Алеся Хаткевич',
            photoLink: 'https://www.slivki.by/znijki-media/w522_322/default/1009921/1-shinomontazh-minsk-skidka-shinaminskby.jpg',
            validUntil: new Date('2021-06-21T24:00:00'),
            discount: '35%',
            hashTags: ['Прочие услуги']
        },
        {
            id: '12',
            description: 'Акции в магазинах "Мила"',
            createdAt: new Date('2021-02-20T11:00:00'),
            link: 'https://mila.by/',
            vendor: 'Мила',
            photoLink: 'https://lh3.googleusercontent.com/proxy/KoRtNY-cYnGaLhjnKV-hLqggqiA4OXKI2WdvsbPcahmC_c8cTVgwJiac6h7lKRGDPO3b00Bsg_chbmPZNVcIjEosnrp2Fa8c94YdWJdJfkodE-j4',
            validUntil: new Date('2021-04-20T24:00:00'),
            discount: '15%',
            hashTags: ['Красота и здоровье', 'Прочие услуги']
        },
        {
            id: '13',
            description: 'УЗИ для женщин и мужчин',
            createdAt: new Date('2021-01-01T11:00:00'),
            link: 'https://idealmed.by/',
            vendor: 'Степан',
            photoLink: 'https://aquaminskclinic.by/upload/iblock/800/800fcd272c7d1a27ce63c6b2cbab6118.png',
            validUntil: new Date('2021-06-01T24:00:00'),
            discount: '10%',
            hashTags: ['Красота и здоровье', 'Прочие услуги']
        },
        {
            id: '14',
            description: 'Суши от Rollbox',
            createdAt: new Date('2021-03-01T11:00:00'),
            link: 'https://rollbox.by/',
            vendor: 'Rollbox',
            photoLink: 'https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg',
            validUntil: new Date('2021-07-01T24:00:00'),
            discount: '40%',
            hashTags: ['Прочие услуги']
        },
        {
            id: '15',
            description: 'Ремонт телефонов',
            createdAt: new Date('2021-02-28T11:00:00'),
            link: 'https://applejam.by/',
            vendor: 'Анна Петрачкова',
            photoLink: 'https://yams.kufar.by/api/v1/kufar-ads/images/64/6433361110.jpg?rule=gallery',
            validUntil: new Date('2021-07-28T24:00:00'),
            discount: '20%',
            hashTags: ['Ремонт', 'Прочие услуги']
        },
        {
            id: '16',
            description: 'Ремонт телефонов',
            createdAt: new Date('2021-02-28T11:00:00'),
            link: 'https://applejam.by/',
            vendor: 'Анна Петрачкова',
            photoLink: 'https://yams.kufar.by/api/v1/kufar-ads/images/64/6433361110.jpg?rule=gallery',
            validUntil: new Date('2021-07-28T24:00:00'),
            discount: '20%',
            hashTags: ['Ремонт', 'Прочие услуги']
        },
        {
            id: '17',
            description: 'Ультразвуковая чистка, пилинги лица',
            createdAt: new Date('2021-01-30T11:00:00'),
            link: 'https://skinlux.by/',
            vendor: 'Евгения',
            photoLink: 'https://hydrafacial.ru/wp-content/uploads/2017/12/uz-chistka-lica1.jpg',
            validUntil: new Date('2021-07-30T24:00:00'),
            discount: '10%',
            hashTags: ['Красота и здоровье', 'Прочие услуги']
        },
        {
            id: '18',
            description: 'Скидки до 70% в магазинах Kari и Kari KIDS!',
            createdAt: new Date('2021-03-01T11:00:00'),
            link: 'https://by.kari.com/by/',
            vendor: 'Kari',
            photoLink: 'https://trk-pilot.ru/wp-content/uploads/2018/04/Logo_Kari_newest.jpg',
            validUntil: new Date('2021-07-01T24:00:00'),
            discount: '70%',
            hashTags: ['Прочие услуги']
        },
        {
            id: '19',
            description: 'Скидки в магазинах 21vek',
            createdAt: new Date('2021-03-08T11:00:00'),
            link: 'https://www.21vek.by/',
            vendor: '21vek',
            photoLink: 'http://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEF7OiGMi6UuMkBd-_FgVClksjukuIIGj_LwIulBvzyPuY',
            validUntil: new Date('2021-08-08T24:00:00'),
            discount: '40%',
            hashTags: ['Прочие услуги']
        },
        {
            id: '20',
            description: 'Обучение иностранным языкам в "SOL Minsk"',
            createdAt: new Date('2021-03-20T11:00:00'),
            link: 'https://sol.by/',
            vendor: 'SOL',
            photoLink: 'https://enguide.by/s/public/upload/images/e6ce/8bd6/f526/3246/470a/4b7d/f2ed/7df0.jpeg',
            validUntil: new Date('2021-08-21T24:00:00'),
            discount: '20%',
            hashTags: ['Образовательные услуги']
        }
    ]

    function getAds(skip = 0, top = 10, filterConfig = undefined) {
        if (typeof skip != 'number' || typeof top != 'number') {
            return 'Error'
        }
        let elem = adList;
        if (filterConfig) {
            for (let item in filterConfig) {
                if (item === 'createdAt') {
                    elem = elem.filter(item => item.createdAt <= filterConfig.createdAt);
                }
                if (item === 'validUntil') {
                    elem = elem.filter(item => item.validUntil >= filterConfig.validUntil);
                }
                if (item === 'vendor') {
                    elem = elem.filter(item => item.vendor === filterConfig.vendor);
                }
                else {
                    return 'Error'
                }
            }
        }
        elem.sort(function (a, b) {
            return a.createdAt - b.createdAt;
        });
        return elem.slice(skip, skip + top);
    }

    console.log(getAds(0, 10))
    console.log(getAds(10, 10))
    console.log(getAds('3'))
    console.log(getAds(0, 4, {vendor: 'Анна Петрачкова'}))
    console.log(getAds(0, 7, {validUntil: new Date('2021-05-01T24:00:00')}))


    function getAd(id) {
        return adList.find(item => item.id == id)
    }
    console.log(getAd(12))

    function addAd(newElem) {
        if (validateAd(newElem)) {
            adList.push(newElem)
            return adList
        }
        else return false
    }
    console.log(addAd({id: '21',
        description: 'Суши от Rollbox',
        createdAt: new Date('2021-03-01T11:00:00'),
        link: 'https://rollbox.by/',
        vendor: 'Rollbox',
        photoLink: 'https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg',
        validUntil: new Date('2021-07-01T24:00:00'),
        discount: '40%',
        hashTags: ['Прочие услуги']}))

    console.log(addAd({id: '14',
        description: 'Суши от Rollbox',
        createdAt: new Date('2021-03-01T11:00:00'),
        link: 'https://rollbox.by/',
        vendor: 'Rollbox',
        photoLink: 'https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg',
        validUntil: new Date('2021-07-01T24:00:00'),
        discount: '40%',
        hashTags: ['Прочие услуги']}))

    function editAd(id, propertyChange) {
        for (let item in propertyChange) {
            if (item === 'id' || item === 'vendor' || item === 'createdAt') {
                return 'Error'
            }
            if (item === 'discount') {
                adList.find(item => item.id === id).discount = propertyChange.discount
                return true
            }
            if (item === 'link'){
                adList.find(item => item.id === id).link = propertyChange.link
                return true
            }
            if (item === 'validUntil'){
                adList.find(item => item.id === id).validUntil = propertyChange.validUntil
                return true
            }
            if (item === 'description'){
                adList.find(item => item.id === id).description = propertyChange.description
                return true
            }
            if (item === 'hashTags'){
                adList.find(item => item.id === id).hashTags = propertyChange.hashTags
                return true
            }
        }
        return false
    }
    console.log(editAd('4', {discount: '70%'}))
    console.log(editAd('16', {id: '23'}))


    function validateAd(elem) {
        return typeof elem.id == 'string' && elem.id !== ""
            && typeof elem.description == 'string' && elem.description.length <= 200 && typeof elem.link == 'string' && elem.description !== ""
            && elem.createdAt instanceof Date && elem.createdAt !== ""
            && typeof elem.link == 'string' && elem.link
            && typeof elem.vendor == 'string'
            && elem.validUntil instanceof Date
            && Array.isArray(elem.hashTags)
            && typeof elem.discount == 'string' && elem.discount !== ""
            && elem.validUntil instanceof Date && elem.validUntil !== ""
    }
    console.log(validateAd( {
        id: '1',
        description: '',
        createdAt: new Date('2021-02-01T11:00:00'),
        link: 'http://stiralkino.by/',
        vendor: '',
        validUntil: new Date('2021-05-01T24:00:00'),
        discount: '15%',
        hashTags: ['Бытовые услуги', 'Ремонт', 'Строительные работы', 'Прочие услуги']
    }))
    console.log(validateAd(   {
        id: '19',
        description: 'Скидки в магазинах 21vek',
        createdAt: new Date('2021-03-08T11:00:00'),
        link: 'https://www.21vek.by/',
        vendor: '21vek',
        photoLink: 'http://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEF7OiGMi6UuMkBd-_FgVClksjukuIIGj_LwIulBvzyPuY',
        validUntil: new Date('2021-08-08T24:00:00'),
        discount: '40%',
        hashTags: ['Прочие услуги']
    }))

    function removeAd(id) {
        if (typeof id === 'string') {
            let i = adList.find(item => item.id === id);
            adList.splice(i, 1)
            return adList

        } else return false
    }
    console.log(removeAd('3'))

}());




