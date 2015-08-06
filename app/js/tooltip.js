var validation = (function(){

	var init = function(){
		_setUpListners();
		//то что должно произойти сразу
	}

	var _setUpListners = function(){
		// прослушка событий
		$('form').on('keydown', '.has-error', _removeError); // удаляем красную обводку 
	    $('form').on('reset', _clearForm); // при сбросе формы удаляем тултипы, обводку
	}

	// Убирает обводку
	var _removeError = function() { 
	      $(this).removeClass('has-error');
	    };

	// Очищает форму   
	 var  _clearForm = function(form) {      
	      var form = $(this);
	      form.find('.popup-input, .popup-textarea, .contact-input, .contact-textarea, .contact-input-captcha, .file-input').trigger('hideTooltip'); 
	      form.find('.has-error').removeClass('has-error');
	      console.log('Очищаем форму');	    
	    };



	//создаем тултип
	var _createQtip = function(element,position){
		//позиция тултипа
		if (position === 'right'){
			position = {
				my: 'left center',
				at:'right center'
			}

		}else{
			position={
				my:'right center',
				at: 'left center',
				adjust:{
					method:'shift none'
				}
			}
		}

		//инициализация тултипа
		element.qtip({
			content:{
				text: function(){
					return $(this).attr('qtip-content');
				}
			},
			show:{
				event:'show'
			},
			hide:{
				event: 'keydown hideTooltip'
			},
			position: position,
			style:{
				classes:'qtip-mystyle qtip-rounded',
				tip:{
					height:10,
					width:16
				}
			}
		}).trigger('show');
	};
	
	// Универсальная функция по проверке валидации формы
	var validateForm = function(form){
		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
		valid=true;
		$.each(elements,function(index, val){
			var element = $(val),
				val=element.val(),
				pos = element.attr('qtip-position');

			if (val.length ===0){
				element.addClass('has-error');
				_createQtip(element,pos);
				valid=false;
			}
		});
		return valid;
	};

	return{
		init:init,
		validateForm: validateForm
	};

})();

validation.init();