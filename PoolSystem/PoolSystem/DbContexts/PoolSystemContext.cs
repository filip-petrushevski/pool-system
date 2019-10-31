using Microsoft.EntityFrameworkCore;
using PoolSystem.Models;

namespace PoolSystem.DbContexts
{
    public partial class PoolSystemContext : DbContext
    {
        public PoolSystemContext()
        {
        }

        public PoolSystemContext(DbContextOptions<PoolSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Card> Card { get; set; }
        public virtual DbSet<CardInfo> CardInfo { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<Locker> Locker { get; set; }
        public virtual DbSet<Member> Member { get; set; }
        public virtual DbSet<Payment> Payment { get; set; }
        public virtual DbSet<Visit> Visit { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=PoolSystem;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Card>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.HasOne(d => d.CardInfo)
                    .WithMany(p => p.Card)
                    .HasForeignKey(d => d.CardInfoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Card_CardInfo");

                entity.HasOne(d => d.Payment)
                    .WithMany(p => p.Card)
                    .HasForeignKey(d => d.PaymentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Card_Payment");
            });

            modelBuilder.Entity<CardInfo>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.DeletedOn).HasColumnType("datetime");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Locker>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();
            });

            modelBuilder.Entity<Member>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.LastPayment)
                    .WithMany(p => p.Member)
                    .HasForeignKey(d => d.LastPaymentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Member_Payment");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.HasOne(d => d.CardNavigation)
                    .WithMany(p => p.PaymentNavigation)
                    .HasForeignKey(d => d.CardId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Payment_Card");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Payment)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Payment_Employee");

                entity.HasOne(d => d.MemberNavigation)
                    .WithMany(p => p.Payment)
                    .HasForeignKey(d => d.MemberId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Payment_Member");
            });

            modelBuilder.Entity<Visit>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.ArrivalDateTime).HasColumnType("datetime");

                entity.Property(e => e.LeaveDateTime).HasColumnType("datetime");

                entity.HasOne(d => d.Card)
                    .WithMany(p => p.Visit)
                    .HasForeignKey(d => d.CardId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Visit_Card");

                entity.HasOne(d => d.Locker)
                    .WithMany(p => p.Visit)
                    .HasForeignKey(d => d.LockerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Visit_Locker");
            });
        }
    }
}
