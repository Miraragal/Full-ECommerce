import express from 'express'
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/userModel.js'
// import getToken from '../util.js'


//al igual que hicimos en server utilizamos node express para definir las rutas
const router= express.Router()


router.get("/createadmin", async (req, res)=> { /// [/api/users] we have this part in the server /createadmin y automaticamente se concatena
    try {
        const user= new User({ //creamos un nuevo usuario
            name: 'Miriam',
            email: 'mimm.ddz@hotmail.com',
            password: '0000',
            isAdmin:true
        })

        const newUser= await user.save() //guardamos user
        res.send(newUser)  // lo enviamos a la base de datos
    }catch(error){
        res.send({message: error.message})
    }
})


//ROUTE FOR SIGN IN

//Hemos movido aqui getToken. ERROR donde decia que no lo encontraba en utils... Ni flowers!!
const getToken = (user) => {
  return jwt.sign(    // 3parameters: payload ,secret key to encript the payload and the expire time
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: '48h',
    }
  )
}



router.post("/signin", async (req,res) => {
    console.log('signing in')
    const signinUser= await User.findOne ({

        email: req.body.email,
        password: req.body.password
    })
    console.log(signinUser)
    if(signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
            //we send back a token that is an identifyer where we can
            //recognize the next request is authenticated or not
        })

    } else{
        res.status(401).send({message: 'Invalid Email or Password.'})
    }

})

router.post('/register', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser)
      })
    } else {
      res.status(401).send({ message: 'Invalid User Data.' })
    }
  })

  router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  });

export default router;
