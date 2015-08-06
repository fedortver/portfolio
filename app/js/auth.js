var myModule = (function () {

	// Инициализирует наш модуль
	var init = function () {
				_setUpListners();
			};

	// Прослушивает события 
	var _setUpListners = function () {
				$('#auth-form').on('submit', _validForm); // открыть модальное окно			
			};

	//Работает с валидацией формы(тултипы)
	var _validForm = function(e){
		e.preventDefault();
		var form = $(this);
		validation.validateForm(form);
	}

	// Возвращаем объект (публичные методы) 
	return {
			init: init
	};

})();

myModule.init();