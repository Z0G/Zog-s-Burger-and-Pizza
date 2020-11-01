const Menu = require('../../models/menu')

// Menu.find({}, function(err, users) {
//     if(err) console.warn(err);
//     console.warn(users);
// })



function homeController() {
    return {

        //  Menu.find({}, function(err, users) {
        //      if(err) console.warn(err);
        //      console.warn(users);
        //  })


        async index(req,res) {
            const pizzas = await Menu.find()
            console.log(pizzas)
            return res.render('home', { pizzas: pizzas })
        }
    }
}

module.exports = homeController