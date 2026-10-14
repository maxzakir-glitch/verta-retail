/* Пополняемые каталоги. Добавляйте только согласованные изделия.
   Пример СТРУКТУРЫ, не реальный товар:
   {name:'Название', dimensions:'Габариты', material:'Материал', image:'assets/images/фото.webp'}
   Цены на странице не публикуются. */
window.VERTA = {
  formEndpoint: '',
  email: 'sale@verta62.ru',
  catalogs: {bakery:[], coffee:[], drinks:[], vegetables:[], grocery:[], shelving:[], cafe:[], interior:[], 'shop-in-shop':[]},
  // Только проверенные фото с исходного сайта. Не приписывайте отделам чужие проекты.
  projects: [
    {title:'Гипермаркет «Глобус», г. Одинцово', image:'assets/images/project-globus.webp', supermarket:true, categories:[]},
    {title:'Гипермаркет «Глобус»', image:'assets/images/project-globus-2.webp', supermarket:true, categories:[]}
  ]
};
