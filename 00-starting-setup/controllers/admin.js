const { Sequelize } = require('sequelize');
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description
  })
  .then( ()=>res.redirect('/admin/products'))
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then(product =>{
    if(!product){
      return res.redirect('/')
    }

  res.render('admin/edit-product', {
  pageTitle: 'Add Product',
  path: '/admin/edit-product',
  editing: editMode,
  product: product
});

})
};

exports.postEditProduct = (req, res, next)=>{
 const prodId = req.body.productId;
 const updatedTitle = req.body.title;
 const updatedPrice = req.body.price;
 const updatedImageUrl = req.body.imageUrl;
 const updatedDesc = req.body.description; 
 Product.findByPk(prodId)
 .then(product =>{
   product.title = updatedTitle,
   product.imageUrl = updatedImageUrl,
   product.price = updatedPrice,
   product.description = updatedDesc
   return product.save();

  }).then(
    result => 
    {res.redirect('/admin/products')
    console.log('updated')
  }).catch(err => console.log(err))
}

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.destroy({where :{id : prodId}})
  .then(()=>{
    res.redirect('/admin/products');
  })
  
};





exports.getProducts = (req, res, next) => {
req.user.getProducts()
  .then(Products=>{
    res.render('admin/products', {
      prods: Products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })

  })
};
