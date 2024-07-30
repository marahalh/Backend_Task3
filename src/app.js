const express = require("express")
const path = require("path")

const app = express()
const x = path.join(__dirname , '../public')
app.use(express.static(x))

const port = process.env.PORT || 3000


 app.get( '/prices' , (req,res) => {
    res.send("Price page content 'route from (/prices)'")
 })


 app.get( '/about' , (req,res) => {
    res.send("About page content 'route from (/about)'")
 })

 app.get( '/page1' , (req,res) => {
    res.send('<h2>Page1 content: route from (/page1) </h2><h2>my name is Marah </h2>  <button>Submit</button>')
 })

 app.get( '/page2' , (req,res) => {
    res.send({
        name : "Marah",
        age : 30,
        city : "Damascus",
        dec: "Page2 content 'rout from(/page2)'"
    })
 })


 app.get( '/page3' , (req,res) => {
    res.send({
        name : "Yara",
        age : 31,
        city : "Damascus",
         dec: "Page3 content 'rout from(/page3)'"
    })
 })

 ///////8/////******************************************************************************************************************************************************** */

 app.set('view engine', 'hbs');

 const viewsDirectory = path.join (__dirname , '../templates/views')
 app.set('views', viewsDirectory);

  // to read partials : 
  var hbs = require('hbs');
  const partialsPath = path.join(__dirname , "../templates/partials")
  hbs.registerPartials(partialsPath)


  app.get ('/' , (req,res) => {
   res.render('index' , {
       title : "HOME",
       desc : "HPS Home page"
   })
})

app.get ('/service' , (req,res) => {
   res.render('service' , {
       title : "SERVICE",
       name: "OurService",
       city:"Syria",
       img: "images/service1.jpg"
   })
})


app.get ('/team' , (req,res) => {
   res.render('team' , {
       title : "TEAM",
       name: "OurTeam",
       city:"Damascus",
       img: "images/member2-col.jpg"
   })
})

app.get ('/Products' , (req,res) => {
   res.render('Products' , {
       title : "OurProducts",
       name: "Books",
       price: 10 ,
       img: "images/book2.jpg"
   })
})

app.get ('/Customers' , (req,res) => {
   res.render('Customers' , {
       title : "OurCustomers",
       Category: "Software",
       Country:"Syria",
       img: "images/socaity.jpg"
   })
})




 app.listen( port , () => {
    console.log("app listening on port 3000")
})
