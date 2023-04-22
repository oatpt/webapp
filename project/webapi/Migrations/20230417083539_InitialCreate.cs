using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TbllistFood",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    order = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    shop = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    locate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userreceiver = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    displaynamereceiver = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    numberphone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    senderdisplayname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    sendernumberphone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbllistFood", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "TbllShoppingList",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idreceiver = table.Column<int>(type: "int", nullable: false),
                    order = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    shop = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    locate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userreceiver = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    displaynamereceiver = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    numberphone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    usersender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    displaynamesender = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbllShoppingList", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "TblUsers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    numberphone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    displayname = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblUsers", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TbllistFood");

            migrationBuilder.DropTable(
                name: "TbllShoppingList");

            migrationBuilder.DropTable(
                name: "TblUsers");
        }
    }
}
