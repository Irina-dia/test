document.addEventListener("DOMContentLoaded", function () {
    const page = document.querySelector(".page");
    const headerList = page.querySelector('.header__list');
    const servicesItems = page.querySelector(".services__items");

    const headerItems = [
        {
            alt: 'логотип Figma',
            img: './assets/img/logo-figma.png'
        },
        {
            alt: 'логотип Serpstat',
            img: './assets/img/logo-serpstat.png'
        },
        {
            alt: 'логотип Se Ranking',
            img: './assets/img/logo-se-ranking.png'
        },
        {
            alt: 'логотип Key Collector',
            img: './assets/img/logo-key-collector.png'
        },
        {
            alt: 'логотип Google Analytics',
            img: './assets/img/logo-google-analytics.png'
        },
        {
            alt: 'логотип Google Ads',
            img: './assets/img/logo-google-ads.png'
        },
        {
            alt: 'логотип Yandex Metrika',
            img: './assets/img/logo-ya-metrika.png'
        },
        {
            alt: 'логотип Yandex Direct',
            img: './assets/img/logo-ya-direct.png'
        },
        {
            alt: 'логотип Roistat',
            img: './assets/img/logo-roistat.png'
        },
        {
            text: 'используем множество инструментов'
        },
    ]
    const services = [ 
        {
            title: 'Контекст',
            price: 'от 85&nbsp;000 Р',
            link: 'https://romikey.ru/context/',
            offers: [
                'Поисковые кампании в&nbsp;Директе и&nbsp;Google Ads',
                'Кампании в&nbsp;РСЯ и&nbsp;КМС',
                'Ретаргетинг и&nbsp;ремаркетинг',
                'Видеореклама в&nbsp;YouTube и&nbsp;на&nbsp;площадках Яндекса и&nbsp;Google',
                'Реклама в&nbsp;Google Merchant Center',
                'Кампании с&nbsp;оплатой за&nbsp;конверсию'
            ]
        },
        {
            title: 'Таргет',
            price: 'от 85&nbsp;000 Р',
            link: 'https://romikey.ru/context/',
            offers: [
                'Аудит проекта и&nbsp;разработка медиаплана',
                'Кампании в&nbsp;ВКонтакте и&nbsp;myTarget',
                'Привлечение трафика на&nbsp;сайт или в&nbsp;группу социальной сети',
                'Кампании Lead Ads для сбора заявок прямо в&nbsp;соцсетях',
                'Настройка чат-бота в&nbsp;ВК для увеличении конверсии группы'
            ]
        },
        {
            title: 'SEO',
            price: 'от 75&nbsp;000 Р',
            link: 'https://romikey.ru/seo/',
            offers: [
                'Ежемесячное планирование работ',
                'Внутренняя и&nbsp;внешняя оптимизация',
                'Ежедневный мониторинг позиций',
                'Работа с&nbsp;репутацией',
                'Ежемесячный отчет о&nbsp;результатах'
            ]
        },
        {
            title: 'Разработка',
            price: 'от 100&nbsp;000 Р',
            link: 'https://romikey.ru/web-development/',
            offers: [
                'Технические доработки сайта для повышения конверсии',
                'Создание продающей структуры и&nbsp;прототипирование',
                'Разработка одностраничных и&nbsp;многостраничных сайтов',
                'Разработка дизайн-макетов',
                'Перенос существующих сайтов и&nbsp;настройка различных CMS'
            ]
        },
        {
            title: 'Веб-аналитика',
            price: 'от 30&nbsp;000 Р',
            link: 'https://romikey.ru/web-analytics/',
            offers: [
                'Аудит рекламных каналов Яндекс, Google, VK, MyTarget',
                'SEO аудит и&nbsp;аудит репутации компании в&nbsp;поисковиках',
                'Аудит юзабилити с&nbsp;техническим заданием для программиста',
                'Настройка Яндекс.Метрики и&nbsp;Google Analytics'
            ]
        }
    ];

    function fillHeaderItem (item) {
        const headerItemTemplate = document.querySelector("#headerItemTemplate");
        const clone = headerItemTemplate.content.cloneNode(true);
        console.log(clone);
        const headerItem = clone.querySelector('.header__item');
        if (item.alt) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('header__logo-wrapper');
            const newImg = document.createElement('img');
            newImg.src = item.img;
            newImg.alt = item.alt;
            newImg.classList.add('header__logo');
            newDiv.appendChild(newImg);
            headerItem.appendChild(newDiv);
        }
        else {
            const newText = document.createElement('p');
            newText.className = `
                paragraph 
                paragraph_title 
                paragraph_blue
            `; 
            newText.textContent = item.text;           
            headerItem.appendChild(newText);
        }
        return headerItem;
    };

    function fillServicesItem (item) {
        const servicesItemTemplate = document.querySelector("#servicesItemTemplate");
        const clone = servicesItemTemplate.content.cloneNode(true);
        const servicesItem = clone.querySelector('.services__item');
        const serviceTitle = servicesItem.querySelector('.service__title');
        const paragraphPrice = servicesItem.querySelector('.paragraph_price');
        const servicesLink = servicesItem.querySelector('.services__link');
        const servicesList = servicesItem.querySelector('.services__list');
        serviceTitle.textContent = item.title;
        paragraphPrice.textContent = item.price;    
        servicesLink.href = item.link;

        item.offers.forEach(offer => {
            const li = document.createElement('li');
            li.classList.add('services__offer');
            li.textContent = offer;
            servicesList.appendChild(li);
        });
        return servicesItem;
    };

    services.forEach((item) => {
        servicesItems.append(fillServicesItem(item));
    }); 

    headerItems.forEach((item) => {
        headerList.append(fillHeaderItem(item));
    });
    headerItems.forEach((item) => {
        headerList.append(fillHeaderItem(item));
    });  
    /* хотела попробовать так задублировать, но резко на втором круге обновляется строка
    const duplicatedItems = headerItems.concat(headerItems);
    duplicatedItems.forEach((item) => {
        headerList.append(fillHeaderItem(item));
    }); */

    const swiper = new Swiper(".servicesSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: false,
        slideToClickedSlide: true,
        breakpoints: {
        768: {
            centeredSlides: true,
            spaceBetween: 24,
            }
        }
    });
    
});