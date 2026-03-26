
    module.exports.createListing = async (req, res) => {
        const newListing = new Listing(req.body.listing);
    
        if(req.file) {
            newListing.image = {
                url: "/uploads/" + req.file.filename,
                filename: req.file.filename
            };
        }
    
        newListing.owner = req.user._id;
    
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    };