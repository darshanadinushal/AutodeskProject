using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autodesk.Application.RestService.Shared;
using Autodesk.Application.RestService.Shared.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Autodesk.Application.RestService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {

        private readonly IUserManager _userManager;

        public UserController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("CheckUserIsExist")]
        public bool CheckUserIsExist(string userName)
        {
            try
            {
                var result = _userManager.CheckUserIsExist(userName);

                return result;
            }
            catch (System.Exception)
            {
                throw;
            }

        }


        [HttpPost("SaveUser")]
        public bool SaveUser(User user)
        {
            try
            {
                var result = _userManager.AddUser(user);

                return result;
            }
            catch (System.Exception)
            {
                throw;
            }

        }


        [HttpPost("Login")]
        public UserProfile Login(LoginUser loginUser)
        {
            try
            {
                var result = _userManager.LoginUser(loginUser);

                return result;
            }
            catch (System.Exception)
            {
                throw;
            }

        }

    }
}