// WANGY.JS
function wangy(nama) {
	var nama = document.getElementById("nama").value;
	var namaKecil = nama.toLowerCase();
	var namaBesar = nama.toUpperCase();
	var namaKapital = nama.charAt(0).toUpperCase() + nama.slice(1);
	var long = nama.length-1;
	var lc = namaBesar.charAt(nama.length-1).repeat(10);
	var template;
	template = namaBesar+'......... '+namaBesar+' '+namaBesar+lc+' AAAAAAAAAAAAAAAAAAAAAAAGH ❤ ❤ ❤ ❤ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya '+namaKecil+' wangi aku mau nyiumin aroma wanginya '+namaKecil+'AAAAAAAH ~~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~~ AAAAAH '+namaBesar+' keluar pertama kali juga manis ❤ ❤ ❤ dia pas ngedesah juga manis banget AAAAAAAAH '+namaBesar+'LUCCUUUUUUUUUUUUUUU............ GUA BAKAL BAKAR DUIT 12 JUTA RUPIAH BUAT '+namaBesar+' AAAAAAAAAAAAAAAAAAAAAAAAAAAAGH ❤ ❤ ❤ \napa ? '+namaBesar+' itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. '+namaKecil+' ngeliat gw ... '+namaBesar+' di laptop ngeliatin gw. ❤ ❤ ❤ '+namaKecil+'... kamu percaya sama aku ? aaaaaaaaaaah syukur '+namaKecil+' gak malu merelakan aku aaaaaah ❤ ❤ ❤ YEAAAAAAAAAAAH GUA MASIH PUNYA '+namaBesar+' HU HA HU HI HU HA HU HI AKU SAYANG '+namaBesar+' AKU CINTA '+namaBesar+' AKU SUAMII '+namaBesar;
	document.getElementById("isi").value=template;
	document.getElementById("isi").select();document.execCommand("copy");
}
$('#btn-nama').click(function () {
	if (document.getElementById("nama").value=='') {
		alert('Isi Dulu Namanya');
	} else {
		wangy(nama);
	}
});