import seoExpert from "../../models/seoExpert.js";

export async function getAllExpert(req, res) {
    try {
        const seoexpert = await seoExpert.find();
        res.status(200).json(seoexpert);
    } catch (error) {
        console.log("Error in getAllExpert", error);
        res.status(500).json({ Message: "Internal server error" });
    }
}

export async function createExpert(req, res) {
    try {
        const { firstname, lastname, age, phonenumber, birthdate } = req.body;
        const newExpert = new seoExpert({ firstname, lastname, age, phonenumber, birthdate });

        await newExpert.save();
        res.status(201).json({
            message: "Expert created successfully",
            data: newExpert
        });
    } catch (error) {
        console.log("Error in createExpert", error);
        res.status(500).json({ Message: "Internal server error" });
    }
}

export async function updateExpert(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedExpert = await seoExpert.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedExpert) {
            return res.status(404).json({ message: "Expert not found!" });
        }

        res.status(200).json(updatedExpert);
    } catch (error) {
        console.log("Error in updateExpert", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export async function deleteExpert(req, res) {
    try {
        const removeExpert = await seoExpert.findById(req.params.id);

        if(!removeExpert) {
            res.status(404).json({ Message: "Expert not found!" });
        }

        await removeExpert.deleteOne();

        res.status(200).json({ Message: "Expert successfully removed" });
    } catch (error) {
        console.log("Error in deleteExpert", error);
        res.status(500).json({ Message: "Internal server error" });
    }
}