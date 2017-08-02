 function tutupJendela() {
        navigator.notification.confirm(
            'Serius ingin keluar?',  // message
            exitFromApp,             // callback to invoke with index of button pressed
            'Keluar',            		 // title
            'Batal,Keluar'         	 // buttonLabels
        );
}

    
function exitFromApp(buttonIndex) {
  if (buttonIndex==2){
    navigator.app.exitApp();
	}
}
