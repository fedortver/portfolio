var myModule = (function () {

	// Инициализирует наш модуль
	var init = function () {
				_setUpListners();
			};

	// Прослушивает события 
	var _setUpListners = function () {
				$('#add-new-work').on('click', _showModal); // открыть модальное окно			
				$('#add-work').on('submit', _addWork);//валидация
				$('#file').on('change', _changeInputFile);// отслеживаем изменение инпута file

			};

  // Работает с модальным окном
	var _showModal = function (e) {
				console.log('Вызов модального окна');
				e.preventDefault();

				var divPopup = $('#popup-container'),
					form = $('#popup-container').find('#add-work');

				divPopup.bPopup({
					speed: 650,
	        transition: 'slideDown',
	        onClose: function () {
	        	form.trigger("reset");
	        }
				});
			};
	//Работает с валидацией формы(тултипы)
	var _addWork = function(e){
		e.preventDefault();
		var form = $(this);
		validation.validateForm(form);

	};

	//вставка имени файла
	var _changeInputFile = function(){
		var fileResult = $(this).val();
		$(this).closest('.file-load-block').find('.fileLoad').find('input').val(fileResult).trigger('hideTooltip').removeClass('has-error');
	}

	// Возвращаем объект (публичные методы) 
	return {
			init: init
	};

})();

myModule.init();