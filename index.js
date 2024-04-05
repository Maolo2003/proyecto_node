let modeloProducto = require('./backend/models/productos.model')


const exp = require('express');
const app = exp();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

app.get('/productos', async (req,res)=>{
    let listadoProductos = await modeloProducto.find();
    if(listadoProductos)
        res.status(200).json(listadoProductos);
    else
        res.status(404).json({error: "No se encontraron productos"});
});

app.get('/productos/:ref', async (req,res)=>{
    let productoEncontrado = await modeloProducto.findOne({refeerencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado)
    else
        res.status(404).json({"error":"Producto no encontrado"});
});

app.post('/productos', async(req,res)=>{
    const nuevoPoducto = {
        referencia: req.body.referenciaProducto,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen:req.body.imagenProducto,
        habilitado: true,
    };

let Insercion= await modeloProducto.create(nuevoProducto);

if(Insercion)
    res.status(200).json({"mensaje":"registro exitoso"})
else   
    res.status(404).json({"mensaje":"Se presentó un error"})

});

app.post('/productos/:ref', async(req,res)=>{
    const nuevoPoducto = {
        referencia: req.params.ref,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen:req.body.imagenProducto,
        habilitado: true,
    };

let Actualizacion= await modeloProducto.findOneAndUpdate({referencia:req.params.ref},productoEditado)
if(Actualizacion)
    res.status(200).json({"mensaje":"actualizacion exitosa"})
else
    res.status(404).json({"mensaje":"Se presento un error"})

});

app.post('/productos/:id', async (req,res)=>{
    console.log(req.params.id, req.body.referenciaProducto)
    let eliminacion= await modeloProducto.findOneAndDelete({referencia:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"})
    else
        res.status(404).json({"mensaje":"Se presento un error"}) 
});

app.listen(process.env.PORT, ( )=>{
    console.log("servidor en linea")
} );