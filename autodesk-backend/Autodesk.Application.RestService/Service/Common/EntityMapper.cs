using Autodesk.Application.RestService.Service.DBModel;
using Autodesk.Application.RestService.Shared;
using Autodesk.Application.RestService.Shared.Model;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autodesk.Application.RestService.Service.Common
{
    public class EntityMapper : IEntityMapper
    {
        private MapperConfiguration _config;


        private IMapper _mapper;

        public EntityMapper()
        {
            Configure();
            Create();
        }

        private void Configure()
        {
            _config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<TblUser, User>().ReverseMap();
            });
        }

        private void Create()
        {
            _mapper = _config.CreateMapper();
        }

        public TDestination Map<TSource, TDestination>(TSource source)
        {
            return _mapper.Map<TSource, TDestination>(source);
        }
    }
}
