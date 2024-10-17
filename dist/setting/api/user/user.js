
const { body, header, validationResult } = require('express-validator');

module.exports = {
    BindUrl: function () {
        app.post('/api/signup',
            body('email').not().isEmpty().trim(), //email number validation
            body('name').not().isEmpty().trim(),
            body('adress').not().isEmpty().trim(),
            body('phone').not().isEmpty().trim(), 
            body('password').isLength({min: 5}).withMessage('Password not allowed'), //password validation
            async (req, res) => {
            try {
                // Finds the validation errors in this request and wraps them in an object with handy functions
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    var respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                } else if (!validator.validate(req.body.email)) {
                    var respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);

                } else {
                    //calling controller function
                    var data = await req.body;
                    userApiController.SIGNUP(data, function (respData) {
                        res.status(respData.ReturnCode).send(respData);
                    });
                }
            } catch (err) {
                var respData = commonController.errorValidationResponse(err);
                res.status(respData.ReturnCode).send(respData);
            }
        });
    }
}