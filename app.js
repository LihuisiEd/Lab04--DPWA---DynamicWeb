const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS' });
});


app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
    const user = { id: userId, nombre: 'Usuario ' + userId };
    res.render('perfil', { user: user });
});

// Ruta para renderizar la plantilla Pug
app.get('/miplantilla-pug', (req, res) => {

  res.render('miplantilla', {
    title: 'Mi sitio web',
    description: 'Este es un ejemplo de cómo pasar datos de plantilla en Pug',
    author: 'Eduaro Lihuisi',
    vision: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis, cum labore sapiente placeat iusto molestias aliquam harum mollitia, corrupti commodi, accusamus deserunt. Numquam ratione eos repellendus deleniti, animi vero.",
    mision: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis, cum labore sapiente placeat iusto molestias aliquam harum mollitia, corrupti commodi, accusamus deserunt. Numquam ratione eos repellendus deleniti, animi vero.",
    objetivo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis, cum labore sapiente placeat iusto molestias aliquam harum mollitia, corrupti commodi, accusamus deserunt. Numquam ratione eos repellendus deleniti, animi vero."});
});
  
// Ruta para renderizar la plantilla EJS
app.get('/miplantilla-ejs', (req, res) => {
    res.render('miplantilla.ejs', { mensaje: '¡Hola desde la plantilla EJS! 😜' });
});
  
//Ruta a mi portafolio
// Ruta para renderizar la plantilla EJS
app.get('/portafolio', (req, res) => {
  var yo = {
    nombre: 'Eduardo Lihuisi',
    correo: 'eduardo.lihuisi@tecsup.edu.pe'
  };

  var habilidades = [
    "Desarrollador Android", "Ilustrador", "Diseñador web"
  ]

  var titulos =[
    "portafolio", "habilidades", "contactos"
  ]

  var descripciones = {
    opcion1:{
      texto: "Me especializo en la creacion y diseño de sitios web y aplicativos moviles con base de datos.", 
      diferenciador: "ms"
    },
    opcion2:{
      texto: "También se ilustrar y hacer diseños para marcas, edición de videos y animación digital.",
      diferenciador: "me"
    }
  }
    
    
  

  var imagenes = {
    opcion1: {
      nombre: 'imagen1',
      posicion: "1",
      titulo: 'Aplicaciones móviles',
      descripcion: "He realizado algunas aplicaciones web las cuales han sido muy completas, hace unos meses hice este aplicativo para una empresa de fumigación."
    },
    opcion2: {
      nombre:'imagen2',
      posicion: "2",
      titulo: 'Chat Web',
      descripcion: "Este fue un laboratorio que realice y realmente estoy muy orgulloso de él porque me quedó muy bonito."
    },
    opcion3: {
      nombre: 'imagen3',
      posicion: "3",
      titulo: 'Pintura Digital',
      descripcion: "Esta pintura lo hice hace un año, durante ese tiempo todos jugaban este juego."
    },
    opcion4: {
      nombre: 'imagen4',
      posicion: "4",
      titulo: 'Ilustración Digital',
      descripcion: "Esto lo hice hace dos años, es uno de mis mejores trabajos, realmente lo aprecio mucho."
    },
    opcion5: {
      nombre:'imagen5',
      posicion: "5",
      titulo: 'Doddles for life',
      descripcion: "Esto lo hice hace tres años, estaba practicando nuevos estilos y así empece a hacer este tipo de garabatos con acuarela."
    },
    opcion6: {
      nombre: 'imagen6',
      posicion: "6",
      titulo: 'Pagina web de citas',
      descripcion: "Este fué la primera página web que hice, es netamente diseño."
    }
  }

  const currentYear = new Date().getFullYear();

  var menu = {
    opcion1: {
      nombre: 'portafolio',
    },
    opcion2: {
      nombre:'habilidades',
    },
    opcion3: {
      nombre: 'contactos'
    }
  };
  res.render('portafolio.ejs', { 
    empresa: 'Kiwivon',
    yo: yo,
    menu: menu,
    habilidades: habilidades,
    titulos: titulos,
    currentYear: currentYear,
    imagenes : imagenes,
    descripciones: descripciones
  });
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
