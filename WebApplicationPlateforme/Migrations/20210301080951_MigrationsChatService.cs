using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApplicationPlateforme.Migrations
{
    public partial class MigrationsChatService : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "chatModels",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    date = table.Column<string>(nullable: true),
                    message = table.Column<string>(nullable: true),
                    userIdSender = table.Column<string>(nullable: true),
                    userIdReceiver = table.Column<string>(nullable: true),
                    userNameSender = table.Column<string>(nullable: true),
                    userNameReceiver = table.Column<string>(nullable: true),
                    attribut1 = table.Column<int>(nullable: false),
                    attribut2 = table.Column<int>(nullable: false),
                    attribut3 = table.Column<int>(nullable: false),
                    attribut4 = table.Column<string>(nullable: true),
                    attribut5 = table.Column<string>(nullable: true),
                    attribut6 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_chatModels", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "chatModels");
        }
    }
}
