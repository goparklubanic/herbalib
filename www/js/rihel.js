//var rqserver = 'http://localhost/ngh/rinaherbal/mobileApp/';
var rqserver = 'https://rina.klubaners.web.id/mobileApp/';

function infotan(ih,rp){
	if(rp=='hl'){
		localStorage.setItem('halmun','herbal.html');
	}else{
		localStorage.setItem('halmun','cari.html')
	}
	localStorage.setItem('ih',ih);
	window.location = 'detil.html';
}

function setPage(){
	if( typeof halaman == 'undefined'){
		localStorage.setItem('halaman',1);
		var halaman = localStorage.getItem('halaman');
	}
}
