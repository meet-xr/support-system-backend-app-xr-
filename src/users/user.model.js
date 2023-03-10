const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


//userSchema

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        resetPasswordToken: { type: String, default: 111111 },
        resetPasswordExpires: { type: Date, default: null },
        emailToken: { type: String, default: null },
        emailTokenExpires: { type: Date, default: null },
        accessToken: { type: String, default: null }

    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;

module.exports.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10); // 10 rounds
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error("Hashing failed", error);
    }
};


