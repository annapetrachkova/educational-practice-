//my program is incomplete, i am in development stage
let ads = new Model([
    {
        id: '1',
        description: 'Ремонт стиральных машин',
        createdAt: new Date('2021-02-01T11:00:00'),
        link: 'http://stiralkino.by/',
        vendor: 'Анна Петрачкова',
        photoLink: 'https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/remont.jpg',
        validUntil: new Date('2021-05-01T24:00:00'),
        discount: '15%',
        hashTags: ['Бытовые услуги', 'Ремонт', 'Строительные работы', 'Прочие услуги'],
        rating: 3,
        reviews: [
            {
                username: 'kitty',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'Cool'
            },
            {
                username: 'noname',
                date: new Date('2021-02-10T15:00:00'),
                reviewText: '5 stars!'
            }
        ]
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
        hashTags: ['Образовательные услуги', 'Прочие услуги'],
        rating: 4,
        reviews: [
            {
                username: 'kitty2',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'The best'
            },
            {
                username: 'noname2',
                date: new Date('2021-02-10T15:00:00'),
                reviewText: 'Bad'
            }
        ]
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
        hashTags: ['Красота и здоровье'],
        rating: 5,
        reviews: [
            {
                username: '123',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'The coolest'
            }
        ]
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
        hashTags: ['Бытовые услуги', 'Ремонт', 'Прочие услуги'],
        rating: 2,
        reviews: [
            {
                username: 'name1',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'The worst'
            },
            {
                username: 'noname5432',
                date: new Date('2021-02-10T15:00:00'),
                reviewText: 'Bad'
            }
        ]
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
        hashTags: ['Фото и видеосъемка', 'Прочие услуги'],
        rating: 4.5,
        reviews: [
            {
                username: 'kre212',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'Good'
            }
        ]
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
        hashTags: ['Юридические услуги'],
        rating: 3.2,
        reviews: [
            {
                username: 'rfaedsa4532',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'The best'
            },
            {
                username: 'noname2rt34',
                date: new Date('2021-02-10T15:00:00'),
                reviewText: 'Bad!!!!'
            }
        ]
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
        hashTags: ['Ремонт', 'Строительные услуги', 'Бытовые услуги'],
        rating: 4.6,
        reviews: [
            {
                username: 'nameanna212',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'I like it'
            },
            {
                username: 'non322',
                date: new Date('2021-02-10T15:00:00'),
                reviewText: 'Good service'
            }
        ]
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
        hashTags: ['Прочие услуги'],
        rating: 2.3,
        reviews: [
            {
                username: 'k3',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'Bad'
            },
            {
                username: 'non4322',
                date: new Date('2021-02-10T15:00:00'),
                reviewText: 'No comments'
            }
        ]
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
        hashTags: ['Ремонт', 'Бытовые услуги', 'Строительные работы'],
        rating: 4,
        reviews: [
            {
                username: 'ki432',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'The best'
            },
            {
                username: 'n4532',
                date: new Date('2021-02-10T15:00:00'),
                reviewText: 'So-so'
            }
        ]
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
        hashTags: ['Красота и здоровье'],
        rating: 4,
        reviews: [
            {
                username: 'anna23',
                date: new Date('2021-03-10T15:00:00'),
                reviewText: 'The best'
            }
        ]
    }
]);

class View {
    _ads;
    _adBlock;
    _username;
    _isUser;
    _isVendor;

    constructor(user, isLogIn, isVendor) {
        this._ads = ads;
        this._adBlock = document.querySelector('.ad-block');
        this._username = user;
        this._isUser = isLogIn;
        this._isVendor = isVendor;
    }
}


