(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1666:function(n,t,e){"use strict";e.r(t),e.d(t,"variables",(function(){return i})),e.d(t,"list1",(function(){return r})),e.d(t,"list2",(function(){return l})),e.d(t,"table",(function(){return a})),e.d(t,"tiles",(function(){return o})),e.d(t,"cover_list",(function(){return s})),e.d(t,"donation",(function(){return u})),e.d(t,"match",(function(){return d}));var i="var users = API.users.get({ fields: 'sex' }),\n    platform = Args.platform,\n    lang = Args.lang,\n    uid = Args.uid,\n    firstname = null,\n    lastname = null,\n    sex = null;\n\nif (users.length) {\n    firstname = users[0].first_name;\n    lastname = users[0].last_name;\n    sex = users[0].sex;\n}",r="".concat(i,"\n\nvar data = {\n    title: 'Спасибо что заглянул ко мне на огонек, ' + firstname + '!',\n    rows: [{\n        icon_id: 'id' + uid,\n        title: 'Решил полакомиться клубничкой?',\n        text: 'У тебя прекрасный вкус! Может расскажешь о нас друзьям, пусть тоже подсядут на porn stack... ;)'\n    }]\n};\n\nif (sex != 2) {\n    data.title = 'Спасибо что заглянула ко мне на огонек, ' + firstname + '!';\n    data.rows[0].title = 'Решила полакомиться клубничкой?';\n}\nif (lang != 0) {\n    data.title = 'Thank you for stopping by my place ' + firstname + '!';\n    data.rows[0].title = 'Decided to enjoy the obscene?';\n    data.rows[0].text = 'You have great taste! Maybe you can tell your friends about us, let them get hooked on porn stack too... ;)';\n}\n\nreturn data;"),l="".concat(i,"\n\nvar data = {\n    title: 'Приветствуем тебя, ' + firstname + '!',\n    rows: [{\n        icon_id: 'id' + uid,\n        title: 'Это официальная страничка приложения Netaggregator.',\n        text: 'Удобный инструмент, с помощью которого, ты легко сможешь кастомизировать свою группу, тем самым придать выразительности и повысить узнаваемость своего сообщества.'\n    }]\n};\n\nif (lang != 0) {\n    data.title = 'Hello ' + firstname + '!';\n    data.rows[0].title = 'This is the official page of the Netaggregator App.';\n    data.rows[0].text = 'A handy tool with which you can easily customize your group, thereby giving expressiveness and raising awareness of your community.';\n}\n\nreturn data;"),a="{\n    title: 'Таблица',\n    title_url: '/',\n    head: [\n        { text: 'Первая колонка' },\n        { text: 'Вторая колонка', align: 'center' }\n    ],\n    body: [\n        [\n            { text: 'Первая ячейка первой строки', icon_id: null },\n            { text: 'Вторая ячейка первой строки', url: '/wall-12345_54321' }\n        ],\n        [\n            { text: 'Первая ячейка второй строки', icon_id: null },\n            { text: 'Вторая ячейка второй строки', url: '/wall-12345_54321' }\n        ]\n    ],\n    more: 'Перейти',\n    more_url: '/'\n}",o="{\n    title: 'Фильмы',\n    title_url: '/',\n    tiles: [\n        {\n            title: 'Доктор Стрэндж',\n            descr: 'Фэнтези',\n            link: 'Купить билеты',\n            link_url: '/app7185564#link1',\n            icon_id: '32254235_1524257',\n            url: '/app7185564#link2'\n        },\n        {\n            title: 'Фантастические твари',\n            descr: 'Фэнтези',\n            link: 'Купить билеты',\n            link_url: '/app7185564#link3',\n            icon_id: '32254235_1552138',\n            url: '/app7185564#link4'\n        },\n        {\n            title: 'Прибытие',\n            descr: 'Триллер',\n            link: 'Купить билеты',\n            link_url: '/app7185564#link5',\n            icon_id: '32254235_1552139',\n            url: '/app7185564#link6'\n        },\n        {\n            title: 'Новый доктор Стрэндж',\n            descr: 'Фэнтези, комедия',\n            link: 'Купить билеты',\n            link_url: '/app7185564#link7',\n            icon_id: '32254235_1524257',\n            url: '/app7185564#link8'\n        },\n        {\n            title: 'Фантастические твари 2',\n            descr: 'Фантастика',\n            link: 'Купить билеты',\n            link_url: '/app7185564#link9',\n            icon_id: '32254235_1552138',\n            url: '/app7185564#link10'\n        },\n        {\n            title: 'Прибытие 3',\n            descr: 'Триллер, драма',\n            link: 'Купить билеты',\n            link_url: '/app7185564#link11',\n            icon_id: '32254235_1552139',\n            url: '/app7185564#link12'\n        }\n    ],\n    more: 'Перейти',\n    more_url: '/'\n}",s="{\n    title: 'Рестораны',\n    title_url: '/',\n    rows: [\n        {\n            title: 'Корюшка',\n            button: 'Забронировать',\n            button_url: '/app7185564#link2',\n            descr: 'Петропавловская крепость, д. 3',\n            cover_id: '32254235_1564404',\n            url: '/app7185564#link1'\n        },\n        {\n            title: 'Food Park',\n            button: 'Забронировать стол',\n            button_url: '/app7185564#link4',\n            descr: 'Александровский парк, д. 4/3, лит. А',\n            cover_id: '32254235_1564404',\n            url: '/app7185564#link3'\n        }\n    ],\n    more: 'Перейти',\n    more_url: '/',\n}",u="{\n    title: 'Поддержать',\n    title_counter: 3,\n    button_url: '/app7185564_-1',\n    text: 'На помощь бездомным животным',\n    currency: 'RUB',\n    goal: 50000,\n    funded: 7000,\n    backers: 20,\n    more: 'Перейти',\n    more_url: '/'\n}",d="{\n    title: 'My Match',\n    match: {\n        state: 'Первый тайм',\n        team_a: {\n            name: 'Зенит',\n            descr: 'Санкт-Петербург',\n            // icon_id: '3484735_23434324'\n        },\n        team_b: {\n            name: 'Спартак',\n            descr: 'Москва',\n            // icon_id: '3484735_23434324'\n        },\n        score: {\n            team_a: 2,\n            team_b: 0\n        },\n        events: {\n            team_a: [\n                { event: 'Иванов', minute: '3' },\n                { event: 'Петров', minute: '5' }\n            ],\n            team_b: [\n                { event: 'Сидоров', minute: '2' }\n            ]\n        }\n    },\n    more: 'Перейти к трансляции',\n    more_url: \"/app7185564#source=from_footer\"\n}";t.default={cover_list:s,donation:u,match:d,list:list,table:a,tiles:o}}}]);