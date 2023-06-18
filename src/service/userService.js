import { PrismaClient } from "@prisma/client";
import { registerUserValidation } from "../validation/userValidation";

import { validate } from "../validation/validation.js";


const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await PrismaClient.user.count({
        where: {
            username : user.username
        }
    });

    if(countUser === 1) {
        throw new error
    }
}

