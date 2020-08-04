using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autodesk.Application.RestService.Shared
{
    public interface IEntityMapper
    {
        TDestination Map<TSource, TDestination>(TSource source);
    }
}
