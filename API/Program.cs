using System;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        //We will check and seed the database if needed at the startup:
        public static void Main(string[] args)
        {
            //We will seed the database data upon startup of the program:
            var host = CreateHostBuilder(args).Build();
            using var scope = host.Services.CreateScope();
            //^^The "using" Specifies that when this scope is out of scope, to dispose of it as the garbage collector would but the collector happens on its own schedule. This is manually telling it.
            
            //Instance of the store table:
            var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
            
            //Exception handler since the normal exception handler is not activiated yet at this point in our program:
            var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
            try
            {   
                //Will seed any pending migrations and/or create the database if it does not already exist.
                context.Database.Migrate();
                DbInitializer.Initialize(context);

            }catch(Exception ex)
            {
                logger.LogError(ex, "Problem migrating data");
            }
            
            host.Run();
            
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
