const User = require("../db/models/userModel");

module.exports = {

    async getUser(req, res) {

        try {
            const { id } = req.params;

            const user = await User.findById({ _id: id });

            if (user) {
                res.send(user);
            }
        } catch (err) {
            console.log(err);
        }

    },
    async postDetails(req, res) {

        try{
            
            const {id} = req.params;

            const user = await User.findByIdAndUpdate({_id : id},{
                $set:{
                    detailsOne:{
                        age:req.body.user.age,
                        expecteddate:req.body.user.expecteddate,
                        childnumber:req.body.user.childnumber,
                        currentweek:req.body.user.currentweek,
                        selectedFood:req.body.selectedFood,
                        createdTime:Date.now()
                    },
                    detailsFlag:true
                }
            });

            res.send({message:"true",verified:user.detailsFlag});

        }catch(err){
            console.log(err);
        }

    }

}