import express from 'express'
import User from '../models/userModel.js'

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
        res.send(user)  // lo enviamos a la base de datos
    }catch(error){
        res.send({msg: error.message})
    }
})

export default router;
