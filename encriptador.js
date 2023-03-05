const texto = document.querySelector('.textarea')
const resultado = document.querySelector('.mensaje');
const btncopiar = document.querySelector('.boton-copiar');
btncopiar.style.display = 'none';

// funcion encriptador
function botonencriptar() {
	const texto_encriptado = Encriptar(texto.value)
	resultado.value = texto_encriptado;
	resultado.style.backgroundImage = 'none';
	btncopiar.style.display = 'block';

}
function Encriptar(textoEncriptado) {
	let matris = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
	textoEncriptado = textoEncriptado.toLowerCase();
	for (var n = 0; n < matris.length; n++) {
		if (textoEncriptado.includes(matris[n][0])) {
			textoEncriptado = textoEncriptado.replaceAll(matris[n][0], matris[n][1])
		}
	} return textoEncriptado
}


function botondesencriptar() {
	const texto_encriptado = desncriptar(texto.value)
	resultado.value = texto_encriptado; resultado.style.backgroundImage = 'none';
	btncopiar.style.display = 'block';

} function desncriptar(textoDesncriptado) {
	let matris = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
	textoDesncriptado = textoDesncriptado.toLowerCase();
	for (var n = 0; n <matris.length; n++) {
			if (textoDesncriptado.includes(matris[n][1])) {
				textoDesncriptado = textoDesncriptado.replaceAll(matris[n][1], matris[n][0]);
			}
	} return textoDesncriptado
}
function hola(){
	console.log('holamundo');
}






function copiar() {
	resultado.select();
	navigator.clipboard.writeText(resultado.value);
	resultado.value = '';
	btncopiar.style.display = 'none';
	alert('Se a copiado el texto')
}
