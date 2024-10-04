
            // Seleccionar los elementos del DOM
            const inputComentario = document.getElementById('inputComentario');
            const listaComentarios = document.getElementById('listaComentarios');
    
            // Función para agregar un comentario
            function agregarComentario() {
                const textoComentario = inputComentario.value;
    
                if (textoComentario === '') {
                    alert('Escribe un comentario primero.');
                    return;
                }
    
                // Crear un nuevo elemento de lista (li)
                const nuevoComentario = document.createElement('li');
                nuevoComentario.textContent = textoComentario;
    
                // Añadir el comentario a la lista
                listaComentarios.appendChild(nuevoComentario);
    
                // Limpiar el campo de comentario
                inputComentario.value = '';
            }
    
            // Agregar el comentario al presionar 'Enter'
            inputComentario.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' && !e.shiftKey) { // Evita salto de línea con Shift+Enter
                    e.preventDefault(); // Evita el salto de línea
                    agregarComentario();
                }
            });






            
            const cambiar2 = document.querySelector('.bod'); // Selecciona el body con clase 'bod'
            const cambiar1 = document.querySelector(".like"); // Selecciona la imagen como botón
            const a = document.querySelector(".aa");
            const dos = document.querySelector(".dos")
            const tres = document.querySelector(".tres")
            const b = document.querySelector(".b");
            const bb = document.querySelector(".bb");
            const bbb = document.querySelector(".bbb");
            
      

            b.addEventListener('click', function(){
                
                a.classList.toggle('imagenAzul')
                b.classList.toggle('colorAzul')
            })
            