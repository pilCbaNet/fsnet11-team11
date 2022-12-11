using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Entities
{
    public partial class cryptoDbContext : DbContext
    {
        public cryptoDbContext()
        {
        }

        public cryptoDbContext(DbContextOptions<cryptoDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Billetera> Billeteras { get; set; } = null!;
        public virtual DbSet<Movimiento> Movimientos { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-HO3NOAQ\\SQLEXPRESS;Database=cryptoDb;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Billetera>(entity =>
            {
                entity.HasKey(e => e.IdBilleteras);

                entity.Property(e => e.IdBilleteras).HasColumnName("id_billeteras");

                entity.Property(e => e.IdCliente).HasColumnName("id_cliente");

                entity.Property(e => e.Saldo).HasColumnName("saldo");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.Billeteras)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Billeteras_Usuarios");
            });

            modelBuilder.Entity<Movimiento>(entity =>
            {
                entity.HasKey(e => e.IdMov);

                entity.Property(e => e.IdMov).HasColumnName("id_mov");

                entity.Property(e => e.Fecha)
                    .HasColumnType("date")
                    .HasColumnName("fecha");

                entity.Property(e => e.IdBilleteras).HasColumnName("id_billeteras");

                entity.Property(e => e.Monto).HasColumnName("monto");

                entity.Property(e => e.Operacion)
                    .HasMaxLength(50)
                    .HasColumnName("operacion");

                entity.HasOne(d => d.IdBilleterasNavigation)
                    .WithMany(p => p.Movimientos)
                    .HasForeignKey(d => d.IdBilleteras)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Movimientos_Billeteras");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdCliente);

                entity.Property(e => e.IdCliente).HasColumnName("id_cliente");

                entity.Property(e => e.Apenom)
                    .HasMaxLength(50)
                    .HasColumnName("apenom");

                entity.Property(e => e.Contraseña)
                    .HasMaxLength(50)
                    .HasColumnName("contraseña");

                entity.Property(e => e.Dni).HasColumnName("dni");

                entity.Property(e => e.Mail)
                    .HasMaxLength(50)
                    .HasColumnName("mail");

                entity.Property(e => e.Nacimiento)
                    .HasColumnType("date")
                    .HasColumnName("nacimiento");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
