// Import body parser
const express = require('express')
const bodyParser = require('body-parser')


// create express app
const app = express()



// parse json data
app.use(bodyParser.json());

// parse encoded data
app.use(express.urlencoded({ extended: true }));




// simulating database 
const get_user_books =(id)=>{
  if( id === 10 ){ 
      return[{title:'Learning Java'}, {title:'Learning Python'}]
  }
  return []
}


/*
Get user Books with id 
Expexted Request Body {id:2}

*/
app.post('/user_books', (req,res)=>{
  try{
    // validate request data
    if( ! req.body.id ){
      // response back with bad request
      return res.status(400).json({status:400, message:'bad request'})
    }

    // get user data
    const user_books = get_user_books(req.body.id)  

    // if user is not found 
    if ( user_books.length == 0){
      // response back with Not Found
      return res.status(404).json({status:404, message:'User Not Found'})
    }
    
    // passed all validation
    console.log('Validation passed')

    // response back with books
    res.json({user_books:user_books, status:200, message: 'success'})

  }
  catch(error){
    res.json({status:500, message:'server error'})
  }

})


app.use('/', (req, res)=>{
    res.send('<h1>Testing...</h1>')
})

app.listen(3000,()=>console.log('Server is listing')) ;