using Microsoft.EntityFrameworkCore;

namespace Mission13Backend.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<HiltonMovies> Movies { get; set; }
    }
}
