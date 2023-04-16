using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webapi.Models;

public partial class WebContext : DbContext
{
    public WebContext()
    {
        

    }

    public WebContext(DbContextOptions<WebContext> options)
        : base(options)
    {
        
    }
    public virtual DbSet<TbllistFood> TbllistFood{get;set;}=null!;
    public virtual DbSet<TblUsers> TblUsers{get;set;}=null!;
    public virtual DbSet<TbllShoppingList> TbllShoppingList{get;set;}=null!;
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=MyConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
