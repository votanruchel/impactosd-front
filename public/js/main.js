//Start modal on click
const modal = document.querySelector('.body-container');
const modalContainerSecondary = document.querySelector('.container-modal-form');
const form = document.querySelector('.container-form');

function toggleModal(){
    form.classList.add('fadeIn-modal');
    form.classList.remove('fadeOut-modal');
    const el = document.querySelector('.body-container')
    
    if(el.style.display === 'none' || el.style.display === ''){
        el.style.display = 'block';
    }else{
        el.style.display = 'none';
    }
}

function closeModal(el){
    form.classList.add('fadeOut-modal');
    form.classList.remove('fadeIn-modal');
    setTimeout(()=>{
        el.style.display = 'none';
    },600)
    
    
}

window.onclick = function(event) {
    if (event.target == modal ||event.target == modalContainerSecondary) {
      closeModal(modal);
    }
  }

  async function readCities(){
    return new Promise(async (resolve, reject)=>{
        const response = await fetch('public/js/estados-cidades.json')
        .then(res=>res.json())
        .then((res)=>{return res})
        .catch((err)=>{return err});
        resolve(response);
    })
  }

  (async()=>{
    const result = await readCities()
    console.log(result)
  })();



// Upload annex 

let drop_ = document.querySelector('.area-upload-annex #upload-file');
drop_.addEventListener('dragenter', function(){
	document.querySelector('.area-upload-annex .label-upload').classList.add('highlight');
});



drop_.addEventListener('dragleave', function(){
	document.querySelector('.area-upload-annex .label-upload').classList.remove('highlight');
});

drop_.addEventListener('drop', function(){
	document.querySelector('.area-upload-annex .label-upload').classList.remove('highlight');
});



function validarArquivo(file){
	console.log(file);
	// Tipos permitidos
	var mime_types = [ 'image/jpeg', 'image/png' ];
	
	// Validar os tipos
	if(mime_types.indexOf(file.type) == -1) {
		return {"error" : "O arquivo " + file.name + " não permitido"};
	}

	// Apenas 2MB é permitido
	if(file.size > 2*1024*1024) {
		return {"error" : file.name + " ultrapassou limite de 2MB"};
	}

	// Se der tudo certo
	return {"success": "Enviando: " + file.name};
}



// document.querySelector('#upload-file').addEventListener('change', function() {
//   var files = this.files;
//   for(var i = 0; i < files.length; i++){
//   var info = validarArquivo(files[i]);

//  let = document.querySelectorAll('.label-upload');

//   if (info){

//   }
      
//   };
//   });