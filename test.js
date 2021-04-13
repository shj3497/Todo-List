var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'; /*URL*/
const encoding_KEY = 'ghN%2FQYdn8YfoEgKmKyJwojm2F6AhNVvJXlWFDWd9gWOGPW31EJIMNwVgTvZDqb%2B2pYLPWGk0Tc4oMIFNtwJu%2FA%3D%3D';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + encoding_KEY; /*Service Key*/
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent('-'); /**/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('xml'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('서울'); /**/
queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.0'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');