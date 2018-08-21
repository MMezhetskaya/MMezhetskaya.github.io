
 ymaps.ready(function () {
		    var myMapOne = new ymaps.Map('mapOne', {
		            center: [34.0469865,-118.269593],
		            zoom: 15
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemarkOne = new ymaps.Placemark(myMapOne.getCenter(), {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/location.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-30, -39]
		        })
		        myMapTwo = new ymaps.Map('mapTwo', {
		            center: [37.763071, -122.434600],
		            zoom: 15
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemarkTwo = new ymaps.Placemark(myMapTwo.getCenter(), {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/location.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-30, -39]
		        })
		        myMapThree = new ymaps.Map('mapThree', {
		            center: [51.507625, -0.126374],
		            zoom: 15
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemarkThree = new ymaps.Placemark(myMapThree.getCenter(), {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/location.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-30, -39]
		        })
		        
		    myMapOne.geoObjects.add(myPlacemarkOne);
		    myMapTwo.geoObjects.add(myPlacemarkTwo);	
		    myMapThree.geoObjects.add(myPlacemarkThree);	
		});