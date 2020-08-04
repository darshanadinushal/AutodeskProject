using Autodesk.Application.RestService.Shared.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autodesk.Application.RestService.Shared
{
    public interface IUserManager
    {
        bool AddUser(User user);

        bool CheckUserIsExist(string userName);

        UserProfile LoginUser(LoginUser loginUser);
    }
}
