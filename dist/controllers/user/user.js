const userModal = require('../../models/user');

module.exports = {
    SIGNUP: async function (data, callback) {
		//send data
		var sendData = {
			ReturnCode: 200,
			err: 0,
			Data: {},
			ReturnMsg: ""
		};

		//condition
		var condition = {
			email: data.email,
            phone:data.phone
		};
		var usersData = await userModal.find(condition);
		if (usersData.length > 0) {
			usersData = usersData[0]
			if (usersData.temp == true) {
				data.password = md5(data.password);
				var tempCreateData = {
					name: data.name,
					password: data.password,
					temp: false
				}
				const userUpdateData = await userModal.updateOne(condition, tempCreateData)

				var payload = {
					_id: userUpdateData._id,
				};
				console.log(process.env.SECRET_KEY);
				
				const token = jwt.sign(payload, process.env.SECRET_KEY);
				var link = `${data.url}auth/user-register-verify/${token}`
				console.log("link>>", link)
				commonController.__sendEmail(usersData.email, link);

				var payload = {
					_id: usersData._id,
					active: usersData.active,
					block: usersData.block
				}
				const expireDate = new Date(new Date().setHours(new Date().getHours() + 24));
				const z = {
					Y: expireDate.getFullYear(),
					M: expireDate.getMonth() + 1,
					d: expireDate.getDate(),
					h: expireDate.getHours(),
					m: expireDate.getMinutes(),
					s: expireDate.getSeconds()
				};

				//give response
				sendData['Data'] = {
					Userdata: {
						name: usersData.name,
						email: usersData.email,
						email_verify: usersData.email_verify
					},
					ReturnMsg: "A One time password has been sent to " + data.email,
					Token: jwt.sign(payload, process.env.SECRET_KEY),
					TokenType: "Bearer",
					TokenExpire: z.Y + "-" + ((z.M > 9) ? z.M : '0' + z.M) + "-" + ((z.d > 9) ? z.d : '0' + z.d) + " " + ((z.h > 9) ? z.h : '0' + z.h) + ":" + ((z.m > 9) ? z.m : '0' + z.m) + ":" + ((z.s > 9) ? z.s : '0' + z.s)
				};
				callback(sendData);


			} else {
				sendData['ReturnCode'] = 406;
				sendData['err'] = 1;
				sendData['ReturnMsg'] = "email already exists";
				callback(sendData);
			}
		} else {
			//convert password into encripted format
			data.password = md5(data.password);

			//insert into database
			var respData = await userModal.create(data);
			console.log("respData>>", respData)
			if (respData) {

				var payload = {
					_id: respData._id,
				};

				const token = jwt.sign(payload, process.env.SECRET_KEY || "bookswap");
				var link = `${process.env.LOCALHOST}auth/user-register-verify/${token}`
				console.log("link>>", link)
				commonController.__sendEmail(respData.email, link);
			}
			//generate token for user
			var payload = {
				_id: respData._id,
				active: respData.active,
				block: respData.block
			};
			const expireDate = new Date(new Date().setHours(new Date().getHours() + 24));
			const z = {
				Y: expireDate.getFullYear(),
				M: expireDate.getMonth() + 1,
				d: expireDate.getDate(),
				h: expireDate.getHours(),
				m: expireDate.getMinutes(),
				s: expireDate.getSeconds()
			};

			//give response
			sendData['Data'] = {
				Userdata: {
					name: respData.name,
					email: respData.email,
					email_verify: respData.email_verify
				},
				ReturnMsg: "A One time password has been sent to " + data.email,
				Token: jwt.sign(payload, process.env.SECRET_KEY),
				TokenType: "Bearer",
				TokenExpire: z.Y + "-" + ((z.M > 9) ? z.M : '0' + z.M) + "-" + ((z.d > 9) ? z.d : '0' + z.d) + " " + ((z.h > 9) ? z.h : '0' + z.h) + ":" + ((z.m > 9) ? z.m : '0' + z.m) + ":" + ((z.s > 9) ? z.s : '0' + z.s)
			};
			callback(sendData);
		}
	},
}