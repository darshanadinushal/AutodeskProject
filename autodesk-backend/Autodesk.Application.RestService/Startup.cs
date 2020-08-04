using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autodesk.Application.RestService.Business;
using Autodesk.Application.RestService.Service.Common;
using Autodesk.Application.RestService.Service.DBModel;
using Autodesk.Application.RestService.Service.Repository;
using Autodesk.Application.RestService.Shared;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Autodesk.Application.RestService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.WithOrigins("*");
                        builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });


            services.AddDbContext<AutodeskDBContext>(options =>
                 options.UseSqlServer(Configuration.GetConnectionString("AutodeskDBContext"),
                     sqlOptions =>
                     {
                         sqlOptions.EnableRetryOnFailure(maxRetryCount: 5,
                         maxRetryDelay: TimeSpan.FromSeconds(3),
                         errorNumbersToAdd: null);
                     }));

            services.AddSingleton<IEntityMapper, EntityMapper>();

            //Repositoty
            services.AddScoped<IUserRepository, UserRepository>();

            //Managers
            services.AddScoped<IUserManager, UserManager>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
