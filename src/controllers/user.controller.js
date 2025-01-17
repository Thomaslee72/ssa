// ** Service
import userService from "../services/user.service";

// ** Constants
import { statusCode } from "../constants";

// ** Utils
import { response } from "../utils/baseResponse";

const userController = {
    getProfile: async (req, res) => {
        const { user } = req;
        try {
            const userInfo = await userService.getProfile(user.id);
            res.status(statusCode.OK).json(response.success(
                {
                    data: userInfo,
                    code: statusCode.OK,
                }
            ));
        } catch (error) {
            res.status(statusCode.BAD_REQUEST).json(response.error(
                {
                    message: error?.message,
                    code: statusCode.BAD_REQUEST,
                }
            ))
        }
    },
};

export default userController;