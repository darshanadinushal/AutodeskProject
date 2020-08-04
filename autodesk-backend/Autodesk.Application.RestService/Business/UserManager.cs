using Autodesk.Application.RestService.Shared;
using Autodesk.Application.RestService.Shared.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autodesk.Application.RestService.Business
{
    public class UserManager : IUserManager
    {
        private readonly IUserRepository _userRepository;

        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public bool CheckUserIsExist(string userName)
        {
            try
            {
                var returnObject = _userRepository.CheckUserIsExist(userName);

                return returnObject;
            }
            catch (Exception)
            {

                throw;
            }

        }

        public UserProfile LoginUser(LoginUser loginUser)
        {
            try
            {
                var user= _userRepository.LoginUser(loginUser);
                if (user!=null)
                {
                    return new UserProfile()
                    {
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Id= user.Id
                    };
                }
                return null;
            }
            catch (Exception)
            {

                throw;
            }

        }


        public bool AddUser(User user)
        {
            try
            {
                var returnObject = _userRepository.AddUser(user);

                return returnObject;
            }
            catch (Exception)
            {

                throw;
            }

        }


    }
}
