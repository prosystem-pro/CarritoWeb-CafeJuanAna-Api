const Express = require('express');
const Router = Express.Router();
const Modelo = 'reportevista';
const Tabla = 'ReporteVista'
const { Listado, ObtenerPorCodigo, Buscar, Crear, Editar, Eliminar, ObtenerResumen } = require('../Controladores/ReporteVistaControlador');
const VerificarToken = require('../FuncionIntermedia/VerificarToken');
const VerificarPermisos = require('../FuncionIntermedia/VerificarPermisos'); 

Router.get(`/${Modelo}/listado`,VerificarToken, VerificarPermisos('Listado', Tabla), Listado);
Router.get(`/${Modelo}/obtenerresumen/:anio?/:mes?`, VerificarToken, VerificarPermisos('Resumen', Tabla), ObtenerResumen);
Router.get(`/${Modelo}/:Codigo`,VerificarToken,VerificarPermisos('VerUnidad',Tabla), ObtenerPorCodigo);
Router.get(`/${Modelo}/buscar/:TipoBusqueda/:ValorBusqueda`,VerificarToken,VerificarPermisos('Buscar',Tabla), Buscar);
Router.post(`/${Modelo}/crear`, Crear);
Router.put(`/${Modelo}/editar/:Codigo`, VerificarToken,VerificarPermisos('Editar',Tabla), Editar);
Router.delete(`/${Modelo}/eliminar/:Codigo`, VerificarToken,VerificarPermisos('Eliminar',Tabla),  Eliminar);


module.exports = Router;