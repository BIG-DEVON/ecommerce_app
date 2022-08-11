const Cart = require("../models/Cart");

const { 
    verifyToken, 
    verifyTokenAuthorization, 
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/" , verifyToken, async (req,res) =>{
        const NewCart = new Cart(req.body)

        try {
            const savedCart = await NewCart.save();
            res.status(200).json(savedCart);
        } catch (err) {
            res.status(500).json(err);
        }
})


//UPDATE

router.put("/:id", verifyTokenAuthorization, async (req,res)=>{
   
   try{
         const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
           {
            $set: req.body
           }, 
        {new:true}
        );
         res.status(200).json(updatedCart);
   }catch (err){
    res.status(500).json(err);
   }
});


//DELETE
router.delete("/:id", verifyTokenAuthorization, async (req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    }catch (err) {       
        res.status(500).json(err)
    }
});

//Get USER CART
router.get("/find/:userid",  verifyTokenAuthorization, async (req,res)=>{
    try {
      const cart = await Cart.findOne({userId: req.params.userId});
     
      res.status(200).json(cart);
    }catch (err) {       
        res.status(500).json(err)
    }
});


//Get all 

router.get("/", verifyTokenAndAdmin, async (req, res) =>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err)
        
    }
});


module.exports = router;