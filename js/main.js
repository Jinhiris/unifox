//마우스 오버시 롤링을 멈춘다.

		$(document).ready(function() {
			//사용할 배너
			var $right = $(".right").find("ul");
	
			var $rightWidth = $right.children().outerWidth();//배너 이미지의 폭
			var $rightHeight = $right.children().outerHeight(); // 높이
			var $rightLength = $right.children().length;//배너 이미지의 갯수
			var rollingId;

			$(".right ul li a").mouseover(function(){
				//중지
				clearInterval(rollingId);
				$(this).css("cursor", "pointer");
			});
			//마우스 아웃되면 다시 시작
			$(".right ul li a").mouseout(function(){
				rollingId = setInterval(function() { rollingStart(); }, 500);
				$(this).css("cursor", "default");
			});
	
			//정해진 초마다 함수 실행
			rollingId = setInterval(function() { rollingStart(); }, 3000);//다음 이미지로 롤링 애니메이션 할 시간차
			
			function rollingStart() {
				$right.css("width", $rightWidth + "px");
				$right.css("height", $rightHeight * $rightLength + "px");
				//alert(bannerHeight);
				//배너의 좌측 위치를 옮겨 준다.
				$right.animate({top: - $rightHeight + "px"}, 3000, function() { //숫자는 롤링 진행되는 시간이다.
					//첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
					$(this).append("<li>" + $(this).find("li:first").html() + "</li>");
					//뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
					$(this).find("li:first").remove();
					//다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
					$(this).css("top", 0);
					//이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
				});
			}
		});

		$(document).ready(function() {
			//사용할 배너
			var $right = $(".m_right").find("ul");
	
			var $rightWidth = $right.children().outerWidth();//배너 이미지의 폭
			var $rightHeight = $right.children().outerHeight(); // 높이
			var $rightLength = $right.children().length;//배너 이미지의 갯수
			var rollingId;

			$(".m_right ul li a").mouseover(function(){
				//중지
				clearInterval(rollingId);
				$(this).css("cursor", "pointer");
			});
			//마우스 아웃되면 다시 시작
			$(".m_right ul li a").mouseout(function(){
				rollingId = setInterval(function() { rollingStart(); }, 500);
				$(this).css("cursor", "default");
			});
	
			//정해진 초마다 함수 실행
			rollingId = setInterval(function() { rollingStart(); }, 3000);//다음 이미지로 롤링 애니메이션 할 시간차
			
			function rollingStart() {
				$right.css("width", $rightWidth + "px");
				$right.css("height", $rightHeight * $rightLength + "px");
				//alert(bannerHeight);
				//배너의 좌측 위치를 옮겨 준다.
				$right.animate({top: - $rightHeight + "px"}, 3000, function() { //숫자는 롤링 진행되는 시간이다.
					//첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
					$(this).append("<li>" + $(this).find("li:first").html() + "</li>");
					//뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
					$(this).find("li:first").remove();
					//다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
					$(this).css("top", 0);
					//이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
				});
			}
		});

		//board tab
		$(function(){
			//#board li a을 클릭하면
			$('#board li a').click(function(){
				//#board li a(this)의 부모 on이 추가되고 부모의 형제는 on이 지워진다.
				$(this).parent().addClass('on').siblings().removeClass('on');
			});
		});

		//fixed scroll
		$(document).ready(function(){ 

			// Header scroll class
			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.top_wrap').addClass('header-scrolled');
			  } else {
				$('.top_wrap').removeClass('header-scrolled');
			  }
			})
		  
		   });
		