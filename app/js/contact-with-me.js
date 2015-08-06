var myModule = (function () {

	// Инициализирует наш модуль
	var init = function () {
				_setUpListners();
			};

	// Прослушивает события 
	var _setUpListners = function () {
				$('#contact-form').on('submit', _validForm); // открыть модальное окно			
				$('.btn-reset').on('click', _resetForm);
			};

	//Работает с валидацией формы(тултипы)
	var _validForm = function(e){
		e.preventDefault();
		var form = $(this);
		validation.validateForm(form);
	}

	var _resetForm=function(e){
		e.preventDefault();
		var form = $(this).closest('#contact-form');
		form.trigger('reset');
	}
	// Возвращаем объект (публичные методы) 
	return {
			init: init
	};

})();

myModule.init();