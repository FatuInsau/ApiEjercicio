const artistas = require ('./data.json');
const fs = require ('fs');

// Funcion para escribir en el json
const escribir = (datos) => { 
    fs.writeFileSync('./data.json', JSON.stringify(datos));
};

// Objetos con funciones para las rutas
const procesaDatos = {
    mostrar: () => artistas,
    crear: (nuevoArtista) => {
        artistas.push(nuevoArtista);
        escribir(artistas);
    },
    modificar: (id,artistaModificado) => {
        artistas.forEach((artista) => {
            if (artista.id == id) {
                artista.nombre = artistaModificado.nombre;
                artista.followers = artistaModificado.followers;
                artista.genero = artistaModificado.genero;
                artista.imagen = artistaModificado.imagen;
            }
        })
        escribir(artistas); 
    },
    eliminar: (id) => {
        const artistasModificado = artistas.filter((artista) => {
            return artista.id != id;
        });
        escribir(artistasModificado);
    },
    agregarSeguidor: (id) => {
        artistas.forEach((artista) => {
            if (artista.id == id) {
                artista.followers ++ ;
            }
        })
        escribir(artistas); 
    },
    sacarSeguidor: (id) => {
        artistas.forEach((artista) => {
            if (artista.id == id) {
                artista.followers -- ;
            }
        })
        escribir(artistas); 
    },
}

module.exports = procesaDatos;