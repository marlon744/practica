
        function mostrarNombres() {
            
            const contenedor = document.getElementById("nombres");
            
            
            contenedor.innerHTML = "";
            
        
            let lista = "<ul>";
            for (let i = 0; i < nombres.length; i++) {
                lista += `<li>${nombres[i]}</li>`;
            }
            lista += "</ul>";

        
            contenedor.innerHTML = lista;
        }

        document.getElementById("mostrarBtn").addEventListener("click", mostrarNombres);
    
