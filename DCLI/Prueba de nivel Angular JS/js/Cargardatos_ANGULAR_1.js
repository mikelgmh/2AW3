var miAplicacion = angular.module('miAplicacion', []);

miAplicacion.controller('mainController', ["$scope", "$http", function ($scope, $http) {

    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    $scope.listaARTICULOS = [{
            "id": "0",
            "nombre": "Boli",
            "Precio": 2,
            "StockMinimo": 40,
            "Stock": 56
        },
        {
            "id": "1",
            "nombre": "Cuaderno",
            "Precio": 4,
            "StockMinimo": 50,
            "Stock": 20
        },
        {
            "id": "2",
            "nombre": "Boli",
            "Precio": 2,
            "StockMinimo": 45,
            "Stock": 56
        },
        {
            "id": "3",
            "nombre": "Goma",
            "Precio": 2,
            "StockMinimo": 100,
            "Stock": 56
        },
        {
            "id": "4",
            "nombre": "Cartulina",
            "Precio": 1,
            "StockMinimo": 30,
            "Stock": 56
        },
        {
            "id": "5",
            "nombre": "Tijeras",
            "Precio": 6,
            "StockMinimo": 45,
            "Stock": 56
        },
        {
            "id": "6",
            "nombre": "Rotulador",
            "Precio": 3,
            "StockMinimo": 40,
            "Stock": 56
        },
        {
            "id": "7",
            "nombre": "Reglas",
            "Precio": 7,
            "StockMinimo": 40,
            "Stock": 60
        },
        {
            "id": "8",
            "nombre": "Compas",
            "Precio": 9,
            "StockMinimo": 20,
            "Stock": 10
        },
        {
            "id": "9",
            "nombre": "Estuche",
            "Precio": 3,
            "StockMinimo": 0,
            "Stock": 0
        },
        {
            "id": "10",
            "nombre": "Mochila",
            "Precio": 15,
            "StockMinimo": 40,
            "Stock": 56
        }
    ];

    $scope.listaUSUARIOS = [{
            "idUsuario": '1',
            "NombreUsuario": 'Kepa',
            "Tipo": 'VIP'
        },
        {
            "idUsuario": '2',
            "NombreUsuario": 'Miren',
            "Tipo": 'BASICO'
        },
        {
            "idUsuario": '3',
            "NombreUsuario": 'Aitor',
            "Tipo": 'ADMIN'
        }
    ];
    $scope.x = [{
        "Stock": '',
        "Precio": ''
    }];

    $scope.resultUserSelect = {
        idUsuario: "",
        NombreUsuario: "",
        Tipo: ""
    }

    $scope.showSimular = 0;
    $scope.showNavAdmin = 0;
    $scope.zonaIkasleak = 1;
    $scope.zonaAdmin = 0;

    $scope.idArticulo = "";
    $scope.nombreArticulo = "";
    $scope.precioArticulo = "";
    $scope.stockArticulo = "";
    $scope.editarStock = "";
    $scope.editarPrecio = "";

    $scope.cantidad = "";
    $scope.total = "";

    $scope.mostrarNavSiAdmin = function () {
        if ($scope.resultUserSelect.NombreUsuario == "Kepa") {
            $scope.showNavAdmin = 1;
        } else {
            $scope.showNavAdmin = 0;
        }
    };

    $scope.mostrarArticuloEnTabla = function () {
        $scope.idArticulo = $scope.selectedArticle.id;
        $scope.nombreArticulo = $scope.selectedArticle.nombre;
        $scope.precioArticulo = $scope.selectedArticle.Precio;
        $scope.stockArticulo = $scope.selectedArticle.Stock;
    };

    $scope.calcularCantidad = function () {
        $scope.total = $scope.cantidad * $scope.selectedArticle.Precio;
    };

    $scope.compraPosible = function () {

        if ($scope.cantidad.length == 0 || $scope.cantidad == 0) {
            alert("El input no puede estar vacío o ser 0");
        } else {
            if ($scope.cantidad > $scope.selectedArticle.Stock) {
                alert("La cantidad es introducida es superior al stock");
            } else {
                alert("La compra es posible");
            }
        }
    };

    $scope.editarArticulo = function (pid) {
        alert("Se ha modificado el resgisto del artículo " + pid);

    };

    $scope.borrarArticulo = function (pid,stock) {
        if(stock == 0){
            angular.forEach($scope.listaARTICULOS, function (value, key) {
                if (key == pid) {
                    $scope.listaARTICULOS.splice(pid, 1);
                }
            });
            alert("Articulo borrado");
        }else{
            alert("El stock no es 0, no se puede borrar");
        }

    };

}]);

/* $("#compraPosible").click(function() {
  alert("Handler for .click() called.");
}); */