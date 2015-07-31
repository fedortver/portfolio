var myModule = (function () {

	// Инициализирует наш модуль
	var init = function () {
				_setUpListners();
			};

	// Прослушивает события 
	var _setUpListners = function () {
				$('#add-new-work').on('click', _showModal); // открыть модальное окно			
				
			};

  // Работает с модальным окном
	var _showModal = function (e) {
				console.log('Вызов модального окна');
				e.preventDefault();

				var divPopup = $('#popup-container');
				divPopup.bPopup({
					speed: 650,
	        transition: 'slideDown'
				});
			};


	// Возвращаем объект (публичные методы) 
	return {
			init: init
	};

})();

myModule.init();