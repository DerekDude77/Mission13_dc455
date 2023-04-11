using Microsoft.AspNetCore.Mvc;
using Mission13Backend.Data;

namespace Mission13Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<HiltonMovies> Get()
        {
            var x = context.Movies.Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();

            return x;
        }
    }
}
