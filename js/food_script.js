//Thanks for all the likes! Be sure to check out the new pen with geolocation based results!
//https://codepen.io/azureknight/pen/VYEBGZ
var $fastfood = ['용돈', '토익', '취업', 
'연애', 
'고려대 맛집', 
'주량\/주사', 
'음주량', 
'여자', 
'남자', '공부', '학점', 
'동아리', '동호회', '운동', '다이어트', '좋아하는 음식', '최근 본 영화', '인생 영화', '음악 장르', 'TV 프로그램'];

        var $fastRandom = Math.floor($fastfood.length * Math.random());

        var $randomFast = $fastfood[$fastRandom];

        var $restaurant = ['In N Out', 'Mitsuwa', 'The Habit', 'Chipotle', 'Souplantation', 'Baja Fish', 'Panera', 'Shinsengumi', 'Ajisen', 'Tokyo Table', 'Coco Ichibanya', 'IHOP', 'KBBQ', 'Pizza D\'Oro', 'Lucille\'s','Wahoo\'s', 'TGIF', 'Claim Jumper', 'Yardhouse', 'Mimis Cafe', 'Stonefire Grill', 'Anqi', 'California Pizza Kitchen', 'Acapulco', 'Haute Cakes'];

        var $restRandom = Math.floor($restaurant.length * Math.random());

        var $randomRest = $restaurant[$restRandom];

        var $dessert = ['Donuts', 'Frostbites', 'That Boba Place', 'Confetti', 'Yorgurtland', 'Alta', "Choco XO", 'Keane'];

        var $dessertRandom = Math.floor($dessert.length * Math.random());

        var $randomDest = $dessert[$dessertRandom];

        function reRoll(){

            $('#fastfood').text($fastfood[Math.floor($fastfood.length * Math.random())]);

            $('#restaurant').text($restaurant[Math.floor($restaurant.length * Math.random())]);

            $('#dessert').text($dessert[Math.floor($dessert.length * Math.random())]);
        }

        $(document).ready(function(){
            $('#fastfood').text($randomFast);
            $('#restaurant').text($randomRest);
            $('#dessert').text($randomDest);
        });

