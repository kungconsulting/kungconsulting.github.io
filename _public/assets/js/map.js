document.addEventListener('DOMContentLoaded', function () {
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [40.988161, 28.847045],
            zoom: 16,
            controls: ['zoomControl']
        });

        var myGeoObjects = [];

        myGeoObjects[0] = new ymaps.Placemark([40.988161, 28.847045], {
            balloonContentBody: 'Ataköy 7-8-9-10. Kısım Mah., Çobançeşme E-S Yanyol Cad. A Blok N 22/1 İç Kapi N 30, 34158 Bakirköy, Istanbul, Türkiye',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/img/icons/pin.svg',
            // Размеры метки.
            iconImageSize: [200, 100],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-100, -100]
        });


        var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false
        });

        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
        myMap.behaviors.disable('scrollZoom');

        //Disabled scroll
        //myMap.behaviors.disable('scrollZoom');
        //on mobile disable touch
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //... отключаем перетаскивание карты
            myMap.behaviors.disable('drag');
        }

    };
});
