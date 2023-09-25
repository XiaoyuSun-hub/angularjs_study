(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        // .controller('ShoppingListController', ShoppingListController)
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var list = this;

        list.items = ShoppingListCheckOffService.getItems();
        print(list.items)
        list.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var list = this;

        list.items = ShoppingListCheckOffService.geAlreadyBoughttItems();

    }

    // If not specified, maxItems assumed unlimited
    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var items = [
            { name: "sugar", quantity: 1 },
            { name: "zalt", quantity: 1 },
            { name: "apple", quantity: 4 },
            { name: "orange", quantity: 8 },
        ];

        var AlreadyBoughtItems = [];

        service.addItem = function (itemName, quantity) {

            var item = {
                name: itemName,
                quantity: quantity
            }
            items.push(item);

        };

        service.removeItem = function (itemIndex) {
            AlreadyBoughtItems.push(items[itemIndex]);
            items.splice(itemIndex, 1);

        };

        service.getItems = function () {
            return items;
        };


        service.geAlreadyBoughttItems = function () {
            return AlreadyBoughtItems;
        };
    }


    function ShoppingListCheckOffServiceProvider() {
        var provider = this;


        provider.$get = function () {
            var shoppingList = new ShoppingListCheckOffService();

            return shoppingList;
        };
    }

})();
