using Autodesk.Application.RestService.Service.DBModel;
using Autodesk.Application.RestService.Shared;
using Autodesk.Application.RestService.Shared.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autodesk.Application.RestService.Service.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly AutodeskDBContext _autodeskDBContext;

        private readonly IEntityMapper _entityMapper;

        public UserRepository(AutodeskDBContext autodeskDBContext, IEntityMapper entityMapper)
        {
            _autodeskDBContext = autodeskDBContext;
            _entityMapper = entityMapper;
        }

        public bool AddUser(User user)
        {
            try
            {
                var tblUser = _entityMapper.Map<User, TblUser>(user);
                tblUser.CreatedBy = "Admin";
                tblUser.ModifitedBy = "Admin";
                tblUser.CreatedDate = DateTime.Now;
                tblUser.ModifitedDate = DateTime.Now;
                tblUser.IsActive = 1;
                _autodeskDBContext.TblUser.Add(tblUser);
                _autodeskDBContext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public bool CheckUserIsExist(string userName)
        {
            try
            {
                var users = _autodeskDBContext.TblUser.Where(x => x.UserName == userName);
                if (users.Any())
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public User LoginUser(LoginUser loginUser)
        {
            try
            {
                var tblUser = _autodeskDBContext.TblUser.FirstOrDefault(x => x.UserName == loginUser.UserName && 
                x.Password==loginUser.Password);
                if (tblUser != null)
                {
                    return _entityMapper.Map<TblUser , User>(tblUser); ;
                }
                return null;
            }
            catch (Exception ex)
            {

                throw;
            }
        }


    }
}
