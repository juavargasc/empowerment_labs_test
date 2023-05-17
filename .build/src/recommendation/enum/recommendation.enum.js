"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.food_restrictions = exports.content = exports.type_food = exports.price = exports.foods = exports.characteristics = exports.type_search = void 0;
var type_search;
(function (type_search) {
    type_search["restaurante"] = "restaurante";
    type_search["receta"] = "receta";
    type_search["todo"] = "todo";
})(type_search = exports.type_search || (exports.type_search = {}));
var characteristics;
(function (characteristics) {
    characteristics["Entrega_a_domicilio"] = "Entrega_a_domicilio";
    characteristics["Comida_para_llevar"] = "Comida_para_llevar";
    characteristics["Servicio_de_mesa"] = "Servicio_de_mesa";
})(characteristics = exports.characteristics || (exports.characteristics = {}));
var foods;
(function (foods) {
    foods["Desayuno"] = "Desayuno";
    foods["Brunch"] = "Brunch";
    foods["Almuerzo"] = "Almuerzo";
    foods["Cena"] = "Cena";
})(foods = exports.foods || (exports.foods = {}));
var price;
(function (price) {
    price["Gama_media"] = "Gama_media";
    price["Alta_cocina"] = "alta_cocina";
})(price = exports.price || (exports.price = {}));
var type_food;
(function (type_food) {
    type_food["Sudamericana"] = "Sudamericana";
    type_food["Mariscos"] = "Mariscos";
    type_food["Latina"] = "Latina";
})(type_food = exports.type_food || (exports.type_food = {}));
var content;
(function (content) {
    content["Pescado"] = "Pescado";
    content["Ceviche"] = "Ceviche";
    content["Ensalada"] = "Ensalada";
    content["Camarones"] = "Camarones";
})(content = exports.content || (exports.content = {}));
var food_restrictions;
(function (food_restrictions) {
    food_restrictions["Apto_para_vegetarianos"] = "Apto_para_vegetarianos";
    food_restrictions["Opciones_veganas"] = "Opciones_veganas";
    food_restrictions["Opciones_sin_gluten"] = "Opciones_sin_gluten";
})(food_restrictions = exports.food_restrictions || (exports.food_restrictions = {}));
//# sourceMappingURL=recommendation.enum.js.map